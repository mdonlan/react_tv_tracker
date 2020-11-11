import React , { useEffect } from 'react'
import styled from 'styled-components'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import {Home} from './Home/Home'
import * as API from '../API'
import { TopNav } from './TopNav';
import { Login } from './Login';
import Logout from './Logout';
import Show from './Show/Show';
import { Create_Account } from './CreateAccount';
import { Person } from './Person';
import { Tracker } from './Tracker'
import { Favorites } from './Home/Favorites'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
    background: #111111;
    overflow: auto;
    height: auto;
    width: 100%;
`;

const Main = styled.div`
    height: calc(100% - 50px);
    padding-top: 50px; /* to account for topnav height */
`;

export function App () {

    const is_logged_in = useSelector(state => state.userLoggedIn);
    const history = useHistory();

    useEffect(() => {
        API.auth();
    }, []);

    return (
        <Wrapper>
            <TopNav />
            <Main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/login" component={Login} /> */}
                    <Route path="/login" render={() => {
                        if(is_logged_in) {
                                return (
                                    <Redirect to='/'/>
                                )
                        } else {
                            return (<Login />)
                        }
                    }} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/createAccount" component={Create_Account} />
                    <Route path="/show" component={Show} />
                    <Route path="/person" component={Person} />
                    <Route path="/tracker" component={Tracker} />
                    <Route path="/favorites" component={Favorites} />
                </Switch>
            </Main>
        </Wrapper>
    );
}

// export default withRouter(App);