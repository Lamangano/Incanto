document.addEventListener('DOMContentLoaded', function () {
  const videos = [
    'https://www.youtube.com/embed/JlzMXWrwxcM?si=j21O2btyLkRjf0XD',
    'https://www.youtube.com/embed/huX_UBpn_JQ?si=pfOb_1snvcT5fy37',
    'https://www.youtube.com/embed/Ag6HQ7cwZ8g?si=CPqNEvkjKlTLgcNc',
    'https://www.youtube.com/embed/xVg7daj_RSE?si=3Ke-Q5UYhtpB1-iB',
    'https://www.youtube.com/embed/zY8rjVZYabo?si=upjuxYnA3J-2fasQ',
    'https://www.youtube.com/embed/_scyhkhAnSM?si=zNgN3oet7pRIvIZm',
    'https://www.youtube.com/embed/UD8eRneaU8s?si=IZTsVP_u7W_bifoo',
    'https://www.youtube.com/embed/eAJoQ3eXurM?si=zrBBZoN1CGMcOssZ',
    'https://www.youtube.com/embed/4hSx3fP18eo?si=c_3qf7pbYYRfXHlr',
  ];

  const images = [
    'IMG/1.jpg',
    'IMG/2.jpg',
    'IMG/3.jpg',
    'IMG/4.jpg',
    'IMG/5.jpg',
    'IMG/6.jpg',
    'IMG/7.jpg',
    'IMG/8.jpg',
    'IMG/9.jpg',
  ];

  const swiperWrapper = document.querySelector('.swiper-wrapper');

  videos.forEach(videoUrl => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<div class="slide-content" onclick="openVideo('${videoUrl}')"><iframe src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    swiperWrapper.appendChild(slide);
  });

  const imageSwiperWrapper = document.querySelector('.image-swiper .swiper-wrapper');

  images.forEach(imageUrl => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<img src="${imageUrl}" alt="Image" onclick="openModal('${imageUrl}')">`;
    imageSwiperWrapper.appendChild(slide);
  });

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20, // Ajusta el espacio entre los slides según tu preferencia
    loop: true,
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    touchEventsTarget: 'container', // Cambia el target de eventos táctiles a 'container'
  });

  const imageSwiper = new Swiper('.image-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  // Modal functionality
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeModal = document.getElementsByClassName('close')[0];

  window.openModal = function (src) {
    modal.style.display = 'block';
    modalImg.src = src;
  }

  closeModal.onclick = function () {
    modal.style.display = 'none';
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});

// Función para abrir el video en una ventana modal o como prefieras
function openVideo(videoUrl) {
  window.open(videoUrl, '_blank');
}
