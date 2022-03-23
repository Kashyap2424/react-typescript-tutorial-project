import React, { useState } from "react";

import "./App.css";
import { Notes } from "./model/note.model";
import Headers from "./components/Headers";

function App() {
  const [notes, setNotes] = useState<Notes[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      description: "Schedule meeting with a UI/UX Team",
      color: "#dfdfdf",
      time: new Date().toString(),
    },
  ]);
  return (
    <div className="App">
      <Headers />
    </div>
  );
}

export default App;
