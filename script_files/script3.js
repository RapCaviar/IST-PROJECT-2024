$(document).ready(function(){

  $('.videos img').click(function(){

      $(this).addClass('active').siblings().removeClass('active');

      var src = $(this).attr('src');
      $('.main-videoX img').attr('src',src);
  });
});