import styled from "styled-components"

export const StyledNavbarWrapper = styled.div`
    background-color: #242424;
    padding: 0.6rem 1rem;
    font-size: 1.5rem;
    min-width: 930px;
`

export const StyledNav = styled.nav`

`

export const StyledList = styled.ul`
    display: flex;
    justify-content: flex-start;
    list-style-type: none;
`

export const StyledListItem = styled.li`
    margin: 1rem;

    * {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
    }
`