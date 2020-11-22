import styled from "styled-components"


export const StyledHomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`
export const StyledFrameBox = styled.div`
    * {
        margin: 0 6rem;
    }

    @media ( max-width: 1390px) {
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        
    }
`

export const StyledImage = styled.img`
    margin: 0;
    align-self: center;
    width: 30%;
    margin: 2rem;
`

export const StyledFrame = styled.iframe`
    
`