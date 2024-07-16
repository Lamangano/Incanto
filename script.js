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

  const swiperWrapper = document.querySelector('.swiper-wrapper');

  videos.forEach(videoUrl => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<a href="#" onclick="openVideo('${videoUrl}'); return false;"><iframe src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>`;
    swiperWrapper.appendChild(slide);
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
    },
    touchEventsTarget: 'container', // Cambia el target de eventos táctiles a 'container'
  });

  // Desactiva los eventos de clic en el iframe para que no se abra el video
  swiper.on('beforeInit', function () {
    swiper.$wrapperEl.off('click');
  });

  // Activa los eventos de arrastre en todo el swiper-slide excepto en el iframe
  swiper.on('sliderMove', function (swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const isIframeClicked = activeSlide.querySelector('iframe') && activeSlide.querySelector('iframe').matches(':hover');
    swiper.allowSlideNext = !isIframeClicked;
    swiper.allowSlidePrev = !isIframeClicked;
  });
});

// Función para abrir el video en una ventana modal o como prefieras
function openVideo(videoUrl) {
  window.open(videoUrl, '_blank');
}
