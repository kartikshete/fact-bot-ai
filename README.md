# 🤖 FactBot AI

 ![React](https://img.shields.io/badge/-React-blue?style=flat-square) ![Node.js](https://img.shields.io/badge/-Node.js-blue?style=flat-square) ![Productivity](https://img.shields.io/badge/-Productivity-blue?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A lightweight Python & Flask powered microservice designed to fetch, store, and serve interesting facts dynamically.

## 📝 Overview
FactBot AI acts as a smart backend service. Built utilizing Flask, the application exposes endpoints that can dynamically inject new facts directly into a local JSON store and serve random facts directly to the client interface. It demonstrates core REST API concepts and file-handling logic in Python.

## ✨ Key Features
- **Flask REST Routing**: Organized endpoint handling (`/get-fact`, `/add-fact`).
- **Dynamic File I/O Storage**: Bypasses heavy databases by dynamically utilizing a robust `facts.json` file for persistence.
- **Client-Ready UI**: Includes HTML/CSS templates in `/templates` mapped precisely with Jinja/Flask rendering constraints.
- **Netlify Configuration Ready**: Project incorporates a `.toml` setup making it deployable on serverless micro-environments.

## 🛠 Tech Stack
- Backend Framework: `Python 3` + `Flask`
- Persistence: `JSON Storage`
- Frontend View: `HTML5` templates with vanilla `CSS3`

## 🏗 Architecture
The FactBot AI application follows a monolithic architecture style with a clear separation of concerns:
1. **Client Layer**: An HTML/CSS frontend designed to provide a clean and interactive user experience. It consumes the REST API.
2. **API Layer (Flask)**: The `app.py` sets up a Flask server routing incoming GET and POST requests. It handles business logic, including reading from and appending to the persistence layer.
3. **Persistence Layer**: A lightweight file-based storage mechanism using `facts.json` to store the collection of facts permanently without requiring an external database.

## 📂 File Structure
```text
fact-bot-ai/
├── app.py             # Flask application entry point and routing
├── facts.json         # Data storage for all facts
├── index.html         # Frontend HTML entry (Netlify configuration)
├── script.js          # Client-side JavaScript logic
├── style.css          # Core CSS styling
├── templates/         # Flask HTML templates mapping
├── static/            # Static assets
├── .gitignore         # Git ignore rules
├── LICENSE            # Project license
├── _redirects         # Netlify redirect rules
├── netlify.toml       # Netlify configuration file
└── README.md          # Project documentation
```

## 🚀 Getting Started

```bash
# Clone and enter the repository
cd fact-bot-ai

# Ensure you have Flask installed, if not run:
pip install flask

# Execute the application
python app.py

# The server will spin up on localhost:5002
```


## 🌐 Deployment

### Vercel / Netlify
1. This is a standalone static site.
2. Drag and drop the project folder into Netlify Drop or connect via GitHub.
3. No build command is required. Just ensure `index.html` is in the root.

## 👨‍💻 Developer
**Kartik Shete**

<!-- Doc update 3 -->
<!-- Doc update 5 -->
<!-- Doc update 7 -->
<!-- Doc update 13 -->
<!-- Doc update 14 -->
<!-- Doc update 16 -->
<!-- Doc update 17 -->
<!-- Doc update 21 -->
<!-- Doc update 24 -->
<!-- Doc update 30 -->
<!-- Doc update 32 -->
<!-- Doc update 39 -->
<!-- Doc update 40 -->
<!-- Doc update 46 -->
<!-- Doc update 49 -->
<!-- Doc update 50 -->
<!-- Doc update 51 -->