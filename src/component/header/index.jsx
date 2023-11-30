import { useState } from "react"
import { HeaderStyled } from "../../styles/HeaderStuled"
import { LitleCar } from "./LitleCar"
import { Logo } from "./Logo"
import { Search } from "./Search"

export const Header = ({setModalViel, modalViel, setInputSearch,carList}) => {
    console.log(carList.length)
    return (
        <HeaderStyled quanty={carList.length} tamanho={1200}>
            <div className='header__container'>
                <div className="logo">
                    <Logo />
                    <LitleCar setModalViel={setModalViel} modalViel={modalViel}/>
                </div>
                <div className='heder_rigth'>
                    <Search setInputSearch={setInputSearch}/>
                </div>     
            </div>
        </HeaderStyled>
    )
}