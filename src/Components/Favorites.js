import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { get_favorites } from '../API'
import styled from "styled-components"
import { Link } from 'react-router-dom'

export function Favorites() {
    const favorites = useSelector(state => state.user_favorites);
    
    return (
        <Wrapper>
            <div>favorites</div>
            {favorites.length > 0 &&
                favorites.map(show => {
                    return (
                        <Show key={show.id}>
                            <PosterImg src={`https://image.tmdb.org/t/p/w185/${show.poster_path}`}/>
                            <Name>{show.name}</Name>
                            <ClickZone to={`/show?name=${show.name.replace(/\s+/g, '-').toLowerCase()}&id=${show.id}`}/>
                        </Show>
                    )
                })
            }

            {favorites.length == 0 &&
                <div>You don't have any favorites, you should add some!</div>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`

const Show = styled.div`
    height: 325px;
    width: 185px;
    background: #222222;
    margin: 5px;
    position: relative;
`

const PosterImg = styled.img`
    width: 100%;
    height: 278px;
`;

const Name = styled.div`
    font-size: 18px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const ClickZone = styled(Link)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    transition: 0.3s;
    cursor: pointer;

    :hover {
        background: rgba(35, 57, 177, 0.459);
    }
`;
