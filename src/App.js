import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'

import './index.css';
import './App.css';

import LoginPage from './LoginPage'
import UserApp from './UserApp'

function App() {

  return (
    <AmplifyAuthenticator>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => (<LoginPage {...props} />)} />
          <Route path="/app" render={(props) => (<UserApp {...props} />)} />
        </Switch>
      </Router>
      <AmplifySignIn headerText="Sign In to React Todo" slot="sign-in" usernameAlias="email" />
    </AmplifyAuthenticator>
  );
}


export default App;
