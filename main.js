import './style.css'

const toursList = [
  {
    id: 1,
    province: 'Granada',
    name: 'La Alpujarra Villages',
    price: 89,
    stars: 4,
    reviews: 60,
    seller: 'Discovering Spain',
    link: 'https://discoveringspain.net/granada/excursion/alpujarra-desde-granada/',
    image: '/tours/alpujarra-roca.jpg'
  },
  {
    id: 2,
    province: 'Seville',
    name: 'Sierra Morena',
    price: 150,
    stars: 4,
    reviews: 42,
    seller: 'Descubre Natura',
    link: 'https://www.descubrenatura.com/destinos-andalucia/sierra-norte-sevilla/',
    image: '/tours/sierra-morena.jpg'
  },
  {
    id: 3,
    province: 'Huelva',
    name: 'Odiel Sandflats Boat Trip',
    price: 27,
    stars: 4,
    reviews: 49,
    seller: 'Civitatis',
    link: 'https://www.civitatis.com/es/punta-umbria/paseo-barco-marismas-odiel-atardecer/',
    image: '/tours/odiel-boat-trip.jpeg'
  },
  {
    id: 4,
    province: 'Granada',
    name: 'Sierra Nevada Excursion',
    price: 120,
    stars: 3,
    reviews: 75,
    seller: 'Discovering Spain',
    link: 'https://discoveringspain.net/granada/excursiones/sierra-nevada-desde-granada/',
    image: '/tours/pampaneira_calle.jpg'
  },
  {
    id: 5,
    province: 'Granada',
    name: 'Alhambra Guided Tour',
    price: 120,
    stars: 5,
    reviews: 150,
    seller: 'Discovering Spain',
    link: 'https://discoveringspain.net/granada/tours/tour-guiado-privado-de-alhambra/',
    image: '/tours/Alhambra.jpg'
  },
  {
    id: 6,
    province: 'Cordoba',
    name: 'Medina Azahara',
    price: 16,
    stars: 5,
    reviews: 96,
    seller: 'Get your guide',
    link: 'https://www.getyourguide.es/cordoba-l1689/cordoba-tour-guiado-de-3-horas-de-medina-azahara-t121704/?ranking_uuid=24521440-aaae-4117-bb1e-06d53feba3d8/',
    image: '/tours/medina-azahara.jpg'
  },
  {
    id: 7,
    province: 'Granada',
    name: 'Gorafe Geopark',
    price: 125,
    stars: 4,
    reviews: 36,
    seller: 'Discovering Spain',
    link: 'https://discoveringspain.net/en/granada-en/day-trips/geopark-from-granada/',
    image: '/tours/gorafe.jpg'
  },
  {
    id: 8,
    province: 'Malaga',
    name: 'Pueblos Blancos and Ronda',
    price: 89,
    stars: 4,
    reviews: 54,
    seller: 'Descubre Natura',
    link: 'https://www.descubrenatura.com/pueblos-blancos-ronda/',
    image: '/tours/pueblos-blancos.jpg'
  },
  {
    id: 9,
    province: 'Huelva',
    name: 'Doñana National Park',
    price: 85,
    stars: 3,
    reviews: 60,
    seller: 'Descubre Natura',
    link: 'https://www.descubrenatura.com/destinos-andalucia/parque-nacional-donana/',
    image: '/tours/donana-np.jpg'
  },
  {
    id: 10,
    province: 'Malaga',
    name: 'Caminito del Rey',
    price: 105,
    stars: 5,
    reviews: 80,
    seller: 'Descubre Natura',
    link: 'https://www.descubrenatura.com/destinos-andalucia/caminito-del-rey/',
    image: '/tours/caminito.jpg'
  },
  {
    id: 11,
    province: 'Huelva',
    name: 'Aracena Caves and Riotinto',
    price: 99,
    stars: 3,
    reviews: 48,
    seller: 'Descubre Natura',
    link: 'https://www.descubrenatura.com/destinos-andalucia/sierra-aracena/',
    image: '/tours/cave-aracena.jpg'
  },
  {
    id: 12,
    province: 'Cordoba',
    name: 'Alcázar of Cordoba',
    price: 16,
    stars: 5,
    reviews: 30,
    seller: 'Get your guide',
    link: 'https://www.getyourguide.es/cordoba-l1689/alcazar-de-cordoba-ticket-y-tour-oficial-t135381/?ranking_uuid=e4b323dc-65dd-40b2-b677-446173d34f01',
    image: '/tours/alcazar-cordoba.jpg'
  },
  {
    id: 13,
    province: 'Seville',
    name: 'Alcazar of Seville',
    price: 51,
    stars: 5,
    reviews: 135,
    seller: 'Get your guide',
    link: 'https://www.getyourguide.com/seville-l48/small-group-exclusive-alcazar-tour-tickets-included-t491580/?ranking_uuid=ec08b656-e69e-4418-98ba-2bd225f268c0',
    image: '/tours/jardines-alcazar.jpg'
  },
  {
    id: 14,
    province: 'Cordoba',
    name: 'Cordoba Mosque',
    price: 27,
    stars: 5,
    reviews: 110,
    seller: 'Get your guide',
    link: 'https://www.getyourguide.es/cordoba-l1689/mezquita-catedral-de-cordoba-tour-guiado-de-2-horas-t131952/?ranking_uuid=8a85534e-8c68-49a6-9c11-32e96c5417a1',
    image: '/tours/cordoba-mezquita.jpg'
  },
  {
    id: 15,
    province: 'Seville',
    name: 'Seville Cathedral',
    price: 30,
    stars: 4,
    reviews: 60,
    seller: 'Get your guide',
    link: 'https://www.getyourguide.com/seville-l48/seville-cathedral-and-giralda-tower-tour-t77605/?ranking_uuid=0372db0e-aeae-44d5-8638-7421b16aff3a',
    image: '/tours/sevilla-catedral.jpg'
  },
  {
    id: 16,
    province: 'Seville',
    name: 'Sevilla City Tour',
    price: 75,
    stars: 5,
    reviews: 60,
    seller: 'Get your guide',
    link: 'https://www.getyourguide.com/seville-l48/seville-tapas-taverns-and-history-walking-tour-t240467/?ranking_uuid=a9bd169f-9bb9-4b89-836b-0b56e554db10',
    image: '/tours/torre-oro.jpg'
  },
  {
    id: 17,
    province: 'Granada',
    name: 'Albaicin and Sacromonte',
    price: 15,
    stars: 4,
    reviews: 68,
    seller: 'Civitatis',
    link: 'https://www.civitatis.com/es/granada/visita-albaicin-sacromonte/',
    image: '/tours/albaicin.jpeg'
  },
  {
    id: 18,
    province: 'Cordoba',
    name: 'Cordoba City Tour',
    price: 45,
    stars: 3,
    reviews: 36,
    seller: 'Civitatis',
    link: 'https://www.civitatis.com/es/cordoba/',
    image: '/tours/cordoba-romanbridge.jpg'
  },
  {
    id: 19,
    province: 'Seville',
    name: 'Plaza de España',
    price: 11,
    stars: 3,
    reviews: 54,
    seller: 'Civitatis',
    link: 'https://www.civitatis.com/es/sevilla/visita-guiada-parque-maria-luisa/',
    image: '/tours/plaza-esp-sevilla.jpg'
  },
  {
    id: 20,
    province: 'Seville',
    name: 'Italica Ruins',
    price: 42,
    stars: 4,
    reviews: 25,
    seller: 'Civitatis',
    link: 'https://www.civitatis.com/es/sevilla/excursion-italica/',
    image: '/tours/italica.jpg'
  }
]

