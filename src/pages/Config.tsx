import { useState } from "react";
import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import defaultTemplate from "../data/defaultTemplate";
import ConfigEditor from "../components/ConfigEditor";
import schema from "../data/schema";

export const FORM_JSON_CONFIG_KEY = "formJsonConfig";
const DEFAULT_JSON_TEMPLATE = JSON.stringify(defaultTemplate, null, 2);

const ConfigWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  margin: theme.spacing(2, 0),
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
}));

const GenerateButton = styled(Button)({
  alignSelf: "flex-end",
  width: "auto",
});

const Config = () => {
  const navigate = useNavigate();

  const [jsonInput, setJsonInput] = useState<string>(() => {
    const storedConfigJson: string | null =
      localStorage.getItem(FORM_JSON_CONFIG_KEY);
    return storedConfigJson ? storedConfigJson : DEFAULT_JSON_TEMPLATE;
  });

  const handleGenerate = () => {
    try {
      schema.parse(JSON.parse(jsonInput));
      localStorage.setItem(FORM_JSON_CONFIG_KEY, jsonInput);
      navigate("/result");
    } catch (err) {
      console.log(err);
      alert("Invalid JSON");
    }
  };

  return (
    <>
      <ConfigWrapper>
        <ConfigEditor jsonInput={jsonInput} setJsonInput={setJsonInput} />
        <ButtonContainer>
          <GenerateButton onClick={handleGenerate} variant="contained">
            Generate form
          </GenerateButton>
        </ButtonContainer>
      </ConfigWrapper>
    </>
  );
};

export default Config;
