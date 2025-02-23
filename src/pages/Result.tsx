import { useEffect, useState } from "react";
import FormRenderer, { FormConfig } from "../components/FormRenderer";
import { FORM_JSON_CONFIG_KEY } from "./Config";

const Result = () => {
  const [formConfig, setFormConfig] = useState<FormConfig>();

  useEffect(() => {
    const savedConfig = localStorage.getItem(FORM_JSON_CONFIG_KEY);
    if (savedConfig) {
      setFormConfig(JSON.parse(savedConfig));
    }
  }, []);

  return formConfig ? (
    <FormRenderer config={formConfig} />
  ) : (
    <p>No form generated.</p>
  );
};

export default Result;
