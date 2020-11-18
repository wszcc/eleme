import { React, Component } from "react";
import { HashRouter as Router, Redirect, Switch ,Route} from 'react-router-dom'
import routes from './router/router'
import NotFound from './pages/not-found/NotFound'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Redirect to='/selectcity'></Redirect>
          <Switch>
            {routes}
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
