import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useParams } from "react-router-dom"
import { StyledCharacterDetails, StyledHeader, StyledCharacterBox, StyledCharacterImage, StyledDetailsBox, StyledText } from "./CharacterDetails.style"

export const CharacterDetails = () => {
    const [item, setItem] = useState([])
    const [item2, setItem2] = useState([])
    const [isLoading, setLoading] = useState(true)

    const { id } = useParams();

    const characterUrl = "https://rickandmortyapi.com/api/character/"

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(characterUrl + id)
            setItem(result?.data)
            setItem2(result?.data?.location)
            
            setLoading(false)
        }
        fetchItems()
    }, [id])

    console.log(item)

    return (
        <StyledCharacterDetails>
            <StyledHeader>{item.name}</StyledHeader>
            <StyledCharacterBox>
                <StyledCharacterImage src={item.image} />
                <StyledDetailsBox>
                    <StyledText>Gender : {item.gender}</StyledText>
                    <StyledText>Location : {item2.name}</StyledText>
                    <StyledText>Species : {item.species}</StyledText>
                    <StyledText>Status : {item.status}</StyledText>
                </StyledDetailsBox>
            </StyledCharacterBox>
        </StyledCharacterDetails>

    )
}