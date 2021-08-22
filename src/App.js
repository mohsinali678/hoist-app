import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import NewUserForm from "./components/NewUserForm";
import StatGraph from './components/StatGraph';
import Questionare from "./components/Questionare";
//pages
import Home from "./pages/Home";
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

        <div className="App" id="body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/questionare" component={Questionare} />
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

            <Route path="/:stat">
              <StatGraph formData={formDataFields}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
