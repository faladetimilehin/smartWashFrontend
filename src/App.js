import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from 'components/layout/Landing'
import LoginPage from 'components/auth/LoginPage'
import Register from 'components/auth/Register'
import NavBar from 'components/layout/NavBar'
// import { loadUser } from './action/auth'
// Redux
import { Provider } from 'react-redux'
import store from './store'

const App = ()=> {
  // useEffect(()=>{
  //     store.dispatch(loadUser())
  // }, [])
  return (
    <Provider store={store}>
        <Fragment>
          <NavBar/>
            <Router>
                  <Switch>
                      <Route exact  path="/" component={LandingPage} />
                      <Route exact  path="/login" component={LoginPage} />
                      <Route exact  path="/register" component={Register} />
                      {/* <Route component={Routes} /> */}
                  </Switch>
              </Router>
        </Fragment>
    </Provider>
  );
}

export default App;