import React from 'react'
import styled from 'styled-components'

function ShowSeasons (props) {
    return (
        <Wrapper>
            {props.show.seasons.map((season, i) => {
                return (
                    <Season key={i}>
                        <SeasonPoster src={`https://image.tmdb.org/t/p/w185${season.poster_path}`} />
                        <SeasonTitle>{season.name}</SeasonTitle>
                        <SeasonNumEpisodes>{season.episode_count} episodes</SeasonNumEpisodes>
                    </Season>
                );
            })}
        </Wrapper>
    )
}

export default ShowSeasons;

// styles

const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
`;

const Season = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    background: #222222;
    cursor: pointer;
`;

const SeasonPoster = styled.img`
    height: 278px;
    width: 185px;
`;

const SeasonTitle = styled.div`
    text-align: center;
`;

const SeasonNumEpisodes = styled.div`
    text-align: center;
    font-size: 14px;
`;