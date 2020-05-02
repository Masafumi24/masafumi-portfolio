$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

function choiceItem() {
  var popup = document.getElementById('choiceItem-popup');
  if(!popup) return;

  var blackBg = document.getElementById('choiceItem-black-bg');

  var blackBg = document.getElementById('choiceItem-black-bg');
  var closeBtn = document.getElementById('choiceItem-close-btn');
  var showBtn = document.getElementById('choiceItem-show-popup');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
choiceItem();

function furima() {
  var popup = document.getElementById('furima-popup');
  if(!popup) return;

  var blackBg = document.getElementById('furima-black-bg');

  var blackBg = document.getElementById('furima-black-bg');
  var closeBtn = document.getElementById('furima-close-btn');
  var showBtn = document.getElementById('furima-show-popup');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
furima();

function eachfashion() {
  var popup = document.getElementById('eachfashion-popup');
  if(!popup) return;

  var blackBg = document.getElementById('eachfashion-black-bg');

  var blackBg = document.getElementById('eachfashion-black-bg');
  var closeBtn = document.getElementById('eachfashion-close-btn');
  var showBtn = document.getElementById('eachfashion-show-popup');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
eachfashion();

