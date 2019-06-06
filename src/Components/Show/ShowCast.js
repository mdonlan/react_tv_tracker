import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function ShowCast (props) {
    const [showAll, setShowAll] = useState(false);

    return (
        <Wrapper>
            <Cast showAll={showAll}>
                {props.show.credits.cast
                    .sort((a, b) => a.order - b.order)
                    .map((castMember, i) => {
                        return (
                            <CastMember key={i}>
                                <CastPhoto src={`https://image.tmdb.org/t/p/w185${castMember.profile_path}`} />
                                <CastName>{castMember.name}</CastName>
                                <CharacterName>{castMember.character}</CharacterName>
                                <ClickZone to={`/person?name=${castMember.name.replace(/\s+/g, '-').toLowerCase()}&id=${castMember.id}`} />
                            </CastMember>
                        );
                    })
                }
            </Cast>
            <SetShowAmtBtn onClick={() => {setShowAll(showAll ? false : true)}} >{showAll ? "Show Less" : "Show More"}</SetShowAmtBtn>
        </Wrapper>
    )
}

export default ShowCast;

// styles

const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Cast = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-height: ${props => props.showAll ? "1000px" : "340px"};
    overflow: hidden;
    transition: 1s;
`;

const CastMember = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    background: #222222;
    cursor: pointer;
    width: 185px;
    position: relative;
`;

const CastPhoto = styled.img`
    height: 278px;
    width: 185px;
`;

const CastName = styled.div`
    text-align: center;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CharacterName = styled.div`
    text-align: center;
    font-size: 14px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const SetShowAmtBtn = styled.div`
    background: #222222;
    padding: 5px;
    border-radius: 3px;
    margin: 15px;
    cursor: pointer;

    :hover {
        background: #333333;
    }
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