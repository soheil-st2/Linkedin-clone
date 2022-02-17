import { Login, Header, Home } from './components'
import './App.css';
//ROUTER DOM 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/home' >
            <Header />
            <Home />
          </Route>



        </Switch>
      </Router>

    </div>
  );
}

export default App;
