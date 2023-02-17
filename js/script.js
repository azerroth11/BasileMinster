function initPlyr() {
  const players = Array.from(document.querySelectorAll('.player')).map((p) => {
    new Plyr(p, {
      controls: ['play-large', 'play', 'progress', 'mute', 'volume', 'fullscreen'],
      youtube: { noCookie: true, showinfo: 1, modestbranding: 0 },
    })
  })
}
initPlyr()

// Data
const photoCategories = [
  { name: 'architecture', entries: 19 },
  { name: 'art', entries: 5 },
  { name: 'city', entries: 8 },
  { name: 'montagnes', entries: 24 },
  { name: 'musique', entries: 4 },
  { name: 'nature', entries: 12 },
  { name: 'people', entries: 15 },
  { name: 'road', entries: 14 },
]

const videoEntries = [
  {
    name: "Portraits d'artistes: Stéphanie Ledoux",
    role: 'Réalisateur',
    desc1:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum porro ipsum dolor sit amet consectetur, adipisicing elit consectetur praesentium nemo magni blanditiis illo ipsum id assumenda molestias?',
    platform: 'vimeo',
    id: '358589429',
    thumbnail: 'StephanieLedoux.webp',
  },
  {
    name: 'Vadim Vernay - How',
    role: 'Assistant-réalisateur',
    desc1:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum porro ipsum dolor sit amet consectetur, adipisicing elit consectetur praesentium nemo magni blanditiis illo ipsum id assumenda molestias?',
    platform: 'youtube',
    id: 'YC0mKiASfSM',
    thumbnail: 'Vadim Vernay - How.webp',
  },
  {
    name: 'Animal Pepper ► "Thérèse" • Live Session',
    role: 'Réalisateur',
    desc1:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum porro ipsum dolor sit amet consectetur, adipisicing elit consectetur praesentium nemo magni blanditiis illo ipsum id assumenda molestias?',
    platform: 'youtube',
    id: 'TNj8CTzZ930',
    thumbnail: 'Animal Pepper.webp',
  },
  {
    name: "Portraits d'artistes: Mélanie Jane Frey",
    role: 'Réalisateur',
    desc1:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum porro ipsum dolor sit amet consectetur, adipisicing elit consectetur praesentium nemo magni blanditiis illo ipsum id assumenda molestias?',
    platform: 'vimeo',
    id: '438928242',
    thumbnail: 'MelanieJaneFrey.webp',
  },
  {
    name: 'Art en devanture',
    role: 'Réalisateur',
    desc1:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum porro ipsum dolor sit amet consectetur, adipisicing elit consectetur praesentium nemo magni blanditiis illo ipsum id assumenda molestias?',
    platform: 'vimeo',
    id: '665658821/d8e268c184',
    thumbnail: 'Art en Devanture.webp',
  },
]

// Video
const suggestions = document.querySelector('.suggestions')

videoEntries.forEach((video) => {
  const videoThumbnail = suggestions.appendChild(document.createElement('img'))
  videoThumbnail.src = `./img/thumbnails/${video.thumbnail}`
  videoThumbnail.addEventListener('click', () => {
    const player = document.querySelector('.plyr')
    const playerInfos = document.querySelector('.playerInfos')
    toggleElements(player, 'hidden')
    toggleElements(playerInfos, 'hidden')
    setTimeout(() => {
      player.remove()
      playerInfos.remove()
      const playerDiv = document.querySelector('.playerDiv')
      const playerNew = playerDiv.appendChild(document.createElement('div'))
      playerNew.classList.add('player')
      playerNew.setAttribute('data-plyr-provider', `${video.platform}`)
      playerNew.setAttribute('data-plyr-embed-id', `${video.id}`)
      playerNew.setAttribute('data-poster', `./img/thumbnails/${video.thumbnail}`)
      const playerInfosNew = playerDiv.appendChild(document.createElement('div'))
      playerInfosNew.classList.add('playerInfos')
      const playerInfosh1 = playerInfosNew.appendChild(document.createElement('h1'))
      playerInfosh1.innerText = video.name
      const playerInfosh3 = playerInfosNew.appendChild(document.createElement('h3'))
      playerInfosh3.innerText = `Rôle: ${video.role}`
      const playerInfosDesc1 = playerInfosNew.appendChild(document.createElement('p'))
      playerInfosDesc1.innerText = video.desc1
      initPlyr()
      const plyr = document.querySelector('.plyr')
      toggleElements(plyr, 'hidden')
      toggleElements(plyr, 'hidden', 500)
      toggleElements(playerInfosNew, 'hidden')
      toggleElements(playerInfosNew, 'hidden', 500)
    }, 500)
  })
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
    swiperIMG.src = `./img/photography/${name}/${name}${i < 10 ? '0' : ''}${i}.webp`
  }
}

function initSwiper(swiperDiv) {
  return new Swiper('.swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    mousewheel: {
      forceToAxis: false,
    },
    preventInteractionOnTransition: true,
    freeMode: {
      enabled: true,
      sticky: true,
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

// Links underline
const observerVideos = document.getElementById('observerVideos')
const observerPhotos = document.getElementById('observerPhotos')
const observerAbout = document.getElementById('observerAbout')
const observerContact = document.getElementById('observerContact')

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth

  // Check if the element is at least 25% visible in the viewport
  return (
    rect.top >= -rect.height / 4 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight + rect.height / 4 &&
    rect.right <= windowWidth
  )
}

window.addEventListener('scroll', () => {
  if (isElementInViewport(document.getElementById('videos'))) {
    observerVideos.classList.add('active')
  } else {
    observerVideos.classList.remove('active')
  }

  if (isElementInViewport(document.getElementById('photography'))) {
    observerPhotos.classList.add('active')
  } else {
    observerPhotos.classList.remove('active')
  }

  if (isElementInViewport(document.getElementById('about'))) {
    observerAbout.classList.add('active')
  } else {
    observerAbout.classList.remove('active')
  }

  if (isElementInViewport(document.getElementById('contact'))) {
    observerContact.classList.add('active')
  } else {
    observerContact.classList.remove('active')
  }
})
