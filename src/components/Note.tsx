import * as React from "react";
import { Button, Card } from "react-bootstrap";

import { Notes } from "../model/note.model";

interface INoteProps {
  note: Notes;
  handleDelete: (id: String) => void;
}

const Note: React.FunctionComponent<INoteProps> = ({ note, handleDelete }) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: `${note.color}` }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.description}</Card.Text>
          <Card.Subtitle className="text-muted">{note.time}</Card.Subtitle>
          <Button
            className="mt-3"
            variant="danger"
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Note;
