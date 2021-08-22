import "./App.css";
import { useState } from "react";
import { Route, Switch } from 'react-router-dom';
//components
import Header from './components/Header'
import Navbar from './components/Navbar'
import NewUserForm from "./components/NewUserForm";
//pages
import Home from './pages/Home'
import Index from './pages/Index'
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
    <div className="App">
      <Header />
      <Navbar />
      
      <div id='body'>
        <Switch>
          <Route
            exact path='/'
            component={Home}/>

          <Route path='/new-user-form'>
            <NewUserForm
              questionnaireData={questionaireData}
              addFormData={addFormData}/>
          </Route>

          <Route path='/stat-tracker-form'>
            {/* statTracker */}
          </Route>

          <Route path='/meal-log'>
            {/* MealLog */}
          </Route>

          <Route
            exact path='/dashboard'>
            {/* Index */}
            </Route>
            
          
          <Route
            path='/:stat' >
            {/* StatView */}
            </Route>
          
        </Switch>

      </div>
    </div>
  );
}

export default App;
