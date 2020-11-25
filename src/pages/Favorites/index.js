import { StyledFavorites, StyledImage } from "./Favorites.style"
import Construction from "../../img/construction.gif"

export const Favorites = () => {

    return (
        <StyledFavorites>
            <StyledImage src={Construction} />
        </StyledFavorites>
    )
}