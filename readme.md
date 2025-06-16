#  NASA Data Explorer

A full-stack web application that explores and visualizes spatially relevant data from the NASA Open API, with interactive charts and AI-driven summaries.

---

##  Features

- **Browse NASA Astronomical Picture of the Day (APOD)**
- **View and analyze Mars Rover photos** (date picker, camera stats pie charts)
- **Explore Near-Earth Objects Trends** (visualization)
- **Responsive, user-friendly interface**
- **Powerful error/load state management**
- **AI summary powered by OpenAI**
- **Full Stack Testing** (Jest + Supertest + React Testing Library)

##  Sturucture:

nasa-data-explorer/
├── frontend/      # React (client)
├── backend/       # Express (server)
│   ├── routes/
│   ├── services/
│   ├── tests/
│   └── .env 
├── README.md
└── .gitignore

## Local Deployment:

1. **Clone the repo**
    ```bash
    git clone https://github.com/YuxinYang11/nasa-data-explorer.git
    cd nasa-data-explorer
    ```

2. **Configure the API keys**
    - In `backend/.env` (do **not** commit this file!):
        ```
        NASA_API_KEY=YOUR_NASA_KEY
        OPENAI_API_KEY=YOUR_OpenAI_KEY   # (Optional, for AI features)
        ```

3. **Install dependencies**
    ```bash
    # Backend
    cd backend
    npm install

    # Frontend
    cd ../frontend
    npm install
    ```

4. **Start the application**
    ```bash
    # Start backend server
    cd ../backend
    npm start

    # In a new terminal, start frontend
    cd ../frontend
    npm start
    ```

5. **Testing**
    ```bash
    # Run backend tests
    cd ../backend
    npm test

    # Run frontend tests
    cd ../frontend
    npm test
    ```
