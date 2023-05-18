$(function(){
    $('#carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });

    $(".menu-hamburguer").click(function(){
        $("nav").slideToggle();
    })
    })