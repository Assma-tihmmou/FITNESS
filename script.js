$(window).scroll(function(){
    var scroll=$(window).scrollTop();
    if(scroll>=290)
    {
        document.querySelector(".navbar").style.opacity="1";
    }
    else
    {
        document.querySelector(".navbar").style.opacity="0";
    }
});
$('.nav-link, .btn-ghost').click(function() {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300 );
        return false;
      }
    }
    
  }); 

  $(".navbar li a").click(function() {
    $(".navbar li a").parent().removeClass("actives");
    $(this).parent().addClass("actives")
})
$(window).scroll(function() {
    var scroll  = $(window).scrollTop();
    if (scroll >= 0 && scroll <= 433) {
        $("#Home1").parent().addClass("actives")
    } 
   else {
      $("#Home1").parent().removeClass("actives")
   }
  })
  $(window).scroll(function() {
      var scroll  = $(window).scrollTop();
      if (scroll >= 434 && scroll <= 1100) {
          $("#About1").parent().addClass("actives")
      } 
     else {
        $("#About1").parent().removeClass("actives")
     }
    })
    $(window).scroll(function() {
      var scroll  = $(window).scrollTop();
      if (scroll >= 1401 && scroll <= 2100) {
          $("#INFO1").parent().addClass("actives")
      } 
     else {
        $("#INFO1").parent().removeClass("actives")
     }

    })
    $(window).scroll(function() {
      var scroll  = $(window).scrollTop();
      if (scroll >= 2101 ) {
          $("#CONTACT1").parent().addClass("actives")
      } 
     else {
        $("#CONTACT1").parent().removeClass("actives")
     }
    })
  