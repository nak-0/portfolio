$(function () {
  const gra_slide = new Swiper(".gra_slide", {
    slidesPerView: 1,
    // 반응형 슬라이드 옵션
    breakpoints:
    {
      768:
      {
        // 가로해상도가 768px 이상
        slidesPerView: 2,
      },
      1200:
      {
        // 가로해상도가 1200px 이상
        slidesPerView: 3,
      },
    },
    centeredSlides: true,
    loop: true,
    speed: 1000,
    spaceBetween: 20, // 슬라이드 간격
    autoplay:
    {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },

  });
  //aos 초기화
  AOS.init({
    duration: 2000,
  });

  //2차 메뉴
  $(".mgnb_wrap").hide();
  $(".btn_ham").click(function () {
    $(".mgnb_wrap").slideToggle();
  });

  $(".btn_close").click(function () {
    $(".mgnb_wrap").slideToggle();
  });

  $(".mgnb>li>a").click(function () {
    $(".mgnb_wrap").fadeOut(300);
  });

  //연결링크 드르륵 내려가기
  $("a[href^='#']").click(function () {
    event.preventDefault();  // 기본 a링크 동작 방지
    let target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top }, 500);
  });
  //br 숨기기
  $(".hide br:nth-of-type(2)").addClass("hide-br");



}); /* 시작설정 */