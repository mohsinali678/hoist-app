import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar";
import NewUserForm from "./components/NewUserForm";
//pages
import Home from "./pages/Home";
import Index from "./pages/Index";
import "./App.css";
function App() {
  const [formDataFields, setFormDataFields] = useState([]);
  const questionnaireData = [
    "weight",
    "weight",
    "weight",
    "height",
    "height",
    "height",
    "sleep amount",
    "sleep amount",
    "sleep amount",
    "water intake",
    "water intake",
    "water intake",
    "steps",
    "steps",
    "steps",
    "screen time",
    "screen time",
    "screen time",
    "heart rate",
    "heart rate",
    "heart rate",
    "blood oxygen",
    "blood oxygen",
    "blood oxygen",
  ];

  const addFormData = (formData) => {
    setFormDataFields(formData);
  };
  return (
    <div>
      <Router>
        <Navbar />

        <div className="App" id="body">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/new-user-form">
              <NewUserForm
                questionnaireData={questionnaireData}
                addFormData={addFormData}
              />
            </Route>

            <Route path="/stat-tracker-form">{/* statTracker */}</Route>

            <Route path="/meal-log">{/* MealLog */}</Route>

            <Route exact path="/dashboard">
              <Index healthDetails={formDataFields} />
            </Route>

            <Route path="/:stat"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
