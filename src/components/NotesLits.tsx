import * as React from "react";

import Note from "./Note";
import { Notes } from "../model/note.model";
import { Alert } from "react-bootstrap";

interface INotesListProps {
  Notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  Notes,
  setNotes,
}) => {
  const handleDelete = (id: String) => {
    setNotes(Notes.filter((note) => note.id !== id));
  };

  const renderNotes = () => {
    if (Notes.length === 0) {
      return (
        <Alert className="mt-4 mb-4" variant="danger">
          Not Found Notes
        </Alert>
      );
    }

    return Notes.map((note) => {
      return (
        <Note key={`${note.id}`} note={note} handleDelete={handleDelete} />
      );
    });
  };

  return (
    <>
      <h1 className="mt-3">Notes List</h1>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
