// Data
const photoCategories = [
  { name: 'architecture', entries: 19 },
  { name: 'art', entries: 5 },
  { name: 'city', entries: 8 },
  { name: 'montagnes', entries: 25 },
  { name: 'musique', entries: 4 },
  { name: 'nature', entries: 14 },
  { name: 'voyages', entries: 30 },
]

const videoEntries = [
  {
    name: 'YOUR SMILE - Vadim Vernay // Clip 3"',
    role: 'Assistant Réalisateur',
    desc: "Responsable des ressources humaines et de la gestion de la production pour le projet de clip de l'artiste Amiénois Vadim Vernay, j'ai apporté mon soutien au réalisateur dans ses choix artistiques et sa direction d'acteur. En collaboration avec l'équipe d'image et d'éclairage, j'ai veillé à ce que le rendu esthétique soit en harmonie avec le découpage technique. Enfin, j'ai suivi la post-production en étroite collaboration avec le chef monteur jusqu'à l'achèvement final du projet.",
    platform: 'youtube',
    id: 'N-5UWwuwyj0',
    thumbnail: 'Vadim Vernay - Your Smile.webp',
  },
  {
    name: 'LE DIPLOMATE - Ala.ni // Clip',
    role: 'Producteur Éxécutif',
    desc: "En tant que producteur éxécutif, j'ai assuré le suivi des ressources humaines, de la gestion du budget, de production, et du suivi comptable. Il s'agit d'un tournage intégralement réalisé en studio. Le projet à réuni une quinzaine de personnes sur 2 jours afin de donner vie aux idées de la réalisatrice Ira.Roka",
    platform: 'youtube',
    id: 'qYtgsXXlbus',
    thumbnail: 'Le Diplomate.webp',
  },
  {
    name: 'LE PECHEUR ET LA FALAISE // Fiction 7"',
    role: 'Réalisateur',
    desc: "Ce projet est partis de l'idée de faire un film en 48H dans une ville imposée. La construction du scénario s'est faites de la rencontre des habitants, de cette rencontre est née un projet de fiction-musical mettant en avant le territoire et ses habitants.",
    platform: 'youtube',
    id: 'lDDxLOn9iA4',
    thumbnail: 'Le Pêcheur et La Falaise.webp',
  },
  {
    name: 'PORTRAIT D\'ARTISTE - STEPHANIE LEDOUX // Fiction 4"',
    role: 'Réalisateur',
    desc: "Ce projet fait partis d'une série initiée il y a quelques années dans le but de mettre en valeur le travail des artistes: principalement le travail manuel, le côté artisanal de l'art, le mouvement, le geste et le rapport à la matière. Cette série est en permanence en construction, des tournages sont prévus pour les années 2023 et 2024. D'autres portraits d'artiste sont disponible sur mon Viméo.",
    platform: 'vimeo',
    id: '358589429',
    thumbnail: 'StephanieLedoux.webp',
  },
  {
    name: 'LIVE SESSION - ANIMAL PEPPER // 4"',
    role: 'Directeur photo - Réalisateur',
    desc: "Cette captation fait partie des dernières réalisations des productions Celebration Days Records dont j'assure la réalisation depuis une dizaine d'années. La captation à été réalisée à deux. Je me suis occupé des lumières et du cadrage. La mise en valeur du lieu à été travaillée pour cette session.",
    platform: 'youtube',
    id: 'TNj8CTzZ930',
    thumbnail: 'Animal Pepper.webp',
  },
  // {
  //   name: 'HABITER LE MOUVEMENT // Film 70"',
  //   role: 'Réalisateur',
  //   desc: "Ce projet est mon premier long métrage documentaire ; il est né de ma rencontre avec une association d’architectes qui travaillent sur l’aspect social de l’architecture. Après 2 mois passés en Afrique du Sud dans un quartier informel de port Elizabeth, ce film raconte les lignes de vie des habitants ainsi que l'histoire du quartier qui s'est construit sur les passés individuels de chacun de ceux qui l'habitent. ",
  //   platform: 'vimeo',
  //   id: '562831822',
  //   thumbnail: 'Habiter Le Mouvement.webp',
  // },
  // {
  //   name: 'Celebration Days Records Off // Emission 50"',
  //   role: 'Producteur Éxécutif, Réalisateur',
  //   desc: "Cette émission est le fruit d'une adaptation à la crise Covid-19. Elle fait partie d'une série de trois épisodes d'une heure chacun. Il s'agit d'un festival numérique qui mélange performance LIVE, plateau télé, fausse pub, montage d'images anciennes, etc. Chaque artiste à performé un live devant un public, le tout filmé en plan séquence. Les invités discutent à propos de la thématique musicale. Le travail des associations locales est mise à l'honneur.",
  //   platform: 'youtube',
  //   id: 'F_b2BAnRAkI',
  //   thumbnail: 'Records Off.webp',
  // },
]

