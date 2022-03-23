import * as React from "react";

import Note from "./Note";
import { Notes } from "../model/note.model";

interface INotesListProps {
  Notes: Notes[];
}

const NotesList: React.FunctionComponent<INotesListProps> = ({ Notes }) => {
  const renderNotes = (): JSX.Element[] => {
    return Notes.map((note) => {
      return <Note note={note} />;
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
