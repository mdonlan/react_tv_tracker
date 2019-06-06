import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as API from '../API'
import queryString from 'query-string'
import { useSelector } from 'react-redux'

const Wrapper = styled.div``;

function Person () {
    const activePerson = useSelector(state => state.activePerson);

    useEffect(() => {
        const urlParams = queryString.parse(location.search);
        API.getPerson(urlParams.id);
    }, []);

    return (
        <Wrapper>
            {activePerson &&
                <React.Fragment>
                    <div>{activePerson.name}</div>
                    <div>{activePerson.birthday}</div>
                    <div>{activePerson.known_for_department}</div>
                    <div>{activePerson.biography}</div>
                    <div>{activePerson.place_of_birth}</div>
                    <img src={`https://image.tmdb.org/t/p/w185/${activePerson.profile_path}`} />
                </React.Fragment>
            }
        </Wrapper>
    );
}

export default Person;