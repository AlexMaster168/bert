$(document).ready(function(){
    
    var counter = $('.counter-section__counter');

    // media

    $(window).bind("resize", checkPosition)

    // Burger-menu

    var menuLink = $('.burger-menu');

    menuLink.click(function(){
        menuLink.toggleClass('active');
        $('.header').toggleClass('header-open');
    });

        
    // btn-scroll

    var btn_scroll = $("#btn-scroll");
    var page = $('html');

    btn_scroll.click(function(){
        page.animate({ scrollTop: page.offset().top-200 }, 500);
    });
    

    
    // slick

    $('#promo-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        prevArrow:"<svg class='arrow arrow_left'><use xlink:href='#i-left'></use></svg>",
        nextArrow:"<svg class='arrow arrow_right'><use xlink:href='#i-right'></use></svg>",
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                }
            },
        ]
    });

    // counter////////////

    $(window).on('scroll' , function(){
        scroll_pos = $(window).scrollTop() + $(window).height();
        element_pos = counter.offset().top + counter.height() ;
        if (scroll_pos > element_pos) {
            $('.counter__numb').each(function() {
                var $this = $(this),
                countTo = $this.attr('data-count');
            
                $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },

                {
                    duration: 1500,
                    easing:'linear',
                    step: function() {
                    $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                    $this.text(this.countNum);
                }

                });  
            });
        };
    });


    
// truncate text

function truncate(string, maxCharacters){
    string.each(function() {
        var text = $(this).text()
        if (text.length > maxCharacters) {
            var result = text.substring(0, maxCharacters) +'...';
            string.text(result);
        } else {
            return string.text(text);
        }
    })
 };

var newsText =  $(".js-news-text");
var mainText = $(".js-news-text_main");
var prevMainText = mainText.text();
truncate(newsText, 70);

if($(window).width() < 640) {
    truncate(mainText, 70);
} else {
    truncate(mainText, 260);
}

function checkPosition() {
    if($(window).width() < 640) {
        truncate(mainText, 70);
    } else {
        mainText.text(prevMainText);
        truncate(mainText, 260);
    }
};
    
});

