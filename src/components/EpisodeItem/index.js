import React from 'react'
import { StyledEpisodeWrapper, StyledText, StyledEpisodeImage } from "./EpisodeItem.style"

export const EpisodeItem = ({ item }) => {
    return (
        <StyledEpisodeWrapper>
            <StyledText>{item.episode}</StyledText>
            <StyledText>{item.name}</StyledText>
        </StyledEpisodeWrapper>
    )
}