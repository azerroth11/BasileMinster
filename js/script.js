const body = document.getElementsByClassName('photographyBody')[0]
const photoCategories = [
  { name: 'architecture', entries: 19 },
  { name: 'art', entries: 5 },
  { name: 'city', entries: 8 },
  { name: 'mountains', entries: 24 },
  { name: 'musique', entries: 4 },
  { name: 'nature', entries: 12 },
  { name: 'people', entries: 15 },
  { name: 'road', entries: 14 },
]

function createGallery() {
  const gallery = body.insertBefore(
    document.createElement('div'),
    document.getElementById('footer')
  )
  gallery.classList.add('photoGallery')
  photoCategories.forEach((category) => {
    const categoryDiv = gallery.appendChild(document.createElement('div'))
    categoryDiv.addEventListener('click', function () {
      gallery.classList.toggle('hidden')
      setTimeout(function () {
        gallery.remove()
        const swiperDiv = body.insertBefore(
          document.createElement('div'),
          document.getElementById('footer')
        )
        swiperDiv.classList.add('swiper')
        const swiperWrapper = swiperDiv.appendChild(document.createElement('div'))
        swiperWrapper.classList.add('swiper-wrapper')
        function populate() {
          for (let i = 1; i <= category.entries; i++) {
            const swiperSlide = swiperWrapper.appendChild(document.createElement('div'))
            swiperSlide.classList.add('swiper-slide')
            if (i < 10) {
              const swiperIMG = swiperSlide.appendChild(document.createElement('img'))
              swiperIMG.src = `./img/photography/${category.name}/${category.name}0${[i]}.webp`
            } else {
              const swiperIMG = swiperSlide.appendChild(document.createElement('img'))
              swiperIMG.src = `./img/photography/${category.name}/${category.name}${[i]}.webp`
            }
          }
        }
        populate()
        const swiperNavPrev = swiperDiv.appendChild(document.createElement('div'))
        swiperNavPrev.classList.add('swiper-button-prev')
        const swiperNavNext = swiperDiv.appendChild(document.createElement('div'))
        swiperNavNext.classList.add('swiper-button-next')
        const swiperPagination = swiperDiv.appendChild(document.createElement('div'))
        swiperPagination.classList.add('swiper-pagination')
        // Swiper init
        const swiper = new Swiper('.swiper', {
          slidesPerView: 'auto',
          centeredSlides: true,
          grabCursor: true,
          rewind: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        })
      }, 500)
    })
    const categoryImg = categoryDiv.appendChild(document.createElement('img'))
    categoryImg.src = `./img/thumbnails/${category.name}.webp`
    const categoryDesc = categoryDiv.appendChild(document.createElement('p'))
    categoryDesc.innerText = category.name
  })
}

createGallery()
