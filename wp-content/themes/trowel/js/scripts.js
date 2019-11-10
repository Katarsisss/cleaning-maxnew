jQuery(function($) {

    "use strict";
    
    //Preloader

    if($('.ale_preloader_holder').length){
        //alert('1111');
        $( window ).on( "load", function() {
            //alert('2222');
            $('.ale_preloader_holder').fadeOut('slow',function(){$(this).remove();});
        });
    }


    if( ale_home_slider.sidebarSticky === 'sticky' ) {

        // blog
        var aleBlogContent = $('.posts_list');
        var aleSidebarContent = $('#sidebar-widget-area');
        var aleBlogContentSidebar = $('.posts_list , #sidebar-widget-area');

        if ( aleBlogContent.length && aleSidebarContent.length ) {
            aleBlogContentSidebar.theiaStickySidebar({
                additionalMarginTop: 20
                //additionalMarginBottom: 0//40
            });
        }


        // blog single and reconstruction single
        var aleBlogSingleContent = $('.post_single');
        var aleBlogSingleContentSidebar = $('.post_single , #sidebar-widget-area');

        if ( aleBlogSingleContent.length && aleSidebarContent.length ) {
            aleBlogSingleContentSidebar.theiaStickySidebar({
                additionalMarginTop: 20
                //additionalMarginBottom: 0//40
            });
        }


        // service single
        var aleServiceSingleContent = $('.service_single');
        var aleServiceSingleContentSidebar = $('.service_single , #sidebar-widget-area');

        if ( aleServiceSingleContent.length && aleSidebarContent.length ) {
            aleServiceSingleContentSidebar.theiaStickySidebar({
                additionalMarginTop: 20
                //additionalMarginBottom: 0//40
            });
        }


        // shop
        var aleShopContent = $('.product_list');
        var aleShopContentSidebar = $('.product_list , #sidebar-widget-area');

        if ( aleShopContent.length && aleSidebarContent.length ) {
            aleShopContentSidebar.theiaStickySidebar({
                additionalMarginTop: 20
                //additionalMarginBottom: 0//40
            });
        }

        // shop single
        var aleShopSingleContent = $('#primary');
        var aleShopSingleContentSidebar = $('#primary , #sidebar-widget-area');

        if ( aleShopSingleContent.length && aleSidebarContent.length ) {
            aleShopSingleContentSidebar.theiaStickySidebar({
                additionalMarginTop: 20
                //additionalMarginBottom: 0//40
            });
        }

    }










    /* Sticky header */
    var lastScroll = 0;

    $(window).on('scroll', ale_init_scroll_navigate);
    function ale_init_scroll_navigate() {
    
        //sticky nav Start      
        var headerHeight = $('.header__wrapper').outerHeight() + 1000;
        
        if (!$('.header__wrapper').hasClass('no-sticky')) {
            if ($(document).scrollTop() >= headerHeight) {

                $('.header__wrapper').addClass('sticky');               

            } else if ($(document).scrollTop() <= headerHeight) {
                                
                setTimeout(func, 200);
                function func() {
                    $('.header__wrapper').removeClass('sticky');
                }
            }
        }

        // header appear on scroll up
        var st = $(this).scrollTop();
        if (st > lastScroll) {
            $('.sticky').removeClass('header-appear');
        } else
            $('.sticky').addClass('header-appear');
        lastScroll = st;
        if (lastScroll <= headerHeight)
            $('.header__wrapper').removeClass('header-appear');
        
        
        //sticky nav End
    }
    



    /*-------------------------------------------------
                    The First Homepage
    --------------------------------------------------*/

   /* The hamburger */
    
    $('.hamburger--collapse-r').on('click', function(){
        $('.hamburger--collapse-r').toggleClass('is-active');
        $('.header_nav').fadeToggle(600);
        $('.info_block_wrapper').fadeToggle(300);
    });

    
    /* The search */

    $('#header_search_form .searchsubmit').on('click', function(e){		
        
        e.preventDefault();
        
        $('#header_search_form .searchinput').fadeToggle(300);
	});

    /* The Home Page slider */
    if($('.home_slider').length){
        
        if( ale_home_slider.slidesettings == 'animateall' ) {
            
            $('.home_slider').on('init', function(event, slick) {

                $('.slick-active .slider_title').removeClass('slider_hidden');

                $('.slick-active .sub_title_slide').removeClass('slider_hidden');

                $('.slick-active .slide_buttons').removeClass('slider_hidden');

            });
        }

        var homeAutoplaySpeed = 6000;
        if ( ale_home_slider.homeSliderSpeed == "off" ) {
            homeAutoplaySpeed = 6000;
        } else {
            homeAutoplaySpeed = ale_home_slider.homeSliderSpeed;
        }

        //alert(homeAutoplaySpeed);
    
        $('.home_slider').slick({
            autoplay: true,
            autoplaySpeed: homeAutoplaySpeed,
            pauseOnHover: true,
            touchMove: false,
            fade: true,
            arrows: false,
            adaptiveHeight: true,
            dots: true
        });
        
        var ale_count = 2;
        
        $('.home_slider').on('afterChange', function(event, slick, currentSlide) {
            
            if( ale_home_slider.slidesettings == 'animateall' ) {
                
                if( ale_count % 2 == 0 ) {
                    $('.slick-active .slider_title').removeClass('slider_hidden');
                    $('.slick-active .slider_title').addClass('animated fadeInRight');

                    $('.slick-active .sub_title_slide').removeClass('slider_hidden');
                    $('.slick-active .sub_title_slide').addClass('animated fadeInRight');

                    $('.slick-active .slide_buttons').removeClass('slider_hidden');
                    $('.slick-active .slide_buttons').addClass('animated fadeInRight');
                } else {
                    $('.slick-active .slider_title').removeClass('slider_hidden');
                    $('.slick-active .slider_title').addClass('animated fadeInUp');

                    $('.slick-active .sub_title_slide').removeClass('slider_hidden');
                    $('.slick-active .sub_title_slide').addClass('animated fadeInUp');

                    $('.slick-active .slide_buttons').removeClass('slider_hidden');
                    $('.slick-active .slide_buttons').addClass('animated fadeInUp');
                }
                
            }
            
                
       });
       
       
       $('.home_slider').on('beforeChange', function(event, slick, currentSlide) {
           
           if( ale_home_slider.slidesettings == 'animateall' ) {
         
                if( ale_count % 2 == 0 ) {
                    $('.slick-active .slider_title').removeClass('animated fadeInRight');
                    $('.slick-active .slider_title').addClass('slider_hidden');

                    $('.slick-active .sub_title_slide').removeClass('animated fadeInRight');
                    $('.slick-active .sub_title_slide').addClass('slider_hidden');

                    $('.slick-active .slide_buttons').removeClass('animated fadeInRight');
                    $('.slick-active .slide_buttons').addClass('slider_hidden');
                } else {
                    $('.slick-active .slider_title').removeClass('animated fadeInUp');
                    $('.slick-active .slider_title').addClass('slider_hidden');

                    $('.slick-active .sub_title_slide').removeClass('animated fadeInUp');
                    $('.slick-active .sub_title_slide').addClass('slider_hidden');

                    $('.slick-active .slide_buttons').removeClass('animated fadeInUp');
                    $('.slick-active .slide_buttons').addClass('slider_hidden');
                }
                
            }
         
            ale_count++;         
       });
       
        
        var $carousel =  $('.home_slider');
        $(document).on('keydown', function(e) {
            if(e.keyCode == 37) {
                $carousel.slick('slickPrev');
            }
            if(e.keyCode == 39) {
                $carousel.slick('slickNext');
            }
        });
    }
    
    
    
    /* Special Proposition section */
    
    $('.services_buttons li.ale_home_one').on('click', function(){
        var selected_button = $(this).data('id');
                
        $('.proposition_info').addClass('display_none').removeClass('display_block');
        
        $('.proposition_info[data-id="' + selected_button + '"]').removeClass('display_none').addClass('display_block');
        
        $('.services_buttons li').removeClass('active').addClass('no-active');
        $(this).removeClass('no-active').addClass('active');
    });
    
    
    
    /* Special Proposition Popup */
    
    if($('.venobox_icon_one').length){
        $('.venobox_icon_one').venobox({
            framewidth: '460px',
            frameheight: '512px',
            spinner: 'wave'
        });
    }
      

    if($('.venobox_icon_two').length){
        $('.venobox_icon_two').venobox({
            framewidth: '790px',
            frameheight: '504px',
            spinner: 'wave'
        });
    }
    
    
    if($('.ale_feature_title.ale_vbox_video').length){
        $('.ale_feature_title.ale_vbox_video').venobox();
    }
    
    
    
    /* The Services slider */
    
    if($('.services_slider').length){
        $('.services_slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            //touchMove: false,
            adaptiveHeight: true,            
            slidesToShow: 3,
            lidesToScroll: 1,
            nextArrow: '.next_service',
            prevArrow: '.previous_service',
            responsive: [
               {
                 breakpoint: 991,
                 settings: {                    
                   slidesToShow: 2
                 }
               },
               {
                 breakpoint: 630,
                 settings: {
                   slidesToShow: 1
                 }
               }
             ]
        });
    }



    /* Renovation Works section */
    $( window ).on( "load", function() {
        if($('.before-after').length){
            $('.before-after').twentytwenty({
                move_slider_on_hover: true
            }); 
        }
    });
    
    
    if($('.photo_side').length){
        $('.photo_side').slick({
            autoplay: false,
            pauseOnFocus: true,
            pauseOnHover: true,
            swipe: false,
            touchMove: false,
            slidesToShow: 1,
            arrows: false,
            //autoplaySpeed: 10000,
            adaptiveHeight: false,
            dots: true,
            infinite: false,
            responsive: [
               {
                 breakpoint: 1031,
                 settings: {                    
                    slidesToShow: 2,
                    autoplay: false,
                    dots: false
                 }
               },
               {
                 breakpoint: 731,
                 settings: {
                    autoplay: true,
                    slidesToShow: 1,                    
                    dots: true
                 }
               }
             ]
        });
        
        $('.photo_side').on('setPosition', function(){
            jQuery(window).trigger("resize");
        });
    
    }





    /* The Testimonials slider */
    
    if($('.testimonials_slider').length){
        $('.testimonials_slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            adaptiveHeight: true,            
            slidesToShow: 2,
            lidesToScroll: 1,
            nextArrow: '.next_testimonial',
            prevArrow: '.previous_testimonial',
            responsive: [
               {
                 breakpoint: 991,
                 settings: {                    
                   slidesToShow: 1
                 }
               }
             ]
        });
    }



    /* Why Choose Us Video Popup */
    
    if($('.venobox_video_link').length){
        $('.venobox_video_link').venobox();
    }
    
    
    
    /* The Blog slider */
    
    if($('.blog_slider').length){
        $('.blog_slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            adaptiveHeight: true,            
            slidesToShow: 3,
            lidesToScroll: 1,
            nextArrow: '.next_post',
            prevArrow: '.previous_post',
            responsive: [
               {
                 breakpoint: 991,
                 settings: {                    
                   slidesToShow: 2
                 }
               },
               {
                 breakpoint: 630,
                 settings: {
                   slidesToShow: 1
                 }
               }
             ]
        });
    }
    
    /* The Partners slider */
    
    if($('.partners_list.slider').length){
        $('.partners_list.slider').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            pauseOnHover: true,
            adaptiveHeight: true,            
            slidesToShow: 4,
            lidesToScroll: 1,
            responsive: [
               {
                 breakpoint: 991,
                 settings: {                    
                   slidesToShow: 3
                 }
               },
               {
                 breakpoint: 671,
                 settings: {
                   slidesToShow: 2
                 }
               },
               {
                 breakpoint: 471,
                 settings: {
                   slidesToShow: 1
                 }
               }
             ]
        });
    }


    /*-------------------------------------------------
                    The Second Homepage
    --------------------------------------------------*/

    
    
    
    /* About Company Video Popup */
    
    if($('.venobox_about_link').length){
        $('.venobox_about_link').venobox();
    }

    
    
    /* Advantages section */
    
    $('.advantage_item').on('click', function(){
        var selected_advantage = $(this).data('id');
                
        $('.advantage_item_info').addClass('advantage_none').removeClass('advantage_block');
        
        $('.advantage_item_info[data-id="' + selected_advantage + '"]').removeClass('advantage_none').addClass('advantage_block');
        
        $('.advantage_item').addClass('BlackAndWhite');
        $(this).removeClass('BlackAndWhite');
    });
    
    
       
    /*-------------------------------------------------
                    The Third Homepage
    --------------------------------------------------*/
    
    
    
    
    /* Special Proposition section */
    
    $('.services_buttons li.ale_home_three').on('click', function(){
        var selected_button = $(this).data('id');
                
        $('.proposition_info').addClass('display_none').removeClass('display_block');
        $('.feature_item').addClass('display_none').removeClass('display_block');
        
        $('.proposition_info[data-id="' + selected_button + '"]').removeClass('display_none').addClass('display_block');
        $('.feature_item[data-id="' + selected_button + '"]').removeClass('display_none').addClass('display_block');
        
        $('.services_buttons li').removeClass('active').addClass('no-active');
        $(this).removeClass('no-active').addClass('active');
    });
    
    
    
    
    
    /*-------------------------------------------------
                    The Other Pages
    --------------------------------------------------*/
   
    /* The Second and third variants of the Project gallery */
    
    if($('.gallery_project_slider_full').length){
        $('.gallery_project_slider_full').slick({
            autoplay: false,
            pauseOnHover: true,
            adaptiveHeight: true,            
            slidesToShow: 3,
            lidesToScroll: 1,
            nextArrow: '.next_project_item',
            prevArrow: '.previous_project_item',
            responsive: [
               {
                 breakpoint: 991,
                 settings: {                    
                   slidesToShow: 2
                 }
               },
               {
                 breakpoint: 701,
                 settings: {
                   slidesToShow: 1
                 }
               }
             ]
        });
    }
    
    
    /* Accordion on Single Service */
    
    if($('.ale_accordion').length){
    
        var acc = document.getElementsByClassName("ale_accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
          });
        }    
    }
    
    
    /* Service Video Popup */
    
    if($('.venobox_service_video').length){
        $('.venobox_service_video').venobox();
    }
    

    
    
    /* add a dynamic to the input file on the send photo page */
    
    if($('.ale_main_inputfile').length){
        
        $( '.ale_main_inputfile' ).each( function() {
            var $input	 = $( this ),
                $label	 = $input.next( 'label' ),
                labelVal = $label.html();

            $input.on( 'change', function( e )
            {
                var fileName = '';

                if( this.files && this.files.length > 1 )
                    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                else if( e.target.value )
                    fileName = e.target.value.split( '\\' ).pop();

                if( fileName )
                    $label.find( 'span' ).html( fileName );
                else
                    $label.html( labelVal );
            });

            // Firefox bug fix
            $input
            .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
            .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
        });
        
    }
    
    
    
    /* Animated Number Counter From Zero To Value */    
    if($('.advantage_value').length){

        var el = $('.advantage_value');
        var ale_key_count = true;

        $(window).scroll(function(){
            if(ale_key_count) {
                var ale_conditional = $(this).scrollTop() > el.offset().top - $(window).height();
            }

            if ( ale_conditional ) {

                if($('.count').length){

                    $('.count').each(function () {
                        $(this).prop('Counter',0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 5000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });    
                }

                /*console.log('Run !');*/
                ale_key_count = false;
                ale_conditional = false;
            }
        });
    
    }
    
    
    
    
});



    