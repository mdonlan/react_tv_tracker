import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function TopNav () {
    const userLoggedIn = useSelector(state => state.userLoggedIn)
    const loginStatusSet = useSelector(state => state.loginStatusSet)

    return (
        <Wrapper>
            <Left>
                <Button to={'/'}>Home</Button>
            </Left>
            <Center>
                <Title>TV Tracker</Title>
            </Center>
            <Right>
                {userLoggedIn && loginStatusSet &&
                    <React.Fragment>
                        <Button to={'/tracker'}>Tracker</Button>
                        <Button to={'/logout'}>Logout</Button>
                    </React.Fragment>
                || loginStatusSet &&
                    <React.Fragment>
                        <Button to={'/login'}>Login</Button>
                        <Button to={'/createAccount'}>Create Account</Button>
                    </React.Fragment>
                }
            </Right>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 50px;
    width: 100%;
    background: #222222;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const Left = styled.div`
    margin-left: 20px;
`
const Right = styled.div`
    margin-right: 20px;
`

const Center = styled.div`
    font-size: 24px;
    font-variant: small-caps;
    font-style: italic;
    text-decoration: underline;
`

const Title = styled.div``

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
`