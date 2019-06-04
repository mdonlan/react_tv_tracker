import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as API from '../API'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ShowsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
`;

const Show = styled.div`
    height: 325px;
    width: 185px;
    background: #222222;
    margin: 5px;
    position: relative;
`;

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

function TrendingShows () {
    const trendingShows = useSelector(state => state.trendingShows)

    useEffect(() => {
        API.getTrending();
    }, []);

    return (
        <Wrapper>
            <div>trending</div>
            <ShowsContainer>
                {trendingShows.map((show) => {
                    return (
                        <Show key={show.id}>
                            <PosterImg src={`https://image.tmdb.org/t/p/w185/${show.poster_path}`}/>
                            <Name>{show.name}</Name>
                            <ClickZone to={`/show?name=${show.name}&id=${show.id}`}/>
                        </Show>
                    )
                })}
            </ShowsContainer>
        </Wrapper>
    );
}

export default TrendingShows;