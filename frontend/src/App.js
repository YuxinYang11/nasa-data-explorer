import ApodViewer from './components/ApodViewer';
import MarsViewer from './components/MarsViewer';
import MarsPhotoPie from './components/MarsPhotoPie'; 
import NeoChart from './components/NeoChart';
import NeoTrendChart from './components/NeoTrendChart';
import SearchImages from './components/SearchImages';
import React, { useState } from "react";

function App() {
  const [marsDate, setMarsDate] = useState("2025-06-10");
  return (
    <div style={{ padding: 20, maxWidth: 1100, margin: "auto" }}>
      <h1> NASA Data Explorer</h1>
      <ApodViewer />
      <hr />
      <MarsViewer date={marsDate} setDate={setMarsDate} />
      <MarsPhotoPie date={marsDate} />
      <hr />
      <NeoChart />
      <NeoTrendChart />
      <SearchImages />
    </div>
  );
}

export default App;
