import React from 'react'
import { useHistory } from "react-router-dom"
import { StyledCharacterWrapper, StyledText, StyledCharacterImage } from "./CharacterItem.style"

export const CharacterItem = ({ item }) => {
    const history = useHistory();
    return (
        <StyledCharacterWrapper onClick={() => history.push(`/details/${item.id}`) }>
            <StyledCharacterImage src={item.image} />
            <StyledText>{item.name}</StyledText>
        </StyledCharacterWrapper>
    )
}