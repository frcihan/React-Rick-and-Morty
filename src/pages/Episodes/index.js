import React, { useState, useEffect } from 'react';
import axios from "axios"
import { StyledEpisodesWrapper, StyledSeasonBox, StyledHeader,  StyledEpisodesBox, StyledSeasonCover, StyledEpisodes } from "./Episodes.style"
import { EpisodeItem } from "../../components/EpisodeItem"
import season1 from "../../img/rm-season1.jpg"
import season2 from "../../img/rm-season2.jpg"
import season3 from "../../img/rm-season3.jpg"
import season4 from "../../img/rm-season4.jpg"

export const Episodes = () => {
    let items = []
    const [items1, setItems1] = useState([])
    const [items2, setItems2] = useState([])
    const [items3, setItems3] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            const result1 = await axios("https://rickandmortyapi.com/api/episode")
            setItems1(result1?.data?.results)
            const result2 = await axios("https://rickandmortyapi.com/api/episode?page=2")
            setItems2(result2?.data?.results)
            const result3 = await axios("https://rickandmortyapi.com/api/episode?page=3")
            setItems3(result3?.data?.results)

            setLoading(false)
        }
        fetchItems()
    }, [])

    items = items1.concat(items2, items3);

    console.log(items)


    return (
        <StyledEpisodesWrapper>
            <StyledSeasonBox>
                <StyledHeader>SEASON 1</StyledHeader>
                <StyledEpisodesBox>
                    <StyledSeasonCover src={season1}/>
                    <StyledEpisodes>
                        {items?.map(item => (item.episode).startsWith("S01") && (<EpisodeItem key={item.id} item={item}></EpisodeItem>))}
                    </StyledEpisodes>
                </StyledEpisodesBox>
            </StyledSeasonBox>
            <StyledSeasonBox>
                <StyledHeader>SEASON 2</StyledHeader>
                <StyledEpisodesBox>
                    <StyledSeasonCover src={season2}/>
                    <StyledEpisodes>
                        {items?.map(item => (item.episode).startsWith("S02") && (<EpisodeItem key={item.id} item={item}></EpisodeItem>))}
                    </StyledEpisodes>
                </StyledEpisodesBox>
            </StyledSeasonBox>
            <StyledSeasonBox>
                <StyledHeader>SEASON 3</StyledHeader>
                <StyledEpisodesBox>
                    <StyledSeasonCover src={season3}/>
                    <StyledEpisodes>
                        {items?.map(item => (item.episode).startsWith("S03") && (<EpisodeItem key={item.id} item={item}></EpisodeItem>))}
                    </StyledEpisodes>
                </StyledEpisodesBox>
            </StyledSeasonBox>
            <StyledSeasonBox>
                <StyledHeader>SEASON 4</StyledHeader>
                <StyledEpisodesBox>
                    <StyledSeasonCover src={season4}/>
                    <StyledEpisodes>
                        {items?.map(item => (item.episode).startsWith("S04") && (<EpisodeItem key={item.id} item={item}></EpisodeItem>))}
                    </StyledEpisodes>
                </StyledEpisodesBox>
            </StyledSeasonBox>
        </StyledEpisodesWrapper>
    )
}