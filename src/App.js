import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
