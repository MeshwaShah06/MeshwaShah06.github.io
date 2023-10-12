$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '150px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js-hun').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    $('.fd').click(function () {
       $('html, body').animate({scrollTop: $('.js-hun').offset().top}, 1000); 
    });
    
    
    $('.ht').click(function () {
       $('html, body').animate({scrollTop: $('.js-works').offset().top}, 1000); 
    });
    
    $('.ciiity').click(function () {
       $('html, body').animate({scrollTop: $('.js-city').offset().top}, 1000); 
    });
    
    $('.fosa').click(function () {
       $('html, body').animate({scrollTop: $('.js-form').offset().top}, 1000); 
    });
    
    
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
});