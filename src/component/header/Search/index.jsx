import lupa from '../../../assets/search.svg'

export const Search = ({setInputSearch}) => {

    const serchSnake = (e) => {
        e.preventDefault()
    }
    
    return (
        <form onSubmit={serchSnake} className = 'search' >
            <input onChange={(e) => setInputSearch(e.target.value)} placeholder="Digitar Pesquisa" type="search" name="pesquisa" id="" />
            <button type='submit'><img src= {lupa} alt="" /></button>
        </form>
    )
}