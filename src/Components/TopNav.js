import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    height: 50px;
    width: 100%;
    background: #222222;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 2;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Button = styled(StyledLink)`
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 3px;
    padding: 5px;
    background: #333333;
    transition: 0.3s;

    :hover {
        background: #444444;
    }
`;

function TopNav () {
    const userLoggedIn = useSelector(state => state.userLoggedIn)
    const loginStatusSet = useSelector(state => state.loginStatusSet)

    return (
        <Wrapper>
            <Button to={'/'}>Home</Button>
            {userLoggedIn && loginStatusSet &&
                <React.Fragment>
                    <Button to={'/logout'}>Logout</Button>
                    <Button to={'/favorites'}>Favorites</Button>
                    <Button to={'/tracker'}>Tracker</Button>
                </React.Fragment>
            || loginStatusSet &&
                <React.Fragment>
                    <Button to={'/login'}>Login</Button>
                    <Button to={'/createAccount'}>Create Account</Button>
                </React.Fragment>
            }
        </Wrapper>
    );
}

export default TopNav;