import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as API from '../API'

const Wrapper = styled.div``;
const styledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
const LogoutBtn = styled(styledLink)``;

function Logout () {

    return (
        <Wrapper>
            <LogoutBtn to={'/home'} onClick={() => {API.logout()}}>Logout</LogoutBtn>
        </Wrapper>
    );
}

export default Logout;