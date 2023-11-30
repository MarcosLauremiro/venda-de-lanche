import { useEffect } from "react"
import { ModalStyled } from "../../styles/ModalStyled"
import { CardCar } from "./CardCar"
import { useRef } from "react"

export const Modal = ({modalViel, setModalViel, carList, setCarList}) => {
    const closeModal = () => {
        setModalViel(!modalViel) 
    }

    const delet = (itemId) => {
        setCarList((carList) => {
            return carList.filter(item => item.id !== itemId)
        })
    }

    const sumValue = carList.reduce((acc, sum) => {
        return acc + Number(sum.price)
    },0)

    const modalRef = useRef(null)

    const buttonRef = useRef(null)
    
    useEffect(() => {
        const actionClick = (e) => {
            if(!modalRef.current?.contains(e.target)){
                setModalViel(false)
            }
        }

        window.addEventListener('mousedown', actionClick)
        
        return() => {
            window.removeEventListener('mousedown', actionClick)
        }
    },[])

    useEffect(() => {
        const downButton = (e) => {
            if(e.key === 'Escape'){
               buttonRef.current?.click() 
            }
        }

        window.addEventListener('keydown', downButton)

        return () => {
            window.removeEventListener('keydown', downButton)
        }
    },[])

    return( 
        <ModalStyled className="">
            <div ref={modalRef} className="modal__container">
                <div className="headerModal">
                    <h1 className="title-4-styled">Carrinho de compras</h1>
                    <span ref={buttonRef} className="title-4-styled" onClick={() => {closeModal()}}>X</span>
                </div>
                <div className="listSnake">
                    <ul>
                    {carList.map(snake => {
                        return(
                            <CardCar key={snake.id} snake={snake} delet={delet}/>
                        )
                    })}
                    </ul>
                </div>
                <div className="total">
                    <span className="text-2-styled">Total</span>
                    <span className="text-1-styled">
                        {sumValue.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    })}
                    </span>
                </div>
                <div className="buttom_clear">
                    <button onClick={() => {setCarList([])}}>Remover todos</button>
                </div>
            </div>
        </ModalStyled>
    )
}
