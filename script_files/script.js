$(document).ready(function(){

  $('.videos img').click(function(){

      $(this).addClass('active').siblings().removeClass('active');

      var src = $(this).attr('src');
      $('.main-videoX img').attr('src',src);
  });
});


window.onload = function() {
  setTimeout(() => document.getElementById('image1').classList.add('visible'), 500);
  setTimeout(() => document.getElementById('image2').classList.add('visible'), 1000);
  setTimeout(() => document.getElementById('image3').classList.add('visible'), 1500);
};