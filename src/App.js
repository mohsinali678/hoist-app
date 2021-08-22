import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewUserForm from "./components/NewUserForm";
import { useState } from "react";


//Pages
import Index from "./Pages/Index";

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
      <Router>
        <Index healthDetails={formDataFields} />

        
        <NewUserForm
          questionnaireData={questionnaireData}
          addFormData={addFormData}
        />

      </Router>
    </div>
  );
}

export default App;
