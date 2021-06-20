import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Manage from "./pages/manage";
import Upload from "./pages/upload";

// import Layout from "./components/Layout";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/upload" component={Upload} exact/>
        <Route path="/manage" component={Manage} exact/>
      </Switch>
    </Router>
  );
}

export default App;