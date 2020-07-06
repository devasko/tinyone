$( document ).ready( function()   {

    $( '.testimonials' ).owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        navText: [],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                margin: 10,
            },
            480: {
                items: 1,
                dots: true,
            },
        }
    });
});