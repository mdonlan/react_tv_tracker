import React from 'react'
import styled from 'styled-components'

function ShowSeasons (props) {
    return (
        <Wrapper>
            {props.show.credits.cast.sort((a, b) => a.order - b.order).map((castMember, i) => {
                return (
                    <CastMember key={i}>
                        <CastPhoto src={`https://image.tmdb.org/t/p/w185${castMember.profile_path}`} />
                        <CastName>{castMember.name}</CastName>
                        <CharacterName>{castMember.character}</CharacterName>
                    </CastMember>
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

const CastMember = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    background: #222222;
    cursor: pointer;
`;

const CastPhoto = styled.img`
    height: 278px;
    width: 185px;
`;

const CastName = styled.div`
    text-align: center;
`;

const CharacterName = styled.div`
    text-align: center;
    font-size: 14px;
`;