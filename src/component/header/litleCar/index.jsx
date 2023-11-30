import car from '../../../assets/car.svg'


export const LitleCar = ({setModalViel, modalViel}) => {
    return (
        <div className='litle__car'>
            <div className='button_car' onClick={() => setModalViel(!modalViel)} ><img src={car} alt="" /></div>
        </div>
    )
}