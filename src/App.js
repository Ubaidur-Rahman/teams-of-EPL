import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetail from "./components/TeamDetail/TeamDetail";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/team/:teamId">
          <TeamDetail />
        </Route>
        <Route path="/*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
