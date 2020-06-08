$( document ).ready(function() {

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


// anchors

$(".tab-link").click(function(){

	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length != 0) {
	$('html, body').animate({ scrollTop: $(scroll_el).offset().top-50 }, 500);
	}
	return false;

});

// comments open

$(".comments-block__closed-btn").click(function(){
    $(this).closest('.comments-block').removeClass('closed');
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

if($(window).width() < 1180) {
    truncate(mainText, 70);
} else {
    truncate(mainText, 260);
}

function checkPosition() {
    if($(window).width() < 1180) {
        truncate(mainText, 70);
    } else {
        mainText.text(prevMainText);
        truncate(mainText, 260);
    }
};


});