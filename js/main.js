$( document ).ready( function()   {

    //  Основное меню хэдера

    $( '.header-menu__burger' ).on( 'click', function ( event ) {
        event.preventDefault();
        $( this ).toggleClass( 'active' );
    } );


    //  Слайдер отзывов


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


//  Кнопка прокрутки вниз

    const scrollDown = document.querySelector( '.header__scroll a' );

    scrollDown.addEventListener( 'click', function ( event ) {
        event.preventDefault();

        let target = this.getAttribute( 'href' );
        document.querySelector('' + target ).scrollIntoView( {
            behavior: 'smooth',
            block: 'start',
        });
    });


//  Кнопка прокрутки вверх

    const scrollUp = $( '.scroll-up' );


    $( window ).on( 'scroll', () => {
        if ( $( this ).scrollTop() > 700 ) {
            scrollUp.fadeIn();
        } else {
            scrollUp.fadeOut();
        }

        if ( window.pageYOffset > 5200 ) {
            scrollUp.css( { 'color': '#fff', 'border-color': '#fff'} );
        } else {
            scrollUp.css( { 'color': '#000', 'border-color': '#000'} );
        }
    } );

    scrollUp.click( () => {
        $( window ).scrollTop( 0, 0 );
    } );
});