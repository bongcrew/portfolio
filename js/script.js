$(function () {
  //대상을 변수에 저장
  const $btnTop = $('.btn-top');
  const $header = $('#header');
  // fullpage 초기화
  $('#fullpage').fullpage({
    // 1. 앵커 설정
    anchors: ['home', 'about', 'work', 'contact'],

    // navigation: true,

    // 2. menu 적용(인디케이터 커스텀)
    menu: '#myMenu',

    // 3. 필요 옵션 적용
    // 스크롤 속도 : 기본값 700
    scrollingSpeed: 700,

    // 고정시킬 요소
    fixedElements: '#header',

    // 영역 콘텐츠의 세로 정렬
    // verticalCentered: false,

    // 스크롤바 생성되게
    // scrollBar: false,

    // 큰 영역으로 이동할 때 상단에 철컥 붙게
    bigSectionsDestination: 'top',

    // 영역 로딩이 되고 나서
    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
      console.log('로딩된 후 :' + anchorLink, index, loadedSection);

      if (anchorLink === 'contact') {
        $btnTop.fadeIn();
      } else {
        $btnTop.hide();
      }
    },
    // 영역에서 떠날 때
    onLeave: function (index, nextIndex, direction) {
      var leavingSection = $(this);
      console.log('영역에서 떠날 때 :' + index, nextIndex, direction, leavingSection);

      // if (index !== 1 && direction === 'up')
      // if (index === 1) {
      //     $btnTop.fadeOut();
      //   }

      if (direction === 'down') {
        $header.addClass('hide');
      } else {
        $header.removeClass('hide');
      }
    },
  });

  // 처음에는 숨기고
  $btnTop.hide();

  // btn-top 버튼을 클릭했을 때
  $btnTop.on('click', function (e) {
    e.preventDefault();

    // fullpage 메서드 : 원하는 영역 이동
    $.fn.fullpage.moveTo(1);
  });

  //슬라이더 추가정보 -12/28
  const swiper = new Swiper('.mySlider', {
    loop: true,
    // autoplay: {
    //   delay: 2000,
    // },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 슬라이더와 연동되는 정보
    on: {
      slideChange: function () {
        const sIdx = this.realIndex;
        // console.log(this);

        const slideInfo = $('.slide-info li');
        slideInfo.removeClass('active');
        slideInfo.eq(sIdx).addClass('active');
      },
    },
  });
});

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
// });
