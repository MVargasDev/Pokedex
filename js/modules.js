export function createCard(image, id, name, fistType, secondType){
    // we create the card
    const card = document.createElement('div')
    card.dataset.id = id
    card.dataset.name = name
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
    const pokemonId = document.createElement('span')
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
    const pokemonPrimaryType = document.createElement('span')
    pokemonPrimaryType.textContent = fistType
    pokemonPrimaryType.classList.add('text-info')
    infoContainerType.appendChild(pokemonPrimaryType)
    const pokemonSecondaryType = document.createElement('span')
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

export function fillSearchBar(image, id, name){
    const listItem = document.createElement('li')
    listItem.dataset.name = name

    const listItem_ImageContainer = document.createElement('div')
    const listItem_Image = document.createElement('img')
    listItem_Image.src = image
    listItem_ImageContainer.appendChild(listItem_Image)

    const listItem_InfoContainer = document.createElement('div')
    const title = document.createElement('h3')
    title.textContent = "#" + id + " - " + name
    listItem_InfoContainer.appendChild(title)

    
    listItem.appendChild(listItem_ImageContainer)
    listItem.appendChild(listItem_InfoContainer)

    return listItem
}

export function createModal(id, name, image, type){
    // we create the modal screen
    const modal = document.createElement('div')    
    modal.classList.add('modal')
    // we create the modal container
    const modalContainer = document.createElement('div')
    modalContainer.dataset.id = id
    modalContainer.dataset.name = name
    modalContainer.classList.add('modal-container')
    // we create the image container 
    const modalImageContainer = document.createElement('div')
    modalImageContainer.classList.add('modal-image-container')
    backgroundColor(type, modalImageContainer)
    // here we create the image
    const officialArt = document.createElement('img')
    officialArt.classList.add('image')
    officialArt.src = image
    // we add the image to the image container
    modalImageContainer.appendChild(officialArt)
    // // we create the info container
    // const infoContainer = document.createElement('div')
    // infoContainer.classList.add('info-container')
    // // heading pokemon id plus name
    // const infoContainerHeading = document.createElement('div')
    // infoContainerHeading.classList.add('info-container-heading')
    // // pokemon id #
    // const pokemonId = document.createElement('span')
    // pokemonId.textContent = '#' + id
    // pokemonId.classList.add('pokemon-id')
    // infoContainerHeading.appendChild(pokemonId)
    // // pokemon name
    // const pokemonName = document.createElement('h3')
    // pokemonName.textContent = name
    // pokemonName.classList.add('pokemon-name')
    // infoContainerHeading.appendChild(pokemonName)
    // // adding headinto info container
    // infoContainer.appendChild(infoContainerHeading)
    // // adding type content div
    // const infoContainerType = document.createElement('div')
    // infoContainerType.classList.add('info-container-types')
    // // pokemon primary and secondary type
    // const pokemonPrimaryType = document.createElement('span')
    // pokemonPrimaryType.textContent = fistType
    // pokemonPrimaryType.classList.add('text-info')
    // infoContainerType.appendChild(pokemonPrimaryType)
    // const pokemonSecondaryType = document.createElement('span')
    // pokemonSecondaryType.textContent = secondType
    // pokemonSecondaryType.classList.add('text-info')
    // infoContainerType.appendChild(pokemonSecondaryType)
    // // adding type info to the info container
    // infoContainer.appendChild(infoContainerType)
    
    // we add the image container and the info container to the card
    modalContainer.appendChild(modalImageContainer)
    // modal.appendChild(infoContainer)

    modal.appendChild(modalContainer)
    return modal
}

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
        case 'grasspoison':
            card.classList.add('grass-poison')
            break
        case 'fireflying':
            card.classList.add('fire-flying')
            break
        case 'bugflying':
            card.classList.add('bug-flying')
            break
        case 'bugpoison':
            card.classList.add('bug-poison')
            break
        case 'normalflying':
            card.classList.add('normal-flying')
            break
        case 'poisonground':
            card.classList.add('poison-ground')
            break
        case 'normalfairy':
            card.classList.add('normal-fairy')
            break
        case 'poisonflying':
            card.classList.add('poison-flying')
            break
        case 'buggrass':
            card.classList.add('bug-grass')
            break
        case 'waterfighting':
            card.classList.add('water-fighting')
            break
        case 'waterpoison':
            card.classList.add('water-poison')
            break
        case 'rockground':
            card.classList.add('rock-ground')
            break
        case 'waterpsychic':
            card.classList.add('water-psychic')
            break
        case 'electricsteel':
            card.classList.add('electric-steel')
            break
        case 'waterice':
            card.classList.add('water-ice')
            break
        case 'ghostpoison':
            card.classList.add('ghost-poison')
            break
        case 'grasspsychic':
            card.classList.add('grass-psychic')
            break
        case 'groundrock':
            card.classList.add('ground-rock')
            break
        case 'psychicfairy':
            card.classList.add('psychic-fairy')
            break
        case 'icepsychic':
            card.classList.add('ice-psychic')
            break
        case 'waterflying':
            card.classList.add('water-flying')
            break
        case 'rockwater':
            card.classList.add('rock-water')
            break
        case 'rockflying':
            card.classList.add('rock-flying')
            break
        case 'iceflying':
            card.classList.add('ice-flying')
            break
        case 'electricflying':
            card.classList.add('electric-flying')
            break
        case 'dragonflying':
            card.classList.add('dragon-flying')
            break
        case 'waterelectric':
            card.classList.add('water-electric')
            break
        case 'fairyflying':
            card.classList.add('fairy-flying')
            break
        case 'psychicflying':
            card.classList.add('psychic-flying')
            break
        case 'waterfairy':
            card.classList.add('water-fairy')
            break
        case 'grassflying':
            card.classList.add('grass-flying')
            break
        case 'waterground':
            card.classList.add('water-ground')
            break
        case 'darkflying':
            card.classList.add('dark-flying')
            break
        case 'normalpsychic':
            card.classList.add('normal-psychic')
            break
        case 'bugsteel':
            card.classList.add('bug-steel')
            break
        case 'groundflying':
            card.classList.add('ground-flying')
            break
        case 'steelground':
            card.classList.add('steel-ground')
            break
        case 'bugrock':
            card.classList.add('bug-rock')
            break
        case 'bugfighting':
            card.classList.add('bug-fighting')
            break
        case 'darkice':
            card.classList.add('dark-ice')
            break
        case 'firerock':
            card.classList.add('fire-rock')
            break
        case 'iceground':
            card.classList.add('ice-ground')
            break
        case 'waterrock':
            card.classList.add('water-rock')
            break
        case 'steelflying':
            card.classList.add('steel-flying')
            break
        case 'darkfire':
            card.classList.add('dark-fire')
            break
        case 'waterdragon':
            card.classList.add('water-dragon')
            break
        case 'rockdark':
            card.classList.add('rock-dark')
            break
        case 'psychicgrass':
            card.classList.add('psychic-grass')
            break
        case 'firefighting':
            card.classList.add('fire-fighting')
            break
        case 'watergrass':
            card.classList.add('water-grass')
            break
        case 'grassdark':
            card.classList.add('grass-dark')
            break
        case 'bugwater':
            card.classList.add('bug-water')
            break
        case 'grassfighting':
            card.classList.add('grass-fighting')
            break
        case 'bugground':
            card.classList.add('bug-ground')
            break
        case 'bugghost':
            card.classList.add('bug-ghost')
            break
        case 'darkghost':
            card.classList.add('dark-ghost')
            break
        case 'steelfairy':
            card.classList.add('steel-fairy')
            break
        case 'steelrock':
            card.classList.add('steel-rock')
            break
        case 'fightingpsychic':
            card.classList.add('fighting-psychic')
            break
        case 'waterdark':
            card.classList.add('water-dark')
            break
        case 'fireground':
            card.classList.add('fire-ground')
            break
        case 'grounddragon':
            card.classList.add('ground-dragon')
            break
        case 'rockpsychic':
            card.classList.add('rock-psychic')
            break
        case 'groundpsychic':
            card.classList.add('ground-psychic')
            break
        case 'rockgrass':
            card.classList.add('rock-grass')
            break
        case 'rockbug':
            card.classList.add('rock-bug')
            break
        case 'icewater':
            card.classList.add('ice-water')
            break
        case 'steelpsychic':
            card.classList.add('steel-psychic')
            break
        case 'dragonpsychic':
            card.classList.add('dragon-psychic')
            break
        case 'grassground':
            card.classList.add('grass-ground')
            break
        case 'watersteel':
            card.classList.add('water-steel')
            break
        case 'rocksteel':
            card.classList.add('rock-steel')
            break
        case 'ghostflying':
            card.classList.add('ghost-flying')
            break
        case 'poisondark':
            card.classList.add('poison-dark')
            break
        case 'dragonground':
            card.classList.add('dragon-ground')
            break
        case 'ghostdark':
            card.classList.add('ghost-dark')
            break
        case 'poisonbug':
            card.classList.add('poison-bug')
            break
        case 'poisonfighting':
            card.classList.add('poison-fighting')
            break
        case 'fightingsteel':
            card.classList.add('fighting-steel')
            break
        case 'grassice':
            card.classList.add('grass-ice')
            break
        case 'psychicfighting':
            card.classList.add('psychic-fighting')
            break
        case 'iceghost':
            card.classList.add('ice-ghost')
            break
        case 'electricghost':
            card.classList.add('electric-ghost')
            break
        case 'steeldragon':
            card.classList.add('steel-dragon')
            break
        case 'firesteel':
            card.classList.add('fire-steel')
            break
        case 'ghostdragon':
            card.classList.add('ghost-dragon')
            break
        case 'psychicfire':
            card.classList.add('psychic-fire')
            break
        case 'groundsteel':
            card.classList.add('ground-steel')
            break
        case 'normalwater':
            card.classList.add('normal-water')
            break
        case 'grounddark':
            card.classList.add('ground-dark')
            break
        case 'grassfairy':
            card.classList.add('grass-fairy')
            break
        case 'darkfighting':
            card.classList.add('dark-fighting')
            break
        case 'normalgrass':
            card.classList.add('normal-grass')
            break
        case 'waterghost':
            card.classList.add('water-ghost')
            break
        case 'bugelectric':
            card.classList.add('bug-electric')
            break
        case 'grasssteel':
            card.classList.add('grass-steel')
            break
        case 'ghostfire':
            card.classList.add('ghost-fire')
            break
        case 'groundelectric':
            card.classList.add('ground-electric')
            break
        case 'groundghost':
            card.classList.add('ground-ghost')
            break
        case 'darksteel':
            card.classList.add('dark-steel')
            break
        case 'darkdragon':
            card.classList.add('dark-dragon')
            break
        case 'bugfire':
            card.classList.add('bug-fire')
            break
        case 'steelfighting':
            card.classList.add('steel-fighting')
            break
        case 'rockfighting':
            card.classList.add('rock-fighting')
            break
        case 'dragonelectric':
            card.classList.add('dragon-electric')
            break
        case 'dragonfire':
            card.classList.add('dragon-fire')
            break
        case 'dragonice':
            card.classList.add('dragon-ice')
            break
        case 'firepsychic':
            card.classList.add('fire-psychic')
            break
        case 'normalground':
            card.classList.add('normal-ground')
            break
        case 'firenormal':
            card.classList.add('fire-normal')
            break
        case 'fightingdark':
            card.classList.add('fighting-dark')
            break
        case 'steelghost':
            card.classList.add('steel-ghost')
            break
        case 'darkpsychic':
            card.classList.add('dark-psychic')
            break
        case 'poisonwater':
            card.classList.add('poison-water')
            break
        case 'electricnormal':
            card.classList.add('electric-normal')
            break
        case 'rockdragon':
            card.classList.add('rock-dragon')
            break
        case 'rockice':
            card.classList.add('rock-ice')
            break
        case 'fightingflying':
            card.classList.add('fighting-flying')
            break
        case 'electricfairy':
            card.classList.add('electric-fairy')
            break
        case 'rockfairy':
            card.classList.add('rock-fairy')
            break
        case 'ghostgrass':
            card.classList.add('ghost-grass')
            break
        case 'flyingdragon':
            card.classList.add('flying-dragon')
            break
        case 'psychicghost':
            card.classList.add('psychic-ghost')
            break
        case 'firewater':
            card.classList.add('fire-water')
            break
        case 'grassghost':
            card.classList.add('grass-ghost')
            break
        case 'firedark':
            card.classList.add('fire-dark')
            break
        case 'fightingice':
            card.classList.add('fighting-ice')
            break
        case 'bugfairy':
            card.classList.add('bug-fairy')
            break
        case 'waterbug':
            card.classList.add('water-bug')
            break
        case 'poisonfire':
            card.classList.add('poison-fire')
            break
        case 'normalfighting':
            card.classList.add('normal-fighting')
            break
        case 'ghostground':
            card.classList.add('ghost-ground')
            break
        case 'firedragon':
            card.classList.add('fire-dragon')
            break
        case 'ghostfairy':
            card.classList.add('ghost-fairy')
            break
        case 'normaldragon':
            card.classList.add('normal-dragon')
            break
        case 'dragonfighting':
            card.classList.add('dragon-fighting')
            break
        case 'psychicsteel':
            card.classList.add('psychic-steel')
            break
        case 'rockpoison':
            card.classList.add('rock-poison')
            break
        case 'fightingghost':
            card.classList.add('fighting-ghost')
            break
        case 'poisondragon':
            card.classList.add('poison-dragon')
            break
        case 'fireghost':
            card.classList.add('fire-ghost')
            break
        case 'flyingsteel':
            card.classList.add('flying-steel')
            break
        case 'bugpsychic':
            card.classList.add('bug-psychic')
            break
        case 'rockfire':
            card.classList.add('rock-fire')
            break
        case 'grassdragon':
            card.classList.add('grass-dragon')
            break
        case 'flyingwater':
            card.classList.add('flying-water')
            break
        case 'electricpoison':
            card.classList.add('electric-poison')
            break
        case 'firebug':
            card.classList.add('fire-bug')
            break
        case 'darkfairy':
            card.classList.add('dark-fairy')
            break
        case 'darknormal':
            card.classList.add('dark-normal')
            break
        case 'icebug':
            card.classList.add('ice-bug')
            break
        case 'psychicnormal':
            card.classList.add('psychic-normal')
            break
        case 'electricdark':
            card.classList.add('electric-dark')
            break
        case 'electricdragon':
            card.classList.add('electric-dragon')
            break
        case 'electricice':
            card.classList.add('electric-ice')
            break
        case 'dragonghost':
            card.classList.add('dragon-ghost')
            break
        case 'darkgrass':
            card.classList.add('dark-grass')
            break
        default:
            card.classList.add('normal')
    }
}

