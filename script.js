$(function() {
    var pull 		= $('#pull');
        menu 		= $('.navbar ul');
        menuHeight	= menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('loader-wrapper');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    
    }, 1000);
}