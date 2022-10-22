console.log("please work I am literally begging you");



$("nav li").hover(
    function() {
      $(this).addClass("hover");
    }, function() {
      $( this ).removeClass("hover");
    }
  );

  $(".button").hover(
    function() {
      $(this).addClass("buttonHover");
    }, function() {
      $( this ).removeClass("buttonHover");
    }
  );