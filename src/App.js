import "./App.css";
import NewUserForm from "./components/NewUserForm";
import { useState } from "react";

function App() {
  const [formDataFields, setFormDataFields] = useState([]);
  const questionnaireData = [
    "weight",
    "height",
    "sleep amount",
    "water intake",
    "steps",
    "screen time",
  ];

  const addFormData = (formData) => {
    setFormDataFields(formData);
  };
  return (
    <div className="App">
      <NewUserForm
        questionnaireData={questionnaireData}
        addFormData={addFormData}
      />
    </div>
  );
}

export default App;
