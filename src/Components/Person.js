import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as API from '../API'
import queryString from 'query-string'
import { useSelector } from 'react-redux'
import { Person_Credits } from './Person_Credits'

export function Person () {
    const activePerson = useSelector(state => state.activePerson);

    useEffect(() => {
        const urlParams = queryString.parse(location.search);
        API.getPerson(urlParams.id);
    }, []);

    function get_random_credit_image() {
        let rand = Math.floor(Math.random() * activePerson.credits.cast.length);

        // get first random poster that has a backdrop image to use as the header image
        for (let i = 0; i < activePerson.credits.cast.length; i++) {
            if (activePerson.credits.cast[rand].backdrop_path != null) {
                return `https://image.tmdb.org/t/p/original/${activePerson.credits.cast[rand].backdrop_path}` 
            }
        }
        
        return ``;
    }

    return (
        <Wrapper>
            {activePerson &&
                <React.Fragment>
                    <BackgroundImg url={get_random_credit_image()} />
                    <Content_Wrapper>
                        <Content>
                            <Left>
                                <Img src={`https://image.tmdb.org/t/p/w185/${activePerson.profile_path}`} />
                            </Left>
                            <Right>
                                <Name>{activePerson.name}</Name>
                                <Born>Born {activePerson.birthday} in {activePerson.place_of_birth}</Born>
                                <Profession>Profession: {activePerson.known_for_department}</Profession>
                                <Bio>{activePerson.biography}</Bio>
                            </Right>
                        </Content>
                        <Person_Credits credits={activePerson.credits}/>
                    </Content_Wrapper>
                </React.Fragment>
            }
        </Wrapper>
    );
}

const Wrapper = styled.div``

const Content_Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -60px;
`

const Content = styled.div`
    display: flex;
    max-width: 1000px;
`

const Left = styled.div`
    width:35%;
    display: flex;
    justify-content: center;
`

const Right = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
`

const Img = styled.img``

const BackgroundImg = styled.div`
    background-image: url(${props => props.url});
    width: 100%;
    height: 75%; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Name = styled.div`
    /* margin-top: -60px; */
    font-size: 100px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    text-shadow: 0px 0px 10px #000000;
`

const Born = styled.div``
const Profession = styled.div``
const Bio = styled.div``