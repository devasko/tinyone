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


//  Scroll down button

    const scrollDown = document.querySelector( '.header__scroll a' );

    scrollDown.addEventListener( 'click', function ( event ) {
        event.preventDefault();

        let target = this.getAttribute( 'href' );
        document.querySelector('' + target ).scrollIntoView( {
            behavior: 'smooth',
            block: 'start',
        });
    });

    //  Scroll up button

    const scrollUp = $( '.scroll-up' );


    $( window ).on( 'scroll', () => {
        if ( $( this ).scrollTop() > 700 ) {
            scrollUp.fadeIn();
        } else {
            scrollUp.fadeOut();
        }

        if ( window.pageYOffset > 5200 ) {
            $( '.scroll-up' ).css( { 'color': '#fff', 'border-color': '#fff'} );
        } else {
            $( '.scroll-up' ).css( { 'color': '#000', 'border-color': '#000'} );
        }
    } );

    scrollUp.click( () => {
        $( window ).scrollTo( 0, 0 );
    } );
});