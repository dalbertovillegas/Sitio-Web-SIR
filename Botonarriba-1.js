$(window).scroll(function() {
    var position =$(this).scrollTop();
    if (position > 300) {
    $(".button-up").fadeIn('slow');
    } else {
    $(".button-up").fadeOut('slow');
    }
});