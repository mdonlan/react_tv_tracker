import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    height: 50px;
    width: 100%;
    background: #222222;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const LoginBtn = styled(StyledLink)``;
const LogoutBtn = styled(StyledLink)``;
const CreateActBtn = styled(StyledLink)``;
const HomeBtn = styled(StyledLink)``;

function TopNav () {
    const userLoggedIn = useSelector(state => state.userLoggedIn)

    return (
        <Wrapper>
            <HomeBtn to={'/'}>Home</HomeBtn>
            {userLoggedIn &&
                <LogoutBtn to={'/logout'}>Logout</LogoutBtn>
            || 
                <React.Fragment>
                    <LoginBtn to={'/login'}>Login</LoginBtn>
                    <CreateActBtn to={'/createAccount'}>Create Account</CreateActBtn>
                </React.Fragment>
            }
        </Wrapper>
    );
}

export default TopNav;