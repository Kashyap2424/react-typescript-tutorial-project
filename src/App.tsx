import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";
import { Notes } from "./model/note.model";
import Headers from "./components/Headers";
import NotesList from "./components/NotesLits";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Notes[]>([]);

  return (
    <div className="App">
      <Headers />

      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList Notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes Notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
