import React, { createContext, useContext, useState } from "react";

// Theme context
const ThemeContext = createContext();

const themes = {
  happy: { background: "#ffeb3b", color: "#000" },
  sad: { background: "#2196f3", color: "#fff" },
  calm: { background: "#4caf50", color: "#fff" },
  angry: { background: "#ff5722", color: "#fff" },
};

const ThemeProvider = ({ children }) => {
  const [mood, setMood] = useState("happy");

  return (
    <ThemeContext.Provider value={{ mood, setMood }}>
      <div
        style={{
          backgroundColor: themes[mood].background,
          color: themes[mood].color,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const MoodSelector = () => {
  const { setMood } = useContext(ThemeContext);
  const moods = Object.keys(themes);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {moods.map((mood) => (
        <button key={mood} onClick={() => setMood(mood)}
        style={{
          backgroundColor: themes[mood].background,
          color: themes[mood].color,
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "16px",
          borderRadius: "5px",
        }}
        >
          {mood.charAt(0).toUpperCase() + mood.slice(1)}
        </button>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <h1>Pick a Mood ;)</h1>
      <MoodSelector />
    </ThemeProvider>
  );
};

export default App;
