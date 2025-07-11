$(function () {

  const s_banner = new Swiper(".s_banner", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
  });

  const e_card = new Swiper(".e_card", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000,
    loop: true,
  });



});
/* 종료 */