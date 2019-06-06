import React from 'react'
import styled from 'styled-components'

function ShowDetails (props) {
    return (
        <Wrapper>
            <Left>
                <PosterImg src={`https://image.tmdb.org/t/p/w185${props.show.poster_path}`}/>
            </Left>
            <Right>
                {/* <Name>{props.show.name}</Name> */}
                <Overview>{props.show.overview}</Overview>
                <Items>
                    <Item>Status: {props.show.status}</Item>
                    <Item>Network: {props.show.networks[0].name}</Item>
                    <Item># Eps: {props.show.number_of_episodes}</Item>
                    <Item># Seasons: {props.show.number_of_seasons}</Item>
                    <Item>Genre: {props.show.genres.map(item => item.name).join(', ')}</Item>
                </Items>
            </Right>
        </Wrapper>
    )
}

export default ShowDetails;

// styles

const Wrapper = styled.div`
    display: flex;
`;

const Left = styled.div`
    margin-right: 25px;
`;

const Right = styled.div`
    margin-left: 25px;
`;

const Name = styled.div`
    font-size: 32px;
    margin-bottom: 50px;
`;

const Overview = styled.div``;

const PosterImg = styled.img`
    width: 185px;
`;

const Items = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.div`
    margin: 5px;
    background: #222222;
    padding: 5px;
    border-radius: 3px;
`;