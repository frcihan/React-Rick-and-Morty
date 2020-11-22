import React from 'react';
import { StyledNavbarWrapper, StyledNav, StyledList, StyledListItem } from './Navbar.style';
import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <StyledNavbarWrapper>
            <StyledNav>
                <StyledList>
                    <StyledListItem>
                        <Link to="/">Home</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link to="/episodes">Episodes</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link to="/characters">Characters</Link>
                    </StyledListItem>
                    <StyledListItem>
                        <Link to="/favorites">Favorites</Link> 
                    </StyledListItem>
                </StyledList>
            </StyledNav>
        </StyledNavbarWrapper>
    )
}