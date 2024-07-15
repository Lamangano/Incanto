// script.js
document.addEventListener('DOMContentLoaded', function () {
  const videos = [
    'https://www.youtube.com/embed/JlzMXWrwxcM?si=j21O2btyLkRjf0XD',
    'https://www.youtube.com/embed/huX_UBpn_JQ?si=pfOb_1snvcT5fy37',
    'https://www.youtube.com/embed/Ag6HQ7cwZ8g?si=CPqNEvkjKlTLgcNc',
    'https://www.youtube.com/embed/xVg7daj_RSE?si=3Ke-Q5UYhtpB1-iB',
    'https://www.youtube.com/embed/5zq28UDpMvs?si=yXTFW6mZ2ZbQMzSi',
    'https://www.youtube.com/embed/_scyhkhAnSM?si=zNgN3oet7pRIvIZm',
    'https://www.youtube.com/embed/UD8eRneaU8s?si=IZTsVP_u7W_bifoo',
    'https://www.youtube.com/embed/eAJoQ3eXurM?si=zrBBZoN1CGMcOssZ',
    'https://www.youtube.com/embed/4hSx3fP18eo?si=c_3qf7pbYYRfXHlr',
  ];

  const swiperWrapper = document.querySelector('.swiper-wrapper');

  videos.forEach(videoUrl => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    swiperWrapper.appendChild(slide);
  });

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
    }
  });
});
