import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MarsViewer() {
  const [date, setDate] = useState("2025-06-10");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("/api/mars", { params: { earth_date: date } })
      .then(res => setPhotos(res.data))
      .finally(() => setLoading(false));
  }, [date]);

  return (
    <div style={{marginBottom: 24}}>
      <h3>Mars Rover Photos</h3>
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        max={new Date().toISOString().split("T")[0]}
        style={{marginBottom: 12}}
      />
      {loading && <p>Loading Mars photos...</p>}
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {photos.length === 0 && !loading && <p>No photos found for this date.</p>}
        {photos.map(p => (
          <div key={p.id} style={{margin: 5, width: 200, textAlign: "center"}}>
            <img
              src={p.img_src}
              alt={p.camera.full_name}
              style={{width: 200, height: 140, objectFit: "cover", borderRadius: 8}}
            />
            <div style={{fontSize: 12}}>{p.camera.full_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}