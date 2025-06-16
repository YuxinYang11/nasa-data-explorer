import React, { useState } from "react";
import axios from "axios";

export default function SearchImages() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = () => {
    if (!query) return;
    setLoading(true);
    setError("");
    axios.get(`https://images-api.nasa.gov/search`, { params: { q: query, media_type: "image" } })
      .then(res => {
        const items = res.data.collection.items;
        setResults(items);
      })
      .catch(() => setError("Failed to fetch images."))
      .finally(() => setLoading(false));
  };

  return (
    <div style={{marginBottom: 24}}>
      <h3>NASA Image Search</h3>
      <input
        value={query}
        onChange={e=>setQuery(e.target.value)}
        placeholder="Search NASA images (e.g. Mars, Galaxy, Saturn)..."
        style={{width:280,marginRight:6}}
        onKeyDown={e => { if (e.key === "Enter") search(); }}
      />
      <button onClick={search}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <div style={{color:"red"}}>{error}</div>}
      <div style={{display:"flex",flexWrap:"wrap",marginTop:8}}>
        {results.map((item,i) => (
          <div key={i} style={{margin:6,width:220}}>
            <img
              src={item.links && item.links[0]?.href}
              alt={item.data[0].title}
              style={{width:220,height:140,objectFit:"cover",borderRadius:8,boxShadow:"0 2px 8px #0001"}}
            />
            <div style={{fontSize:13, marginTop:4, fontWeight:"bold"}}>
              {item.data[0].title}
            </div>
            <div style={{fontSize:11, color:"#666"}}>
              {item.data[0].description?.slice(0,80)}...
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
