import React from 'react';
import {Route, Switch, Link, withRouter} from 'react-router-dom';
import {Login} from '../Login/Login';
import {CardsContainer} from '../Cards/CardsContainer';
import {Home} from '../Home';
import {Profile} from '../Profile';
import './Main.scss'

export const LoginContext = React.createContext();

class AppRouterComponent extends React.Component {
    state = {
      isLogged: false
    };

    setLoginStatus = (isLogged, location) => {
      const {history} = this.props;
      this.setState({ isLogged }, () => history.push(location.pathname));
    };
   
    render() {
      const {isLogged} = this.state;
      return (
        <LoginContext.Provider value={{isLogged: this.state.isLogged, setLoginStatus: this.setLoginStatus}}>
          <div className = 'main'>
            <div className = 'menu'>
              <Link to="/cards">Cards</Link>
              <Link to="/profile">Profile</Link>
            </div>
              { isLogged ? 
                (<button onClick = {() => this.setLoginStatus(false, '/login')}>LogOut</button>) : 
                (<div>Enter login</div>)
              }

            <Switch>
              <Route
                exact
                path={"/"}
                render={(...props) => (
                  <Home isLogged={this.state.isLogged} {...props} />
                )}
              />
              <Route
                exact
                path={"/cards"}
                render={(...props) => (
                  <CardsContainer isLogged={this.state.isLogged} {...props} />
                )}
              />
              <Route
                exact
                path={"/profile"}
                render={(...props) => (
                  <Profile isLogged={this.state.isLogged} {...props} />
                )}
              />
              <Route
                exact
                path={"/login"}
                render={() => <Login setLoginStatus={this.setLoginStatus}/>}
              />
            </Switch>
          </div>
        </LoginContext.Provider>
      );
    }
  }
  
export const AppRouter = withRouter(AppRouterComponent);
  