// Videos
function playerInit(video) {
  const playerDiv = document.querySelector('.playerDiv')
  const player = playerDiv.appendChild(document.createElement('div'))
  if (video) {
    player.setAttribute('class', 'player')
    player.setAttribute('data-plyr-provider', `${video.platform}`)
    player.setAttribute('data-plyr-embed-id', `${video.id}`)
    player.setAttribute('data-poster', `./img/thumbnails/${video.thumbnail}`)
    const playerInfos = playerDiv.appendChild(document.createElement('div'))
    playerInfos.classList.add('playerInfos')
    const playerH2 = playerInfos.appendChild(document.createElement('h2'))
    playerH2.innerText = video.name
    const playerH3 = playerInfos.appendChild(document.createElement('h3'))
    playerH3.innerText = `Rôle: ${video.role}`
    const playerDesc = playerInfos.appendChild(document.createElement('p'))
    playerDesc.innerText = video.desc
  } else {
    player.setAttribute('class', 'player')
    player.setAttribute('data-plyr-provider', videoEntries[0].platform)
    player.setAttribute('data-plyr-embed-id', videoEntries[0].id)
    player.setAttribute('data-poster', `./img/thumbnails/${videoEntries[0].thumbnail}`)
    const playerInfos = playerDiv.appendChild(document.createElement('div'))
    playerInfos.classList.add('playerInfos')
    const playerH2 = playerInfos.appendChild(document.createElement('h2'))
    playerH2.innerText = videoEntries[0].name
    const playerH3 = playerInfos.appendChild(document.createElement('h3'))
    playerH3.innerText = `Rôle: ${videoEntries[0].role}`
    const playerDesc = playerInfos.appendChild(document.createElement('p'))
    playerDesc.innerText = videoEntries[0].desc
  }
}
playerInit()

function initPlyr() {
  const players = Array.from(document.querySelectorAll('.player')).map((p) => {
    new Plyr(p, {
      controls: ['play-large', 'play', 'progress', 'mute', 'volume', 'fullscreen'],
      youtube: { noCookie: true, showinfo: 0, modestbranding: 0 },
    })
  })
}
initPlyr()

const thumbnailArray = []
videoEntries.forEach((video) => {
  const videoThumbnail = document.createElement('img')
  videoThumbnail.src = `./img/thumbnails/${video.thumbnail}`
  videoThumbnail.classList.add('thumbnail')
  thumbnailArray.push(videoThumbnail)
  videoThumbnail.addEventListener('click', () => {
    thumbnailArray.forEach((i) => {
      i.classList.remove('selected')
    })
    videoThumbnail.classList.add('selected')

    const player = document.querySelector('.plyr')
    const playerInfos = document.querySelector('.playerInfos')

    toggleElements(player, 'hidden')
    toggleElements(playerInfos, 'hidden')
    setTimeout(() => {
      player.remove()
      playerInfos.remove()
      playerInit(video)
      initPlyr()
      const plyr = document.querySelector('.plyr')
      toggleElements(plyr, 'hidden')
      toggleElements(plyr, 'hidden', 750)
      const newPlayerInfos = document.querySelector('.playerInfos')
      toggleElements(newPlayerInfos, 'hidden')
      toggleElements(newPlayerInfos, 'hidden', 750)
    }, 500)
  })
  document.querySelector('.suggestions').appendChild(videoThumbnail)
})

