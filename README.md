# Campa Cola - The Next Generation

India's Original Cola, reimagined. This is a complete modern AI-powered marketing and conversion website for Campa. The website emphasizes Campa's Indian heritage, nostalgia, affordability, youth appeal, and modern revival, designed to compete with global beverage brands.

## ✨ Features

- **Immersive Hero Section:** Engaging visuals with dynamic background effects and animations.
- **Product Showcase:** Interactive and responsive gallery showcasing the Campa flavor lineup.
- **Brand Story:** An elegant timeline highlighting Campa's legacy and revival.
- **AI Flavor Match Quiz:** Interactive quiz powered by Gemini AI to recommend the perfect Campa flavor based on user mood and preferences.
- **Store Locator:** Intuitive map interface to find nearby retailers that stock Campa products.
- **AI Chatbot Guide:** A 24/7 intelligent assistant built with Gemini AI for product discovery and support.
- **Firebase Authentication:** Secure user login via Google OAuth, with automatic syncing to Firestore.
- **Fully Responsive & Modern Design:** Crafted using Tailwind CSS and Framer Motion for a premium layout and buttery-smooth animations.

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS (v4), Framer Motion, Lucide Icons
- **Backend/API:** Node.js, Express, Vite Middleware
- **AI Capabilities:** Google Gemini API (`@google/genai`)
- **Database & Auth:** Firebase (Firestore, Authentication)

## 📡 API Endpoints

- `POST /api/flavor-match`: Takes user preferences and utilizes Gemini AI to return a personalized product recommendation with a fun, custom reason.
- `POST /api/chat`: Handles conversational queries utilizing Gemini AI based on context and conversational history.

## 📁 Project Structure

### 🎨 Front-End
```
.
└── frontend/
    ├── components/
    │   ├── sections/        # Main landing page blocks (Hero, BrandStory, ProductShowcase, etc.)
    │   └── AIChatbot.tsx    # Intelligent Floating AI Chat Component
    ├── context/
    │   └── AuthContext.tsx  # User Session Management using Firebase
    ├── lib/
    │   ├── utils.ts         # Utility functions (Tailwind string merge mapping)
    │   └── firebase.ts      # Firebase initialization logic
    ├── App.tsx              # Main application root and navigation overlay
    ├── index.css            # Global CSS incl. Tailwind declarations
    └── main.tsx             # React entry point
```

### ⚙️ Back-End
```
.
├── backend/
│   └── server.ts            # Express backend routing, Gemini integration, and Vite handlers
├── firestore.rules          # Security and validation rules for database
└── firebase-blueprint.json  # Schema and rule scaffolding definitions
```

### 🛠 Others (Configuration & Tooling)
```
.
├── .env.example             # Template for required environment variables
├── package.json             # App dependencies and scripts
├── tsconfig.json            # TypeScript compiler configuration
├── vite.config.ts           # Build and development tooling configuration
└── README.md                # Project documentation
```

## 📋 Prerequisites

Ensure you have the following ready before starting:
- **Node.js** (v18+)
- **npm** or yarn package manager
- **Firebase Project** (with Firestore Database & Google Authentication enabled)
- **Google Gemini API Key**

## 🚀 Getting Started

### 1. Clone & Install

First, grab the repository and install all necessary dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

### 2. Configure Environment

Create a `.env` file in the root directory (you can use `.env.example` as a template) and add your AI credentials:

```env
GEMINI_API_KEY="your-gemini-api-key"
```

*Note: Firebase configuration is injected via `firebase-applet-config.json` inside the workspace context.*

### 3. Run Development Servers

Start the integrated frontend and backend development environment:

```bash
npm run dev
```

The application will boot up and be accessible locally at `http://localhost:3000`.
