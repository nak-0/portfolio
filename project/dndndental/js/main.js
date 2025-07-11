// 문서 준비 이벤트
$(function () {

  const visual_list = new Swiper(".visual_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    loop: true,
  });

  const dental_list = new Swiper(".dental_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    loop: true,
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },

  });

  const review_list = new Swiper(".review_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    loop: true,
    slidesPerView: 2.5, // 한 슬라이드에 보여줄 갯수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true,
    breakpoints: {
      768: {
        // 가로해상도가 768px 이상
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        // 가로해상도가 1200px 이상
        slidesPerView: 4,
        spaceBetween: 50,
        centeredSlides: false,
      },
    },
  });

});/* 문서 준비 이벤트 끝 */