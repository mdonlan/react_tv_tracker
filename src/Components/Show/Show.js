import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as API from '../../API'
import queryString from 'query-string'
import { useSelector } from 'react-redux'
import ShowDetails from './ShowDetails'
import ShowSeasons from './ShowSeasons'
import ShowCast from './ShowCast'

function Show () {
    const activeShow = useSelector(state => state.activeShow);

    useEffect(() => {
        const urlParams = queryString.parse(location.search);
        API.set_active_show(urlParams.id);
    }, []);

    return (
        <Wrapper>
            {activeShow &&
                <React.Fragment>
                    <BackgroundImg url={`https://image.tmdb.org/t/p/original${activeShow.backdrop_path}`} />
                    <Title>{activeShow.name}</Title>
                    <ShowInfo>
                        <Content>
                            <ShowDetails show={activeShow} />
                            <ShowSeasons show={activeShow}/>
                            <ShowCast show={activeShow} />
                        </Content>
                    </ShowInfo>
                </React.Fragment>
            }
        </Wrapper>
    );
}

export default Show;

const Wrapper = styled.div``;

const Title = styled.div`
    margin-top: -60px;
    font-size: 100px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    text-shadow: 0px 0px 10px #000000;
`;

const BackgroundImg = styled.div`
    background-image: url(${props => props.url});
    width: 100%;
    height: 75%; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ShowInfo = styled.div`
    width: 100%;
    min-height: 100%;
    background: #111111;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 50px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
`;