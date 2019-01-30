import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Policy from './policy.js'
import Claim from './claim.js'
import Account from './account.js'

class App extends Component {
  render() {
    const { path } = this.props.match;

    return (
      <div>
        <h1 style={{margin:'30px'}}>Hey welcome Policy bazzar!</h1>
        <div className="links" style={{margin:'30px'}}>

          <a class="ui  tag label" ><Link to={`${path}`} className="link" style={{color:'black'}}>Policy</Link></a>
          <a class="ui  tag label" ><Link to={`${path}/claim`} className="link" style={{color:'black'}}>Claim</Link></a>
          <a class="ui  tag label" ><Link to={`${path}/account`} className="link" style={{color:'black'}}>Account</Link></a>
        </div>
        <div className="tabs">
          <Switch>
            <Route path={`${path}`} exact component={Policy} />
            <Route path={`${path}/claim`} component={Claim} />
            <Route path={`${path}/account`} component={Account} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;

/*
const App=({match})=>{
  return(

    <div>
          <NavTab to="/policy">Policy</NavTab>
          <NavTab to="/claim">Claim</NavTab>
          <NavTab to="/account">Account</NavTab>

          <Switch>
            <Route exact path={`${match.path}`} render={() => <Redirect replace to={`${match.path}/policy`} />} />
            <Route path={`${match.path}/policy`} component={Policy} />
            <Route path={`${match.path}/claim`} component={Claim} />
            <Route path={`${match.path}/account`} component={Account} />
          </Switch>
</div>

  )
}

export default App
*/
