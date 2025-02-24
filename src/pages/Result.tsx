import { useMemo } from "react";
import FormRenderer from "../components/FormRenderer";
import { FORM_JSON_CONFIG_KEY } from "./Config";
import { FormConfig } from "../data/schema";

const Result = () => {
  const formConfig = useMemo<FormConfig | null>(() => {
    const savedConfig = localStorage.getItem(FORM_JSON_CONFIG_KEY);
    if (savedConfig) {
      return JSON.parse(savedConfig);
    }
  }, []);

  return formConfig ? (
    <FormRenderer config={formConfig} />
  ) : (
    <p>No form generated.</p>
  );
};

export default Result;
