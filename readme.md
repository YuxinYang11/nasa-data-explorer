NASA Data Explorer
A full-stack web application that explores and visualizes spatially relevant data from the NASA Open API, with interactive charts and AI-driven summaries.

Features:
Browse NASA Astronomical Picture of the Day (APOD) 
View and analyze Mars Rover photos (date picker, camera stats pie charts) 
Explore Near-Earth Objects Trends (visualization) 
Responsive, user-friendly interface 
Powerful error/load state management 
AI summary powered by OpenAI 
Full Stack Testing (Jest + Supertest + React Test Library)


Sturucture:
nasa-data-explorer/
├── frontend/      # React (client)/
├── backend/       # Express (server)/
│   ├── routes/
│   ├── services/
│   ├── tests/
│   └── .env 
├── README.md
└── .gitignore

Local Deployment:
1. git clone  
    git clone https://github.com/YuxinYang11/nasa-data-explorer.git
    cd nasa-data-explorer
2. Configuring the api in .env
    NASA_API_KEY=YOUR_NASA_KEY
    OPENAI_API_KEY=YOUR_OpenAI_KEY
3. Installation of dependencies
    backend
    cd backend
    npm install
    frony end
    cd ../frontend
    npm install
4. Start
    cd backend
    npm start
    cd frontend
    npm start
5. Testing
    Both backend and frontend
    npm test 
