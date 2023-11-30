import { Card } from "./Card"

export const CardsProducts = ({setCarList, carList,filterSnakes}) => {

    const addCar = (item) => {
        if(carList.includes(item)){
            alert('ja adicionado')
        }else{
            setCarList((oldList) => [...oldList, item])
        }
        
    }
    return (
        <ul>
           {
            filterSnakes.map(snake => {
               return <Card key={snake.id} snake={snake} addCar={addCar}/>
            })
           } 
        </ul>
    )
}