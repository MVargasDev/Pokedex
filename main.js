import ky from 'https://cdn.skypack.dev/ky?dts'
import {backgroundColor, createCard} from './js/modules.js'

const BASE_API_URL = 'https://pokeapi.co/api/v2/pokemon'
const mainContainer = document.querySelector('.container.main')
const primaryType = 0
const secondaryType = 1

async function getPokemons(){
    const response = await ky.get(`${BASE_API_URL}?limit=500"`).json()
    
    const { results } = response

    for(let i = 1 ; i<=results.length ; i++){
        const data = await ky.get(`${BASE_API_URL}/${i}/`).json()
        const {sprites, types, id, name} = data

        let fistType = types[primaryType].type.name
        let secondType = (types.length>1) ? types[secondaryType].type.name : ""

        let card = createCard(sprites.other.home.front_default, id, name, fistType, secondType)

        mainContainer.appendChild(card)

        backgroundColor(fistType, card)
    }
}

getPokemons()



