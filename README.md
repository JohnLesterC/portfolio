# John Lester's Portfolio

A personal portfolio website built with the **MERN stack** (MongoDB, Express, React, Node.js).

## Project Structure

```
portfolio/
├── client/       # React frontend
├── server/       # Node.js + Express backend
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/your-username/portfolio.git
   ```

2. Install server dependencies
   ```bash
   cd server
   npm install
   ```

3. Install client dependencies
   ```bash
   cd client
   npm install
   ```

4. Create a `.env` file in `/server` with:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

### Running the App

- **Server:** `cd server && npm run dev`
- **Client:** `cd client && npm start`
