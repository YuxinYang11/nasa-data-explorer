import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function NeoTrendChart() {
  const today = new Date().toISOString().slice(0,10);
  const lastWeek = new Date(Date.now()-6*86400000).toISOString().slice(0,10);
  const [start, setStart] = useState(lastWeek);
  const [end, setEnd] = useState(today);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    axios.get("https://nasa-data-explorer-3epe.onrender.com", { params: { start_date: start, end_date: end } })
      .then(res => {
        const obj = res.data.near_earth_objects;
        // obj 
        const arr = Object.entries(obj).map(([date, asts]) => ({
          date,
          count: asts.length
        })).sort((a, b) => a.date.localeCompare(b.date));
        setData(arr);
      })
      .catch(e => setError("Failed to load NEO trend."))
      .finally(() => setLoading(false));
  }, [start, end]);

  return (
    <div style={{marginBottom: 24}}>
      <h3>Near-Earth Objects Trend (per day)</h3>
      <label>
        Start:{" "}
        <input type="date" value={start} max={end} onChange={e=>setStart(e.target.value)} />
      </label>
      <label style={{marginLeft:12}}>
        End:{" "}
        <input type="date" value={end} min={start} max={today} onChange={e=>setEnd(e.target.value)} />
      </label>
      {loading && <p>Loading NEO trend...</p>}
      {error && <div style={{color:"red"}}>{error}</div>}
      {!loading && !error && data.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#FF8042" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
