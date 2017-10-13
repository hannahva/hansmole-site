$(document).ready(function() {

  $('.dropdown').hover(
    function() {
      $(this).children('ul.sub-menu').slideDown(200);
    },
    function() {
      $('ul.sub-menu').mouseleave(
        function(){
          $(this).slideUp(200);
        })
    }
  );

});