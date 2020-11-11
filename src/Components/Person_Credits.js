import React, { useEffect } from 'react'
import styled from 'styled-components'


export function Person_Credits(props) {

    const credits = props.credits;

    useEffect(() => {
    }, []);

    return (
        <Wrapper>
            <Title>Credits</Title>
            <Container>
                {credits.cast.map(credit => {
                    return (
                        <Credit key={credit.title}>
                            {credit.poster_path &&
                                <Img src={`https://image.tmdb.org/t/p/w185/${credit.poster_path}`} />
                            }
                            {!credit.poster_path &&
                                <Img src={'src/assets/poster_placeholder_2.jpg'}/>
                            }
                            <Text>
                                <Top>
                                    <Name>{credit.title}</Name>
                                    <Vote_Score>{credit.vote_average}</Vote_Score>
                                </Top>
                                {credit.release_date &&
                                    <Release_Date>{new Date(credit.release_date).getFullYear()}</Release_Date>
                                }
                            </Text>
                        </Credit>
                    )
                })}
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 80%;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Title = styled.div`
    font-size: 24px;
    text-align: center;
`

const Credit = styled.div`
    width: 185px;
    height: 325px;
    margin: 8px;
`

const Img = styled.img`
    width: 185px;
    height: 278px;
`

const Text = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    height: 75px;
    width: calc(100% - 10px);
    display: flex;
    flex-direction: column;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`

const Name = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Vote_Score = styled.div``
const Release_Date = styled.div``