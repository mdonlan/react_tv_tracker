import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { find_favorites_airing_this_week } from "../API"

export function Tracker() {
    const favorites = useSelector(state => state.user_favorites);
    const [days_this_week, set_days_this_week] = useState([]);

    useEffect(() => {
        create_week();
        find_favorites_airing_this_week();
    }, [favorites]);

    function find_favorites_airing_this_week() {
        const episodes_this_week = [];
        const one_day = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        const today = new Date();
    
        favorites.forEach(f => {

            if (f.last_episode_to_air) {
                const last_episode_date = new Date(f.last_episode_to_air.air_date);
                const days_diff = Math.round(Math.abs((today.getTime() - last_episode_date.getTime())/(one_day)));
                if (days_diff <= 3) {
                    episodes_this_week.push(f.last_episode_to_air);
                }
            }
            
            if (f.next_episode_to_air) {
                const next_episode_date = new Date(f.next_episode_to_air.air_date)
                const days_diff = Math.round(Math.abs((today.getTime() - next_episode_date.getTime())/(one_day)));
                if (days_diff <= 3) {
                    episodes_this_week.push(f.next_episode_to_air);
                }
            }
        })
    
        console.log("episodes_this_week", episodes_this_week)

        episodes_this_week.forEach(e => {
            const episode_date = new Date(e.air_date);
            days_this_week.forEach((day, i) => {
                const days_diff = Math.round(Math.abs((day.date.getTime() - episode_date.getTime())/(one_day) - 1)); // why do we need to -1 here? it seems like its off by one day?????
                if (days_diff == 0) {
                    set_days_this_week(days_this_week => {
                        days_this_week[i].episodes.push(e);
                        return days_this_week;
                    });
                }
            })
        })
    }

    function create_week() {
        // create the current week view
        // set current day to middle of week view so get 3 days before and 3 after
        // this is why we start i at -4

        const days = [];

        for (let i = -3; i < 4; i++) {
            let raw_date = new Date();
            raw_date.setDate(raw_date.getDate() + i);

            const date = raw_date.getDate();
            const month = raw_date.getMonth();
            const day = raw_date.getDay();
            const days_of_week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            const months_of_year = ['January','February','March','April','May','June','July','August','September','October','November','December'];

            const full_date = days_of_week[day] + ' ' + months_of_year[month] + ' ' + date;
            const this_day = {
                full_date: full_date,
                date: raw_date,
                // airDay: date,
                day_num: i,
                episodes: []
            };

            days.push(this_day);
        }

        set_days_this_week(days);
    }

    return (
        <Wrapper>
            <Title>Favorites Tracker</Title>
            <Weekly_Wrapper>
                {days_this_week.map(day => {
                    return (
                        <Day key={day.full_date}>
                            <Day_Title>{day.full_date}</Day_Title>
                            {day.episodes.map(e => {
                                const show = favorites.find(elem => elem.id == e.show_id);
                                return (
                                    <Episode key={e.name}>
                                        <Click_Zone to={`/show?name=${show.name.replace(/\s+/g, '-').toLowerCase()}&id=${show.id}`} />
                                        <Show_Name>{show.name}</Show_Name>
                                        <Episode_Name>{e.name}</Episode_Name>
                                    </Episode>
                                )
                            })}
                        </Day>
                    )
                })}
            </Weekly_Wrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Title = styled.div`
    font-size: 32px;
    margin-top: 50px;
`

const Weekly_Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 100px;
    height: calc(100% - 100px);
    width: 100%;
`

const Day = styled.div`
    width: 13%;
    height: 100%;
    max-height: 500px;
    border: 1px #dddddd solid;
`

const Day_Title = styled.div`
    text-align: center;
    border-bottom: 1px solid;
    padding-top: 5px;
    padding-bottom: 5px;
`

const Episode = styled.div`
    position: relative;
    color: #dddddd;
    text-decoration: none;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 5px;
    cursor: pointer;

    :hover {
        background: rgba(30, 30, 30, 0.8);
    }
`

const Show_Name = styled.div`
    font-size: 14px;
`

const Episode_Name = styled.div`
    font-size: 12px;
    color: #878787;
`

const Click_Zone = styled(Link)`
    height: 100%;
    width: 100%;
    position: absolute;
`