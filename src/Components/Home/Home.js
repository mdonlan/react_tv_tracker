import React from 'react'
import styled from 'styled-components'
import TrendingShows from './TrendingShows';
import AiringToday from './AiringToday';

const Wrapper = styled.div``;

function Home () {
    return (
        <Wrapper>
            <TrendingShows />
            <AiringToday />
        </Wrapper>
    );
}

export default Home;