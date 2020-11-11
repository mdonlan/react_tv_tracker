import React, { useState } from 'react'
import styled from 'styled-components'
import { Trending } from './Trending';
import AiringToday from './AiringToday';
import { Favorites } from './Favorites'

export function Home () {

    const [view_mode, set_view_mode] = useState("trending");

    return (
        <Wrapper>
            <Left>
                <Nav>
                    <Nav_Item active={view_mode == "trending" ? true : false} onClick={() => { set_view_mode("trending") }}>Trending</Nav_Item>
                    <Nav_Item active={view_mode == "airing_today" ? true : false} onClick={() => { set_view_mode("airing_today") }}>Airing Today</Nav_Item>
                    <Nav_Item active={view_mode == "favorites" ? true : false} onClick={() => { set_view_mode("favorites") }}>Favorites</Nav_Item>
                </Nav>
            </Left>
            <Right>
                {view_mode == "trending" &&
                    <Trending />
                }
                {view_mode == "airing_today" &&
                    <AiringToday />
                }
                {view_mode == "favorites" &&
                    <Favorites />
                }
            </Right>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    height: 100%;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
`;

const Nav = styled.div`
    margin-top: 50px;
`;

const Nav_Item = styled.div`
    font-size: 28px;
    margin-top: 12px;
    margin-bottom: 12px;
    /* border-bottom: ${props => props.active ? "1px solid #dddddd" : "none"}; */
    text-decoration: ${props => props.active ? "underline" : "none"};
    color: ${props => props.active ? "#dddddd" : "#8a8a8a"};
    transition: 1s;
    cursor: pointer;

    :hover {
        color: #c9c9c9;
    }
`;

const Right = styled.div`
    width: 85%;
    overflow-y: scroll;
`;
