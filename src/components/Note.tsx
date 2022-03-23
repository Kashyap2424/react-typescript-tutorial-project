import * as React from "react";

import { Notes } from "../model/note.model";

interface INoteProps {
  note: Notes;
}

const Note: React.FunctionComponent<INoteProps> = ({ note }) => {
  return <>Note Cards</>;
};

export default Note;
