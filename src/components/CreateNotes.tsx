import * as React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Notes } from "../model/note.model";
interface ICreateNotesProps {
  Notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  Notes,
  setNotes,
}) => {
  const [error, setError] = React.useState<String>("");

  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      titleRef.current?.value === "" &&
      descriptionRef.current?.value === ""
    ) {
      return setError("All Fields can mandatory");
    }

    setError("");

    setNotes([
      ...Notes,
      {
        id: new Date().toString(),
        title: `${(titleRef.current as HTMLInputElement).value}`,
        description: `${(descriptionRef.current as HTMLTextAreaElement).value}`,
        color: `${(colorRef.current as HTMLInputElement).value}`,
        time: new Date().toString(),
      },
    ]);

    (titleRef.current as HTMLInputElement).value = "";
    (descriptionRef.current as HTMLTextAreaElement).value = "";
    (colorRef.current as HTMLInputElement).value = "#dfdfdf";
  };

  return (
    <>
      <h2>Create Notes</h2>

      {error && (
        <Alert className="mt-3" variant="danger">
          {error}
        </Alert>
      )}
      <Form className="mb-3 mt-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Note Title"
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Note Description"
            ref={descriptionRef}
            rows={7}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Note Color</Form.Label>
          <Form.Control
            type="color"
            defaultValue="#dfdfdf"
            title="Select Color For Yout Note"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Create
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
