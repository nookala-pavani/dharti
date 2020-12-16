// this function runs every time you are scrolling

$(window).scroll(function() {
    var music_bottom = $('.music-background').outerHeight();
    var top_of_screen = $(window).scrollTop();
    console.log(top_of_screen, music_bottom);
    if(Math.round(top_of_screen) == Math.round(music_bottom)) {
        $('.inner-content').fadeIn('slow');
    } else {
        $('.inner-content').fadeOut('slow');
    }
});

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