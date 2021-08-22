<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
=======
import "./App.css";
import NewUserForm from "./components/NewUserForm";
import { useState } from "react";
>>>>>>> dd06d818c9d9021f4772229bf29c6831f2dd7df5

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
<<<<<<< HEAD
      <Router>
        <NavBar />

        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/healthDetails">
              <Index healthDetails={healthDetails} />
            </Route>

            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </main>

        <FootBar />
      </Router>
=======
      <NewUserForm
        questionnaireData={questionnaireData}
        addFormData={addFormData}
      />
>>>>>>> dd06d818c9d9021f4772229bf29c6831f2dd7df5
    </div>
  );
}

export default App;
