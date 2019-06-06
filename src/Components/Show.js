import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as API from '../API'
import queryString from 'query-string'
import { useSelector } from 'react-redux'

function Show () {
    const activeShow = useSelector(state => state.activeShow);

    useEffect(() => {
        const urlParams = queryString.parse(location.search);
        API.getShow(urlParams.id);
    }, []);

    return (
        <Wrapper>
            {activeShow &&
                <React.Fragment>
                    <BackgroundImg url={`https://image.tmdb.org/t/p/original${activeShow.backdrop_path}`} />
                    <ShowInfo>
                        <Content>
                            <PosterImg src={`https://image.tmdb.org/t/p/w185${activeShow.poster_path}`}/>
                            <Details>
                                <Name>{activeShow.name}</Name>
                                <DetailsItem>{activeShow.overview}</DetailsItem>
                                <DetailsItem>Status: {activeShow.status}</DetailsItem>
                                <DetailsItem>Network: {activeShow.networks[0].name}</DetailsItem>
                                <DetailsItem># Eps: {activeShow.number_of_episodes}</DetailsItem>
                                <DetailsItem># Seasons: {activeShow.number_of_seasons}</DetailsItem>
                                <DetailsItem>Genre: {activeShow.genres.map(item => item.name).join(', ')}</DetailsItem>
                            </Details>
                        </Content>
                    </ShowInfo>
                </React.Fragment>
            }
        </Wrapper>
    );
}

export default Show;

// styles

export const Wrapper = styled.div``;

export const BackgroundImg = styled.div`
    background-image: url(${props => props.url});
    width: 100%;
    height: 75%; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ShowInfo = styled.div`
    width: 100%;
    min-height: 100%;
    background: #111111;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 50px;
`;

export const Content = styled.div`
    display: flex;
`;

export const Details = styled.div`
    max-width: 500px;
`;

export const Name = styled.div`
    font-size: 32px;
    margin-bottom: 50px;
`;

export const PosterImg = styled.img`
    width: 185px;
`;

export const DetailsItem = styled.div``;