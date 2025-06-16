import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#B49CFC", "#FF69B4"];

export default function MarsPhotoPie({ date }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://nasa-data-explorer-3epe.onrender.com", { params: { earth_date: date } })
      .then(res => {
        const list = res.data;
        const cameraCount = {};
        list.forEach(photo => {
          const cam = photo.camera.full_name;
          cameraCount[cam] = (cameraCount[cam] || 0) + 1;
        });
        const chartData = Object.entries(cameraCount).map(([name, value]) => ({ name, value }));
        setData(chartData);
      });
  }, [date]);

  if (!data.length) return null;

  return (
    <div style={{width: 400, margin: "auto"}}>
      <h4>Photos by Camera Type</h4>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%" cy="50%"
            outerRadius={90}
            label
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
