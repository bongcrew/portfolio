$(function () {
  // fullpage 초기화
  $('#fullpage').fullpage({
    // 1. 앵커 설정
    anchors: ['home', 'about', 'work', 'contact'],
    // navigation: true,

    // 2. menu 적용(인디케이터 커스텀)
    /* menu: '#myMenu', */

    // 3. 필요 옵션 적용
    // 스크롤 속도 : 기본값 700
    scrollingSpeed: 700,

    // 고정시킬 요소
    /* fixedElements: '#header', */

    // 영역 콘텐츠의 세로 정렬
    verticalCentered: false,

    // 스크롤바 생성되게
    scrollBar: false,

    // 큰 영역으로 이동할 때 상단에 철컥 붙게
    bigSectionsDestination: 'top',

    // 영역 로딩이 되고 나서
    /*  afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
      console.log('로딩된 후 :' + anchorLink, index, loadedSection);

      if (anchorLink === 'sec4') {
        $btnTop.fadeIn();
      }

      // 두번째 영역에서는 자동 스크롤 취소
      if (anchorLink === 'sec2') {
        $.fn.fullpage.setAutoScrolling(false);
      } else {
        $.fn.fullpage.setAutoScrolling(true);
      }
    }, */
  });

  // 슬라이더 시작
  // const topSlider = new Swiper('.top-slider', {
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },

  // 페이지네이션
  // pagination: {
  //   el: '.top-slider .swiper-pagination',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.top-slider .swiper-button-next',
  //   prevEl: '.top-slider .swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.top-slider .swiper-scrollbar',
  // },

  // 로딩!!시작
  //   const $window = $(window);
  //   const $body = $('body');
  //   const $loading = `<div class="loading">
  //   <div class="spinner"></div>
  //   <div class="lds-heart"><div></div></div>
  // </div>`;

  // body 마지막 부분에 집어넣기
  // $body.append($loading);
  // const $target = $('.loading');
  // 로딩이 완료되면 (Load)
  // $window.on('load', function () {
  // 너무 빨리 사라지므로 조금있다가 사라지게끔
  // setTimeout(동작, 시간)
  // setTimeout(function () {
  //   $target.fadeOut();

  // 1초후에 loading요소 지우기
  //   setTimeout(function () {
  //     $target.remove();
  //   }, 1000);
  // }, 1000);
});
