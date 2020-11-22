import React, { useState, useEffect } from 'react';
import axios from "axios"
import { StyledCharacters } from "./Characters.style"
import { CharacterItem } from "../../components/CharacterItem"

export const Characters = () => {
    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios("https://rickandmortyapi.com/api/character")

            console.log(result?.data?.results)
            setItems(result?.data?.results)
            setLoading(false)
        }
        fetchItems()
    }, [])


    return (
        <StyledCharacters>
            {items?.map(item => (<CharacterItem key={item.id} item={item}></CharacterItem>))}
        </StyledCharacters>
    )
}