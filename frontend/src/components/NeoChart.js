import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function NeoChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/neo")
      .then(res => {
        const list = res.data;
        const chartData = list.map(obj => ({
          name: obj.name,
          diameter: (
            (obj.estimated_diameter.kilometers.estimated_diameter_min +
              obj.estimated_diameter.kilometers.estimated_diameter_max) /
            2
          ).toFixed(3),
        }));
        setData(chartData);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading NEO data...</p>;
  if (!data.length && !loading) return <p style={{color:"#888"}}>No near-Earth objects found for this day.</p>;
  return (
    <div style={{marginBottom: 24}}>
      <h3>Today's Near Earth Objects (Diameter in KM)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={80} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="diameter" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
