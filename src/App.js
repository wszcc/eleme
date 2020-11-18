import { React, Component } from "react";
import { HashRouter, Redirect, Switch } from 'react-router-dom'
import routes from './router/router'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Redirect to='/selectcity'></Redirect>
          <Switch>
            {routes}
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
