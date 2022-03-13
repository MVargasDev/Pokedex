

export function backgroundColor(type, card){
    switch(type){
        case 'grass':
            card.classList.add('grass')
            break
        case 'fire':
            card.classList.add('fire')
            break
        case 'ice':
            card.classList.add('ice')
            break
        case 'electric':
            card.classList.add('electric')
            break
        case 'water':
            card.classList.add('water')
            break
        case 'ghost':
            card.classList.add('ghost')
            break
        case 'ground':
            card.classList.add('ground')
            break
        case 'poison':
            card.classList.add('poison')
            break
        case 'bug':
            card.classList.add('bug')
            break
        case 'psychic':
            card.classList.add('psychic')
            break
        case 'fighting':
            card.classList.add('fighting')
            break
        case 'rock':
            card.classList.add('rock')
            break   
        case 'dragon':
            card.classList.add('dragon')
            break 
        case 'fairy':
            card.classList.add('fairy')
            break 
        case 'steel':
            card.classList.add('steel')
            break 
        case 'dark':
            card.classList.add('dark')
            break 
        case 'flying':
            card.classList.add('flying')
            break 
        default:
            card.classList.add('normal')
    }
}

export function createCard(image, id, name, fistType, secondType){
    // we create the card
    const card = document.createElement('div')
    card.dataset.id = id
    card.classList.add('card')
    // we create the image container 
    const imageContainer = document.createElement('div')
    imageContainer.classList.add('image-container')
    // here we create the image
    const officialArt = document.createElement('img')
    officialArt.classList.add('image')
    officialArt.src = image
    // we add the image to the image container
    imageContainer.appendChild(officialArt)
    // we create the info container
    const infoContainer = document.createElement('div')
    infoContainer.classList.add('info-container')
    // heading pokemon id plus name
    const infoContainerHeading = document.createElement('div')
    infoContainerHeading.classList.add('info-container-heading')
    // pokemon id #
    const pokemonId = document.createElement('p')
    pokemonId.textContent = '#' + id
    pokemonId.classList.add('pokemon-id')
    infoContainerHeading.appendChild(pokemonId)
    // pokemon name
    const pokemonName = document.createElement('h3')
    pokemonName.textContent = name
    pokemonName.classList.add('pokemon-name')
    infoContainerHeading.appendChild(pokemonName)
    // adding headinto info container
    infoContainer.appendChild(infoContainerHeading)
    // adding type content div
    const infoContainerType = document.createElement('div')
    infoContainerType.classList.add('info-container-types')
    // pokemon primary and secondary type
    const pokemonPrimaryType = document.createElement('p')
    pokemonPrimaryType.textContent = fistType
    pokemonPrimaryType.classList.add('text-info')
    infoContainerType.appendChild(pokemonPrimaryType)
    const pokemonSecondaryType = document.createElement('p')
    pokemonSecondaryType.textContent = secondType
    pokemonSecondaryType.classList.add('text-info')
    infoContainerType.appendChild(pokemonSecondaryType)
    // adding type info to the info container
    infoContainer.appendChild(infoContainerType)
    
    // we add the image container and the info container to the card
    card.appendChild(imageContainer)
    card.appendChild(infoContainer)
    // we return the card
    return card
}