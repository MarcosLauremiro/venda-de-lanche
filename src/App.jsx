import { useEffect, useState } from 'react'
import { GlobalStyled } from './styles/GlobalStyled'
import { ResetStyled } from './styles/ResetStyled'
import { Header } from './component/Header'
import { Section } from './component/Section'
import { api } from './servers/api'
import { Modal } from './component/Modal'


function App() {
  const [snakes, setSnakes] = useState([])
  const [modalViel, setModalViel] = useState(false)
  const [carList, setCarList] = useState([])
  const[inputSearch, setInputSearch] = useState('')

  useEffect(() => {
    const responseSnakes = async () => {
      try{
        const {data} = await api.get('/products')
        setSnakes(data)
        
      } catch (error) {
        console.log(error)
      }
    }
    responseSnakes()
  },[])

  

  const filterSnakes = snakes.filter(
    snake => snake.name.toUpperCase().includes(inputSearch.toUpperCase())
  )

  return (
    <>
      <GlobalStyled />
      <ResetStyled />
      <Header carList={carList} setModalViel={setModalViel} modalViel={modalViel} setInputSearch={setInputSearch}/>
      <main>
        <Section filterSnakes={filterSnakes} snakes={snakes} setSnakes={setSnakes} setCarList={setCarList} carList={carList}/> 
        {modalViel ? <Modal setModalViel={setModalViel} modalViel={modalViel} carList={carList} setCarList={setCarList}/> : <div></div>}
      </main>
    </>
  )
}

export default App
