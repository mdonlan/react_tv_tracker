import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as API from '../../API'

export function Trending (props) {
    const trendingShows = useSelector(state => state.trendingShows);
    
    useEffect(() => {
        API.getTrending();
    }, []);

    return (
        <Wrapper>
            {trendingShows.map((show) => {
                return (
                    <Show key={show.id}>
                        {show.backdrop_path &&
                            <PosterImg src={`https://image.tmdb.org/t/p/w400/${show.backdrop_path}`}/>
                        }
                        {!show.backdrop_path &&
                            <PosterImg src={'src/assets/not_found.png'}/>
                        }
                        <Text>
                            <Name>{show.name}</Name>
                            <Vote_Score>{show.vote_average}</Vote_Score>
                        </Text>
                        <ClickZone to={`/show?name=${show.name.replace(/\s+/g, '-').toLowerCase()}&id=${show.id}`}/>
                    </Show>
                )
            })}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Show = styled.div`
    height: 275px;
    width: 400px;
    background: #222222;
    position: relative;
    border: solid 1px #2d2d2d;
`;

const PosterImg = styled.img`
    width: 400px;
    height: 225px;
`;

const Text = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    height: 50px;
    width: calc(100% - 10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Name = styled.div`
    font-size: 18px;
`;

const Vote_Score = styled.div``

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