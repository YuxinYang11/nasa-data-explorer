import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ApodViewer() {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0,10));
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [aiSummary, setAISummary] = useState('');
  const [aiLoading, setAILoading] = useState(false);

  const fetchData = d => {
    setLoading(true);
    axios.get("https://nasa-data-explorer-3epe.onrender.com", { params: { date: d } })
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchData(date); }, [date]);

  const handleAISummary = async () => {
    setAILoading(true);
    setAISummary('');
    try {
      const resp = await axios.post("https://nasa-data-explorer-3epe.onrender.com", { text: data.explanation });
      setAISummary(resp.data.summary);
    } catch (e) {
      setAISummary("AI summarization failed. Try again later.");
    }
    setAILoading(false);
  };

  return (
    <div style={{marginBottom: 24}}>
      <h2>{data ? data.title : "APOD"}</h2>
      <input
        type="date"
        value={date}
        min="1995-06-16"
        max={new Date().toISOString().slice(0,10)}
        onChange={e => setDate(e.target.value)}
        style={{marginBottom: 12}}
      />
      {loading ? <p>Loading...</p> :
        data ? (
          <>
            {data.media_type === "image"
              ? <img src={data.url} alt={data.title} style={{maxWidth: "100%", borderRadius: 12, boxShadow: "0 0 12px #888"}} />
              : <iframe src={data.url} title={data.title} width="100%" height="400px" />}
            <p style={{fontSize: 16, lineHeight: 1.6}}>{data.explanation}</p>
           <button onClick={handleAISummary} disabled={aiLoading} style={{marginTop: 8}}>
             {aiLoading ? "AI Summarizing..." : "AI Summary"}
            </button>
            {aiSummary && (
              <div style={{marginTop: 12, padding: 10, background: "#f0f4fa", borderRadius: 8, fontStyle: "italic"}}>
               <b>AI Summary: </b>{aiSummary}
             </div>
            )}

          </>
        ) : <p>No data</p>
      }
    </div>
  );
}
