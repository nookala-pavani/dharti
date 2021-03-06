// this function runs every time you are scrolling

$(document).ready(function() {
  $('.footer').css('transition', 'opacity 0.5s linear');
  $('.footer').css('transition-delay', '0.5s');

  $('.footer').css('opacity', '1');

  $('.main-logo').css('transition', 'opacity 0.5s linear');
  $('.main-logo').css('opacity', '1');
});

var curScroll = 0;
$(window).on('scroll',function() {
    var music_bottom = $('.music-background').outerHeight();
    var top_of_screen = $(window).scrollTop();
    if(Math.round(top_of_screen) >= Math.round(music_bottom)) {
        $('.inner-content').fadeIn('slow');
        $('.music-footer').css('transition', 'opacity 0.5s linear');
        $('.music-footer').css('opacity', '1');
    } else {
        $('.inner-content').fadeOut('slow');
        $('.music-footer').css('transition', 'opacity 0.5s linear');
        $('.music-footer').css('opacity', '0');
    }



    if(top_of_screen != 0) {
        $('.footer').css('transition', 'opacity 0.5s linear');
        $('.footer').css('transition-delay', '0.5s');
      
        $('.footer').css('opacity', '0');
      
        $('.main-logo').css('transition', 'opacity 0.5s linear');
        $('.main-logo').css('opacity', '0');
    } else {
        $('.footer').css('transition', 'opacity 0.5s linear');
        $('.footer').css('transition-delay', '0.5s');
      
        $('.footer').css('opacity', '1');
      
        $('.main-logo').css('transition', 'opacity 0.5s linear');
        $('.main-logo').css('opacity', '1');
    }
});

function myFunction(event) {
    var delta = event.deltaY;
    console.log(event.deltaMode);
       if(delta > 0) {
            //scroll down
                curScroll += delta;
        }
        else {
            //scroll up
            var music_top = $('.music-section').offset().top;
            var top_of_screen = $(".inner-content").offset().top;
           if(top_of_screen != music_top) {
                curScroll += delta;
                $('.main-background').css('overflow', 'hidden');
           } else {
            $('.main-background').css('overflow', 'auto');
           }
        }
        $('.inner-content').scrollTop(curScroll);
        console.log($('.inner-content').offsetTop());
            
}

$(".inner-content").scroll(function() {
    var bottom_of_music_el = $('.music-section').offset().top + $('.music-section').innerHeight();
    var top_of_art_element = $(".art-section").offset().top;
    var bottom_of_art_element = $(".art-section").offset().top + $(".art-section").innerHeight();
    var top_of_culture_el = $(".culture-section").offset().top;
    var bottom_of_culture_element = $(".culture-section").offset().top + $(".culture-section").innerHeight();

    var bottom_of_screen = $(".inner-content").offset().top + $(".inner-content").innerHeight();
    var top_of_screen = $(".inner-content").offset().top;

    if ((bottom_of_screen > top_of_art_element) && (top_of_screen < bottom_of_art_element)){
        $('.music-background').css("background-color", "#b38955");
        $('.music-background').css("transition", "background-color 1s linear");

        $('.content-div').css("background-color", "#b38955");
        $('.content-div').css("transition", "background-color 1s linear");

        $('.art').css("opacity", "100%");
        $('.art').css("transition", "opacity 1s linear");
        $('.music').css("opacity", "30%");
        $('.music').css("transition", "opacity 1s linear");
        $('.culture').css("opacity", "30%");
        $('.culture').css("transition", "opacity 1s linear");
    } 

    if ((bottom_of_screen > top_of_culture_el) && (top_of_screen < bottom_of_culture_element)){
        $('.music-background').css("background-color", "#767769");
        $('.music-background').css("transition", "background-color 1s linear");
        $('.content-div').css("background-color", "#767769");
        $('.content-div').css("transition", "background-color 1s linear");
        $('.art').css("opacity", "30%");
        $('.art').css("transition", "opacity 1s linear");
        $('.music').css("opacity", "30%");
        $('.music').css("transition", "opacity 1s linear");
        $('.culture').css("opacity", "100%");
        $('.culture').css("transition", "opacity 1s linear");
    } 
    
    if(top_of_screen < bottom_of_music_el) {
        $('.music-background').css("background-color", "#7e6b71");
        $('.music-background').css("transition", "background-color 1s linear");
        $('.content-div').css("background-color", "#7e6b71");
        $('.content-div').css("transition", "background-color 1s linear");
        $('.art').css("opacity", "30%");
        $('.art').css("transition", "opacity 1s linear");
        $('.music').css("opacity", "100%");
        $('.music').css("transition", "opacity 1s linear");
        $('.culture').css("opacity", "30%");
        $('.culture').css("transition", "opacity 1s linear");
    }
});

$('.music').click(function() {
    document.querySelector('.music-section').scrollIntoView();
});
$('.art').click(function() {
    document.querySelector('.art-section').scrollIntoView();
});

$('.culture').click(function() {
    document.querySelector('.culture-section').scrollIntoView();
});