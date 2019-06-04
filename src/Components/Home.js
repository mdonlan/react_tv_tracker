import React from 'react'
import styled from 'styled-components'
import TrendingShows from './TrendingShows';

const Wrapper = styled.div``;

function Home () {
    return (
        <Wrapper>
            <TrendingShows />
        </Wrapper>
    );
}

export default Home;