const header = () => {
  const headerElement = document.createElement('header')

  const headerDiv = document.createElement('div')
  const logoDiv = document.createElement('div')
  const busLogo = document.createElement('img')
  const nameLogo = document.createElement('img')
  const menuBurguer = document.createElement('img')

  headerDiv.className = 'headerDiv'
  logoDiv.className = 'logoDiv'
  busLogo.src = '/bus.png'
  busLogo.className = 'bus'
  nameLogo.src = '/logo.png'
  nameLogo.className = 'logo'
  menuBurguer.className = 'menuBurguer'
  menuBurguer.src = '/menu-burger.png'

  logoDiv.append(busLogo)
  logoDiv.append(nameLogo)
  headerDiv.append(logoDiv)
  headerDiv.append(menuBurguer)
  headerElement.append(headerDiv)
  document.body.append(headerElement)
}

const main = () => {
  const mainElement = document.createElement('main')
  const cards = document.querySelectorAll('section')
  const filterClass = document.querySelector('.filter')
  const product = document.querySelector('.products')
  const filtersDiv = document.createElement('div')

  filterClass.classList.add('flex-container')
  filtersDiv.classList.add('filtersDiv', 'flex-container')
  product.classList.add('flex-container')

  cards.forEach(function (section) {
    mainElement.appendChild(section)
  })

  filterClass.append(filtersDiv)
  document.body.append(mainElement)
}

