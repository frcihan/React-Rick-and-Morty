import React, { useState, useEffect } from 'react';
import axios from "axios"
import { StyledFavorites, StyledImage } from "./Favorites.style"
import Construction from "../../img/construction.gif"

export const Favorites = () => {

    return (
        <StyledFavorites>
            <StyledImage src={Construction} />
        </StyledFavorites>
    )
}