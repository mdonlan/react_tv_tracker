import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { add_favorite, remove_favorite } from "../../API"

function ShowDetails (props) {
    const favorites = useSelector(state => state.user_favorites);
    const [is_favorite, set_is_favorite] = useState(false);

    useEffect(() => {
        favorites.forEach(f => {
            console.log('blah')
            if (f.id == props.show.id) {
                console.log('show is a favorite')
                set_is_favorite(true);
            }
        })
    }, favorites);

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
                {!is_favorite &&
                    <Add_Favorite_Btn onClick={() => {add_favorite(props.show.id)}}>Add to Favorites</Add_Favorite_Btn>    
                }
                {is_favorite &&
                    <Remove_Favorite_Btn onClick={() => {remove_favorite(props.show.id)}}>Remove From Favorites</Remove_Favorite_Btn>
                }
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

const Add_Favorite_Btn = styled.div`
    background: #32a852;
    margin: 5px;
    padding: 5px;
    width: 185px;
    text-align: center;
    cursor: pointer;

    :hover {
        background: #3ed667;
    }
`

const Remove_Favorite_Btn = styled.div`
    background: #a64030;
    margin: 5px;
    padding: 5px;
    width: 185px;
    text-align: center;
    cursor: pointer;

    :hover {
        background: #d1513d;
    }
`