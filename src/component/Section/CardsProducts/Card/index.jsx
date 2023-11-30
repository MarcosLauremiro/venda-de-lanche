import { useState } from "react"
import { ButtonStyled } from "../../../../styles/SectionStyled"

export const Card = ({snake, addCar}) => {

    return(
        <li>
            <div className="img_snake">
                <img src={snake.img} alt="" />
            </div>
            <div className="info_snake">
                <h1 className="title-4-styled">{snake.name}</h1>
                <span className="text-3-styled">{snake.category}</span>
                <span className="text-2-styled">{snake.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                })}</span>
            </div>
            <div className="button-add">
                <ButtonStyled className="text-1-styled" onClick={() => addCar(snake)}>adicionar</ButtonStyled>
            </div>
        </li>
    )
    
}