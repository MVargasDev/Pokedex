import ky from 'https://cdn.skypack.dev/ky?dts'
import {backgroundColor, createCard, fillSearchBar} from './js/modules.js'

const BASE_API_URL = 'https://pokeapi.co/api/v2/pokemon'
const mainContainer = document.querySelector('.container.main')
const searchBarItemsContainer = document.querySelector('.autocomplete-box')
const searchBar = document.querySelector('#search-bar')

const primaryType = 0
const secondaryType = 1

async function getPokemons(){
    const response = await ky.get(`${BASE_API_URL}/?limit=25"`).json()
    
    const { results } = response

    for(let i = 1 ; i<=results.length ; i++){
        const data = await ky.get(`${BASE_API_URL}/${i}/`).json()
        const {sprites, types, id, name} = data

        let fistType = types[primaryType].type.name
        let secondType = (types.length>1) ? types[secondaryType].type.name : ""
        let type = fistType+secondType

        let card = createCard(sprites.other.home.front_default, id, name, fistType, secondType)

        mainContainer.appendChild(card)
        backgroundColor(type, card)

        searchBar.addEventListener('keyup', filtrarElemento)

    }

    async function filtrarElemento(){
        const textValue = searchBar.value.split(" ").join("").toLowerCase()
        searchBarItemsContainer.innerHTML = ''

        const searchCharacterByName = await ky.get(`${BASE_API_URL}/?limit=151`).json()
        const {results} = searchCharacterByName

        for(let result of results){
            const charName = result.name.split(" ").join("").toLowerCase()

            const data = await ky.get(`${BASE_API_URL}/${charName}/`).json()
            const {sprites, id, name} = data

            if(charName.indexOf(textValue) != -1 ){
                let item = fillSearchBar(sprites.other.home.front_default, id, name)
                searchBarItemsContainer.appendChild(item)
                // mainContainer.classList.add('overlay')
            } 
            if(textValue === ""){
                searchBarItemsContainer.innerHTML = ''
                // mainContainer.classList.remove('overlay')
            }
        }
    }  
}

getPokemons()



