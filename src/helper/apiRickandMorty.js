export const getRickandMorty = async() =>{
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    return data
}


export const getRickandMortyId = async(id) =>{
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()
    return data
}