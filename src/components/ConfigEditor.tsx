import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

interface ConfigEditorProps {
  jsonInput: string;
  setJsonInput: (jsonInput: string) => void;
}

const ConfigEditor: FC<ConfigEditorProps> = ({ jsonInput, setJsonInput }) => {
  return (
    <>
      <TextField
        multiline
        fullWidth
        rows={10}
        value={jsonInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setJsonInput(e.target.value)
        }
      />
    </>
  );
};

export default ConfigEditor;
