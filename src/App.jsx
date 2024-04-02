import { useState } from "react";
// import "./App.css";
import Clock1 from "./Clock1";
import Timer1 from "./Timer1";

function App() {
  return (
    <div className="bg-gray-400 h-screen w-screen">
      <Timer1 />
      <Clock1 city="Stockholm" timezone="(GMT+1)" />
    </div>
  );
}

export default App;
