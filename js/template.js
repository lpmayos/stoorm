(function($){
    $(document).ready(function(){
    
        $(".slogan-image").backstretch('images/background.jpg');

        
        // close navbar on click
        //-----------------------------------------------
        $('.nav a').on('click', function(){
            $(".btn-navbar").click(); //bootstrap 2.x
            $(".navbar-toggle").click() //bootstrap 3.x by Richard
        });

        
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
                offset: 87
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
                            scrollTop: target.offset().top - 85
                        }, 1000);
                        return false;
                    }
                }
            });
        }


        //i18next - Multilingual support
        //-----------------------------------------------

        i18n.init({
            fallbackLng: false,     // fallback quando não definir linguagem
            debug: true,            // debug do plugin
            fixLng: true,           // preserva o cookie quando a linguagem for definida
            load: 'current'         // define a forma correta de declarar linguagens
        },
          
        function(translation) {
            $('[data-i18n]').i18n();
            var appName = translation('app.name');
        });
        
        $('#spanish').on('click', function() {
            i18n.setLng('es', {fixLng: true}, function(translation){
                $('[data-i18n]').i18n();
            });
        });

        $('#english').on('click', function() {
            i18n.setLng('en', {fixLng: true}, function(translation){
                $('[data-i18n]').i18n();
            });
        });


    });
})(this.jQuery);