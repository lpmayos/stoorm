(function($){
    $(document).ready(function(){
    
        $(".banner-image").backstretch('images/background.png');
        
        // Fixed header
        //-----------------------------------------------
        $(window).scroll(function() {
            if (($(".header.fixed").length > 0)) { 
                if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
                    $("body").addClass("fixed-header-on");
                } else {
                    $("body").removeClass("fixed-header-on");
                }
            };
        });

        $(window).load(function() {
            if (($(".header.fixed").length > 0)) { 
                if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
                    $("body").addClass("fixed-header-on");
                } else {
                    $("body").removeClass("fixed-header-on");
                }
            };
        });

        //Scroll Spy
        //-----------------------------------------------
        if($(".scrollspy").length>0) {
            $("body").addClass("scroll-spy");
            $('body').scrollspy({ 
                target: '.scrollspy',
                offset: 152
            });
        }

        //Smooth Scroll
        //-----------------------------------------------
        if ($(".smooth-scroll").length>0) {
            $('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top-151
                        }, 1000);
                        return false;
                    }
                }
            });
        }

    });
})(this.jQuery);