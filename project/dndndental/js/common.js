// 문서 준비 이벤트
$(function () {

  //depth2
  $(".gnb>li").hover(function () {
    $(this).find(".depth2").stop().slideToggle();
  });

  // 모바일 메뉴
  $(".ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
  });


  //모바일 2차메뉴
  $(".mgnb > li").click(function () {
    $(this).children(".mdepth2").slideDown();
    $(this).siblings().children(".mdepth2").slideUp();
  });

});/* 문서 준비 이벤트 끝 */