import { React, Component,Suspense } from "react";
import { HashRouter as Router, Redirect, Switch ,Route} from 'react-router-dom'
import routes from './router/router'
import {Loading} from './containers/loading/Loading'
import NotFound from './pages/not-found/NotFound'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
         <Suspense fallback={<Loading></Loading>}>
         <Redirect to='/selectcity'></Redirect>
          <Switch>
            {routes}
            <Route component={NotFound}></Route>
          </Switch>
         </Suspense>
        </Router>
      </div>
    )
  }
}
export default App;
