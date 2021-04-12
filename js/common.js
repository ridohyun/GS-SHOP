$(document).ready(function() {
  preventDefault();
  headerEvent();
});

function preventDefault() {
  $('a[href="#"]').on('click', function(e) {
    e.preventDefault();
  });
}

function headerEvent() {
  // 마우스 고려
  $('#gnb > ul > li > a').on('mouseenter focus', function() {
    $('#header').addClass('open');
  });
  $('#header').on('mouseleave', function() {
    $('#header').removeClass('open');
  });

  // 키보드 고려
  $('#gnb').on('focusin', function() {
    $('#header').addClass('open');
  });
  $('#gnb').on('focusout', function() {
    $('#header').removeClass('open');
  });

  // 모바일 navigation
  $('#header #menu-m').on('click', function() {
    $('#wrapper').addClass('open');
  });
  $('#top-mobile .close').on('click', function() {
    $('#wrapper').removeClass('open');
  });

  $('.scroll.mobile > ul > li').on('focusin', function() {
    $(this).find('> a').trigger('click');
  });
  $('.scroll.mobile > ul > li').on('click', function() {
    $('.scroll.mobile > ul > li').removeClass('on');
    $(this).addClass('on');
  });

  $('.scroll.mobile > ul > li > a').on('click', function(e) {
    e.preventDefault(); 
  });

  $('#info-mobile > a:last-child').on('focusout', function() {
    $('a.close.mobile').focus();
  });

  // 상단 우측 언어설정 
  $('#top-menu > li.lang').on('click', function() {
    $(this).toggleClass('on');
  });
}
