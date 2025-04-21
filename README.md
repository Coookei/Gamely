# 🎮 Gamely

A React project that showcases games using the [RAWG API](https://rawg.io/apidocs).

## Features

- Browse games by genre, platform and search.
- Responsive design for use across devices.
- Dynamic skeleton loading for an improved user experience.

## Setup

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Coookei/game-hub.git
cd game-hub
```

### 2. Install dependencies

Ensure that Node.js is installed. Then run:

```bash
npm install
```

### 3. Get an API Key

Create a free account and get an API key from [RAWG API](https://rawg.io/apidocs).

### 4. Add environment variables

Create a `.env` file in the root directory and add the following variables:

```bash
VITE_API_URL=https://api.rawg.io/api/
VITE_API_KEY=your_api_key_here
```

### 5. Start the server

Run the following command to start the app:

```bash
npm run dev
```

The app will be available at the URL shown in the console, normally `http://localhost:5173` on localhost.
