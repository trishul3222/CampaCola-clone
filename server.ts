import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  // API Routes
  app.post('/api/flavor-match', async (req, res) => {
    try {
      const { preferences } = req.body;
      const prompt = `You are a flavor expert for Campa Cola. A user has provided these preferences: ${preferences}. 
Recommend one of our products: Campa Cola (Classic, bold), Campa Orange (Sweet, fruity, vibrant), Campa Lemon (Citrusy, refreshing), or Campa Energy (High energy, bold). 
Respond in JSON format with two fields: "product" (the name of the product) and "reason" (a 1-2 sentence fun, energetic reason why it fits them).`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        }
      });
      
      res.json(JSON.parse(response.text || '{}'));
    } catch (error) {
      console.error('Error in flavor match:', error);
      res.status(500).json({ error: 'Failed to find a flavor match' });
    }
  });

  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      const prompt = `You are the Campa AI Assistant. You are energetic, bold, youthful, and represent India's Original Cola, reimagined. 
Keep answers concise, fun, and persuasive. Here is the conversation so far:
${history.map((h: any) => `${h.role}: ${h.text}`).join('\n')}
User: ${message}
Assistant:`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error('Error in chat:', error);
      res.status(500).json({ error: 'Failed to process chat' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
