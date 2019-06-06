import React , { useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './Home/Home'
import * as API from '../API'
import TopNav from './TopNav';
import Login from './Login';
import Logout from './Logout';
import Show from './Show/Show';
import CreateAccount from './CreateAccount';

const Wrapper = styled.div`
    background: #111111;
    min-height: 100%;
    width: 100%;
`;

const Main = styled.div`
    padding-top: 50px; /* to account for topnav height */
`;

function App () {
    useEffect(() => {
        API.auth();
    }, []);

    return (
        <Wrapper>
            <TopNav />
            <Main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/createAccount" component={CreateAccount} />
                    <Route path="/show" component={Show} />
                </Switch>
            </Main>
        </Wrapper>
    );
}

export default withRouter(App);