const printTours = (tours) => {
  const divCards = document.querySelector('.products')
  divCards.innerHTML = ''

  for (const tour of tours) {
    const tourLink = document.createElement('a')
    const divCard = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const province = document.createElement('p')
    const tourName = document.createElement('h3')
    const seller = document.createElement('p')
    const reviewStarPrice = document.createElement('div')
    const reviewStarDiv = document.createElement('div')
    const reviews = document.createElement('p')
    const starContainer = document.createElement('div')
    const price = document.createElement('p')

    for (let i = 0; i <= 4; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      if (tour.stars > i) {
        star.classList.add('fill-stars')
      }
      starContainer.append(star)
    }

    tourLink.href = tour.link
    tourLink.setAttribute('target', '_blank')
    divCard.classList.add('tour-card', 'flex-container')
    divImg.className = 'tour-img'
    img.src = tour.image
    province.className = 'province'
    province.innerText = tour.province
    tourName.innerText = tour.name
    seller.className = 'seller'
    seller.innerText = tour.seller
    reviewStarPrice.className = 'review-star-price'
    reviewStarDiv.className = 'review-star-div'
    reviews.className = 'reviews'
    reviews.innerText = `Reviews: ${tour.reviews}`
    starContainer.classList.add('stars', 'flex-container')
    price.className = 'price'
    price.innerText = `${tour.price} €`

    divCard.append(divImg)
    divImg.append(img)
    divCard.append(province)
    divCard.append(tourName)
    divCard.append(seller)
    reviewStarDiv.append(reviews)
    reviewStarDiv.append(starContainer)
    reviewStarPrice.append(reviewStarDiv)
    reviewStarPrice.append(price)
    divCard.append(reviewStarPrice)
    tourLink.append(divCard)

    divCards.append(tourLink)
  }
}

const applyFilters = () => {
  var toursByProvince = []
  var toursByPrice = []

  const checkButton = document.querySelector('#checkPrice')
  const userPrice = document.querySelector('#filterPrice')
  const provinceChosen = document.querySelector('#provinceOption')
  const selectedOption = provinceChosen.options[provinceChosen.selectedIndex]
  const selectedValue = selectedOption.value

  clearButton.onclick = () => {
    Promise.resolve()
      .then(() => {
        userPrice.value = ''
        provinceChosen.selectedIndex = 0
      })
      .then(() => {
        printTours(toursList)
      })
  }

  checkButton.onclick = () => {
    let priceValue = userPrice.value
    const newUserPrice = parseInt(priceValue)

    checkProvince()
    checkPrices(newUserPrice)

    var commonTours = toursByProvince.filter((obj1) => {
      return toursByPrice.some((obj2) => obj2.id === obj1.id)
    })

    if (toursByPrice.length !== 0) {
      printTours(commonTours)
    } else {
      printTours(toursByProvince)
    }
  }

  const checkPrices = (userPrice) => {
    toursByPrice.length = 0
    for (const tour of toursList) {
      if (userPrice > tour.price) {
        toursByPrice.push(tour)
      }
    }
  }

  const checkProvince = () => {
    toursByProvince.length = 0
    if (selectedValue === 'All provinces') {
      toursByProvince.push(...toursList)
    } else {
      for (const tour of toursList) {
        if (selectedValue === tour.province) {
          toursByProvince.push(tour)
        }
      }
    }
  }
}

const provinceFilter = () => {
  const getFiltersDiv = document.querySelector('.filtersDiv')
  const filterOneInstructions = document.createElement('p')
  const provinceFilterDiv = document.createElement('div')
  const provinceFilterTitle = document.createElement('p')
  const provinceFilterSelect = document.createElement('select')
  const provinceOption = document.createElement('option')

  filterOneInstructions.className = 'filterOneInstructions'
  filterOneInstructions.innerText = 'Filter by either province, price or both!'
  provinceFilterDiv.className = 'provinceFilterDiv'
  provinceFilterTitle.innerText = 'Select a province'
  provinceFilterSelect.className = 'provinceOption'
  provinceFilterSelect.setAttribute('id', 'provinceOption')
  provinceOption.innerText = 'All provinces'
  provinceFilterSelect.append(provinceOption)

  const PROVINCES = toursList.map(function (tours) {
    return tours.province
  })
  const uniqueProvinces = new Set(PROVINCES)

  uniqueProvinces.forEach(function (province) {
    const option = document.createElement('option')
    option.value = province
    option.text = province
    provinceFilterSelect.append(option)
  })

  provinceFilterSelect.addEventListener('change', () => {
    const provinceSelected = provinceFilterSelect.value
    applyFilters(provinceSelected)
  })

  provinceFilterDiv.append(provinceFilterTitle)
  provinceFilterDiv.append(provinceFilterSelect)
  getFiltersDiv.append(filterOneInstructions)
  getFiltersDiv.append(provinceFilterDiv)
}

