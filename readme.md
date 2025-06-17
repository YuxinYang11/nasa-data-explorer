#  NASA Data Explorer

A full-stack web application that explores and visualizes spatially relevant data from the NASA Open API, with interactive charts and AI-driven summaries.
Available at  https://nasa-data-explorer-6f16.vercel.app
---

##  Features

- **Browse NASA Astronomical Picture of the Day (APOD)**
- **View and analyze Mars Rover photos** (date picker, camera stats pie charts)
- **Explore Near-Earth Objects Trends** (visualization)
- **Responsive, user-friendly interface**
- **Powerful error/load state management**
- **AI summary powered by OpenAI**
- **Full Stack Testing**

##  Sturucture:

```text
nasa-data-explorer/
├── frontend/      # React (client)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ApodViewer.js        # Astronomy Picture of the Day (APOD) viewer
│   │   │   ├── MarsViewer.js        # Mars Rover photo gallery (with date)
│   │   │   ├── MarsPhotoPie.js      # pie chart
│   │   │   ├── NeoChart.js          # NEO
│   │   │   ├── NeoTrendChart.js     # NEO  line chart
│   │   │   ├── SearchImages.js      # NASA image library search 
│   │   ├── App.js
├── backend/       # Express (server)
│   ├── routes/
│   ├── services/
│   ├── tests/
│   └── .env         # not committed
├── README.md
└── .gitignore
```
## Local Deployment:
For cloud deployment, all APIs have been changed, so if you switch local deployment, please modify the "proxy" of the front-end package.json file to "http://localhost:5000"(default) and remove all links in "axios()" function in all components' code.
1. **Clone the repo**
    ```bash
    git clone https://github.com/YuxinYang11/nasa-data-explorer.git
    cd nasa-data-explorer
    ```

2. **Configure the API keys**
    - In `backend/.env`
        ```
        NASA_API_KEY=YOUR_NASA_KEY
        OPENAI_API_KEY=YOUR_OpenAI_KEY 
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
