import ky from 'https://cdn.skypack.dev/ky?dts'
import {backgroundColor, createCard, createModal, fillSearchBar} from './js/modules.js'

const BASE_API_URL = 'https://pokeapi.co/api/v2/pokemon'
const mainContainer = document.querySelector('.container.main')
const searchBarItemsContainer = document.querySelector('.autocomplete-box')
const searchBar = document.querySelector('#search-bar')

const primaryType = 0
const secondaryType = 1

async function getPokemons(){
    const response = await ky.get(`${BASE_API_URL}/?limit=25&offset=25"`).json()
    
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

        let item = fillSearchBar(sprites.other.home.front_default, id, name)
        searchBarItemsContainer.appendChild(item)
        searchBarItemsContainer.classList.add('not-show')

        searchBar.addEventListener('keyup', filterItem)

        card.addEventListener('click', showPokemonDetails)

    }
 
}

function filterItem(){
    const textValue = searchBar.value.split(" ").join("").toLowerCase()
    searchBarItemsContainer.classList.remove('not-show')

    let listItems = document.querySelectorAll('li')
    listItems.forEach(element => {
        let pokemonName = element.dataset.name
        element.style.display='none'
        if(pokemonName.indexOf(textValue) != -1 ){
            element.style.display = 'flex'
        } 
        if(textValue === ""){
            searchBarItemsContainer.classList.add('not-show')
        }
    });
} 

async function showPokemonDetails(){

    const data = await ky.get(`${BASE_API_URL}/${this.dataset.name}/`).json()
    const {sprites, types, id, name} = data
    
    let fistType = types[primaryType].type.name
    let secondType = (types.length>1) ? types[secondaryType].type.name : ""
    let type = fistType+secondType

    let modal = createModal(id, name, sprites.other.home.front_default, type)

    mainContainer.appendChild(modal)

    modal.classList.add('modal--show')
}



getPokemons()





