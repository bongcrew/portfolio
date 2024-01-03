$(function () {
  // 대상을 변수에 저장
  const $popup = $('.popup');
  const $btnClose = $('.btn-close');
  const $dim = $('.dim');

  $('.about-contents a').on('click', (e) => {
    e.preventDefault();

    $dim.fadeIn();

    // .animate({옵션}, 지속시간, 콜백함수-끝난후의 동작)
    $popup.animate(
      {
        top: '50%',
        opacity: 1,
      },
      300
      // () => {
      //   alert('창이 나왔삼!');
      // }
    );
  });

  // btnClose를 클릭하면 팝업창이 닫히게
  $btnClose.on('click', () => {
    $popup.animate(
      {
        top: '-100%',
        opacity: 0,
      },
      300,
      () => {
        $dim.fadeOut();
      }
    );
  });
  // 로딩!!시작
  const $window = $(window);
  const $loading = $('.loading');

  // 로딩이 완료되면 (Load)
  $window.on('load', function () {
    // 너무 빨리 사라지므로 조금있다가 사라지게끔
    // setTimeout(동작, 시간);
    setTimeout(function () {
      $loading.fadeOut();
    }, 1000);
  });
  // 1초후에 loading요소 지우기
  // setTimeout(function () {
  //   $target.remove();
  // }, 3000);

  //대상을 변수에 저장
  const $btnTop = $('.btn-top');
  const $header = $('#header');
  const $nav = $('.nav');
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

  // 햄버거 메뉴 설정
  const $btnMenu = $('.btn-menu');
  const $allMenu = $('.all-menu');
  const $active = 'active';
  const $closeMenu = $('.btn-close-menu');
  // 공통의 동작을 함수로 정의
  function slideMenu(pos) {
    $allMenu.animate(
      {
        right: pos,
      },
      350
    );
  }
  // $btnMenu 클릭했을 때
  $btnMenu.on('click', function (e) {
    slideMenu('0%');
  });
  // $closeMenu 클릭했을 때
  $closeMenu.on('click', function (e) {
    slideMenu('-100%');
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