// Photography
function createGallery() {
  const gallery = document.getElementById('photography').appendChild(document.createElement('div'))
  gallery.classList.add('photoGallery')
  toggleElements(gallery, 'hidden')

  photoCategories.forEach((category) => {
    const categoryDiv = gallery.appendChild(document.createElement('div'))
    const categoryImg = categoryDiv.appendChild(document.createElement('img'))
    const categoryDesc = categoryDiv.appendChild(document.createElement('p'))
    categoryImg.src = `./img/thumbnails/${category.name}.webp`
    categoryDesc.innerText = category.name

    categoryDiv.addEventListener('click', () => {
      toggleElements(gallery, 'hidden')
      setTimeout(() => {
        gallery.remove()
        const swiperDiv = createSwiperDiv()
        closeBTN(swiperDiv)
        populateSwiperWrapper(swiperDiv, category)
        const swiper = initSwiper(swiperDiv)
        toggleElements(swiperDiv, 'hidden')
      }, 500)
    })
  })
  toggleElements(gallery, 'hidden', 250)
}

function toggleElements(element, className, timeout) {
  if (timeout) {
    setTimeout(() => element.classList.toggle(className), timeout)
  } else {
    element.classList.toggle(className)
  }
}

function createSwiperDiv() {
  const swiperDiv = document
    .getElementById('photography')
    .appendChild(document.createElement('div'))
  swiperDiv.classList.toggle('hidden')
  swiperDiv.classList.add('swiper')

  const swiperWrapper = swiperDiv.appendChild(document.createElement('div'))
  swiperWrapper.classList.add('swiper-wrapper')

  const swiperNavPrev = swiperDiv.appendChild(document.createElement('div'))
  swiperNavPrev.classList.add('swiper-button-prev')

  const swiperNavNext = swiperDiv.appendChild(document.createElement('div'))
  swiperNavNext.classList.add('swiper-button-next')

  const swiperPagination = swiperDiv.appendChild(document.createElement('div'))
  swiperPagination.classList.add('swiper-pagination')

  return swiperDiv
}

function populateSwiperWrapper(swiperDiv, category) {
  const { name, entries } = category
  const swiperWrapper = swiperDiv.querySelector('.swiper-wrapper')

  for (let i = 1; i <= entries; i++) {
    const swiperSlide = swiperWrapper.appendChild(document.createElement('div'))
    swiperSlide.classList.add('swiper-slide')

    const swiperIMG = swiperSlide.appendChild(document.createElement('img'))
    swiperIMG.src = `./img/photography/${name}/${i < 10 ? '0' : ''}${i}.webp`
  }
}

function initSwiper(swiperDiv) {
  return new Swiper('.swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    freeMode: {
      enabled: true,
      sticky: true,
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
}

function closeBTN(target) {
  // Create SVG element
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', '0 0 12 12')
  svg.setAttribute('version', '1.1')

  // Create first line
  const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  line1.setAttribute('x1', '1')
  line1.setAttribute('y1', '11')
  line1.setAttribute('x2', '11')
  line1.setAttribute('y2', '1')
  line1.setAttribute('stroke', 'white')
  line1.setAttribute('stroke-width', '2')
  svg.appendChild(line1)

  // Create second line
  const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  line2.setAttribute('x1', '1')
  line2.setAttribute('y1', '1')
  line2.setAttribute('x2', '11')
  line2.setAttribute('y2', '11')
  line2.setAttribute('stroke', 'white')
  line2.setAttribute('stroke-width', '2')
  svg.appendChild(line2)

  // Append SVG element to target element
  target.appendChild(svg)

  // Click event
  svg.addEventListener('click', function () {
    toggleElements(target, 'hidden')
    setTimeout(function () {
      target.remove()
      createGallery()
    }, 501)
  })
}

createGallery()

// Typewriter effect
const h1Parent = document.querySelector('.heroOverlay')
const typewriter = h1Parent.appendChild(document.createElement('h1'))

const messages = ['ÉCRITURE', 'CONCEPTION', 'RÉALISATION']

let messageIndex = 0
let charIndex = 0
let isErasing = false
let eraseSpeed = 50

function typeWriter() {
  const currentMessage = messages[messageIndex]
  if (isErasing) {
    typewriter.textContent = currentMessage.substring(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isErasing = false
      messageIndex = (messageIndex + 1) % messages.length
      setTimeout(typeWriter, 250) // wait for x milliseconds before typing the next message
      return
    }
  } else {
    typewriter.textContent = currentMessage.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === currentMessage.length) {
      isErasing = true
      setTimeout(typeWriter, 500) // wait for x milliseconds before starting to erase
      return
    }
  }
  setTimeout(typeWriter, isErasing ? eraseSpeed : 150) // wait for the delay and call the function again
}

typeWriter()
