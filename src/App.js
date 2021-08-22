import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import NewUserForm from "./components/NewUserForm";
import Steps from './components/Steps'
import Water from './components/Water'
import Weight from './components/Weight'

// import Questionare from "./components/Questionare";
//pages
import Home from "./pages/Home.js";
import Index from "./pages/Index";
import "./App.css";
function App() {
  const [formDataFields, setFormDataFields] = useState([]);
  const questionnaireData = [
    "weight",
    "height",
    "sleep amount",
    "water intake",
    "steps",
    "screen time",
    "heart rate",
    "blood oxygen",
  ];

  const addFormData = (formData) => {
    setFormDataFields(formData);
  };
  return (
    <div>
      <Router>
        <Navbar />
        <Steps />

        <div className="App" id="body">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/questionare" component={Questionare} /> */}
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

            <Route path="/steps">
              <Steps />
            </Route>
            <Route path="/water">
              <Water />
            </Route>
            <Route path="/weight">
              <Weight />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
