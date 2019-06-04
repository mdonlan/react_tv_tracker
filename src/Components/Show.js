import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as API from '../API'
import queryString from 'query-string'
import { useSelector } from 'react-redux'

const Wrapper = styled.div``;

function Show () {
    const activeShow = useSelector(state => state.activeShow)

    useEffect(() => {
        const urlParams = queryString.parse(location.search);
        API.getShow(urlParams.id);
    }, []);

    return (
        <Wrapper>
            {activeShow &&
                <div>{activeShow.name}</div>
            }
        </Wrapper>
    );
}

export default Show;