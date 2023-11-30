import { SectionStyled } from "../../styles/SectionStyled"
import { CardsProducts } from "./CardsProducts"

export const Section = ({snakes, setCarList, carList, filterSnakes}) => {
    return (
        <SectionStyled>
            <CardsProducts filterSnakes={filterSnakes}  snakes={snakes} setCarList={setCarList} carList={carList}/>    
        </SectionStyled>
    )
}