const inputPriceFilter = () => {
  const getFiltersDiv = document.querySelector('.filtersDiv')
  const priceFilterDiv = document.createElement('div')
  const priceFilterTitle = document.createElement('p')
  const priceFilterInput = document.createElement('input')
  const buttonDiv = document.createElement('div')
  const checkPrice = document.createElement('button')
  const clearInput = document.createElement('button')

  priceFilterDiv.className = 'priceFilterDiv'
  priceFilterTitle.innerText = 'Set a max price €'
  priceFilterInput.type = 'number'
  priceFilterInput.value = ''
  priceFilterInput.placeholder = 'Choose a price'
  priceFilterInput.setAttribute('id', 'filterPrice')
  buttonDiv.className = 'buttonDiv'
  checkPrice.className = 'filterButton'
  checkPrice.id = 'checkPrice'
  checkPrice.innerText = 'check'
  clearInput.className = 'filterButton'
  clearInput.innerText = 'clear filters'
  clearInput.setAttribute('id', 'clearButton')

  priceFilterInput.addEventListener('change', () => {
    applyFilters()
  })

  checkPrice.addEventListener('touchstart', () => {
    checkPrice.style.backgroundColor = 'red'
    setTimeout(() => {
      checkPrice.style.backgroundColor = ''
    }, 500)
  })

  buttonDiv.append(checkPrice)
  buttonDiv.append(clearInput)
  priceFilterDiv.append(priceFilterTitle)
  priceFilterDiv.append(priceFilterInput)
  getFiltersDiv.append(priceFilterDiv)
  getFiltersDiv.append(buttonDiv)
}

const filterByProvider = (filterByProvider) => {
  const chosenProviderList = []
  const toursToPrint = []

  const providersDiv = document.querySelector('#providersDiv')
  const buttons = providersDiv.querySelectorAll('button')
  const chosenProvider = filterByProvider
  const classToCheck = 'selected'

  chosenProvider.classList.toggle('selected')

  chosenProvider.addEventListener('touchstart', () => {
    chosenProvider.classList.toggle('selected')
  })

  //!------------------------------------------

  buttons.forEach((button) => {
    if (button.classList.contains(classToCheck)) {
      chosenProviderList.push(button.value)
    }
  })

  for (const tour of toursList) {
    if (chosenProviderList.includes(tour.seller)) {
      toursToPrint.push(tour)
    }
  }

  if (toursToPrint == 0) {
    printTours(toursList)
  } else {
    printTours(toursToPrint)
  }
}

const providersFilter = () => {
  const filter = document.querySelector('.filter')
  const providersDiv = document.createElement('div')
  const providersTitle = document.createElement('p')
  const providersInstructions = document.createElement('p')

  providersDiv.classList.add('providersDiv', 'flex-container')
  providersDiv.setAttribute('id', 'providersDiv')
  providersTitle.innerText = 'Filter tours by provider'
  providersTitle.className = 'providersTitle'
  providersInstructions.innerText =
    'Click one or more provider to select and compare. Click them again to unselect'
  providersInstructions.className = 'instructions'

  const provider = toursList.map(function (tours) {
    return tours.seller
  })
  const uniqueProviders = new Set(provider)

  providersDiv.append(providersTitle)
  providersDiv.append(providersInstructions)

  uniqueProviders.forEach(function (provider) {
    const seller = document.createElement('button')
    seller.value = provider
    seller.innerText = provider
    seller.className = 'provider'
    seller.addEventListener('click', () => {
      const providerSelected = seller
      filterByProvider(providerSelected)
    })

    providersDiv.append(seller)
  })

  filter.append(providersDiv)
}

const clearfilters = () => {
  const getFiltersDiv = document.querySelector('.filtersDiv')
  const getProviderDiv = document.querySelector('#providersDiv')
  const getProvidersButtons = document.querySelectorAll('.provider')
  const dropdownMenu = document.querySelector('#provinceOption')
  const priceInput = document.querySelector('#filterPrice')

  getFiltersDiv.addEventListener('click', () => {
    getProvidersButtons.forEach((btn) => btn.classList.remove('selected'))
  })

  getProviderDiv.addEventListener('click', () => {
    getProvidersButtons.forEach((button) => {
      if (button.classList.contains('selected')) {
        dropdownMenu.value = 'All provinces'
        priceInput.value = ''
      }
    })
  })
}

const mobileFiltersHide = () => {
  const filters = document.querySelector('.filter')
  const menuBurguer = document.querySelector('.menuBurguer ')

  let isFilterVisible = true
  filters.style.top = '-80%'

  menuBurguer.onclick = () => {
    isFilterVisible = !isFilterVisible
    filters.style.top = isFilterVisible ? '6%' : '-80%'
  }
}

header()
main()
mobileFiltersHide()
provinceFilter()
inputPriceFilter(printTours)
providersFilter()
printTours(toursList)
clearfilters()
