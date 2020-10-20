import React, { useState } from 'react'
import styled from 'styled-components'
import { Trending } from './Trending';
import AiringToday from './AiringToday';

export function Home () {

    const [view_mode, set_view_mode] = useState("trending");

    return (
        <Wrapper>
            <Left>
                <Nav>
                    <Nav_Item active={view_mode == "trending" ? true : false} onClick={() => { set_view_mode("trending") }}>Trending</Nav_Item>
                    <Nav_Item active={view_mode == "popular" ? true : false} onClick={() => { set_view_mode("popular") }}>Popular</Nav_Item>
                    <Nav_Item active={view_mode == "airing_today" ? true : false} onClick={() => { set_view_mode("airing_today") }}>Airing Today</Nav_Item>
                </Nav>
            </Left>
            <Right>
                {view_mode == "trending" &&
                    <Trending />
                }
                {view_mode == "airing_today" &&
                    <AiringToday />
                }
            </Right>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
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
    color: ${props => props.active ? "#dddddd" : "#8a8a8a"};
`;

const Right = styled.div`
    width: 85%;
`;
