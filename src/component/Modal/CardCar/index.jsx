import { LiCarStyled } from "../../../styles/ModalStyled"
import lixo from '../../../assets/lixo.svg'


export const CardCar = ({snake, delet}) => {
    return(
        <LiCarStyled>
            <div className="info_snake">
                <div className="img_snake">
                    <img src={snake.img} alt="" />
                </div>
                <div className="name_snake">
                    <h1 className="title-4-styled">{snake.name}</h1>
                </div>
            </div>
            <div className="button_lixo">
                <button onClick={() => {delet(snake.id)}}><img src={lixo} alt="" /></button>
            </div>
        </LiCarStyled>
    )
}