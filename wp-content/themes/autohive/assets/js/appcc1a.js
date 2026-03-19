;(function($) {
    // Strict Mode
    'use strict';

    $(document).ready(function () {

        $(window).on('scroll', function () {
            //header sticky
            var scrollBar = $(this).scrollTop();

            if (scrollBar > 100) {
                $(".sticky_enabled").addClass("sticky-on");
            } else {
                $(".sticky_enabled").removeClass("sticky-on");
            }
            
            //theme scroll-top button
            if (scrollBar > 300) {
                $(".theme-scrolltop-btn").fadeIn();
            } else {
                $(".theme-scrolltop-btn").fadeOut();
            } //vertical listing menu

            var scrollBarPosition = $(window).scrollTop();
            $(".car_listing_nav ul li a").each(function () {
                var navOffset = $(this.hash).offset().top - 120;

                if (scrollBarPosition > navOffset) {
                    $(this).parents("ul").find("a.active").removeClass("active");
                    $(this).addClass("active");
                }
            });
        });

        function offCanvus() {
            $(".ofcanvus-toggle").on("click", function () {
                $(".at_offcanvus_menu").addClass("active");
            });
            $(".at-offcanvus-close").on("click", function () {
                $(".at_offcanvus_menu").removeClass("active");
            });
            $(document).on("mouseup", function (e) {
                var offCanvusMenu = $(".at_offcanvus_menu");

                if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
                    $(".at_offcanvus_menu").removeClass("active");
                }
            });
        }

        offCanvus(); //mobile menu

        $(".mobile-menu-toggle").on("click", function () {
            $(".mobile-menu").addClass("active");
        });
        $(".mobile-menu .close-menu").on("click", function () {
            $(".mobile-menu").removeClass("active");
        });
        $(".mobile-menu ul li.has-submenu i.dropdown_icon").each(function () {
            $(this).on("click", function () {
                $(this).siblings('ul').slideToggle();
                $(this).toggleClass("icon-rotate");
            });
        });
        $(document).on("mouseup", function (e) {
            var offCanvusMenu = $(".mobile-menu");
            if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
                $(".mobile-menu").removeClass("active");
            }
        });

        //preloader
        $(".ring-preloader").fadeOut();

        $(".theme-scrolltop-btn").on("click", function () {
            $("body,html").animate({
                "scrollTop" : 0
            }, 1500);
        });

       //custom scrollbar
        var at_scrollbar = $(".at_scrollbar");
        if ( at_scrollbar.length > 0 ) {
            $(".at_scrollbar").mCustomScrollbar({
                axis: "y"
            });    
        }

        // Custom Rating with commnet form
        var logID = 'log',
            log = $('<div id="' + logID + '"></div>');
        $('body').append(log);
        $('[type*="radio"]').change(function () {
            var me = $(this);
            log.html(me.attr('value'));
        });


        // Product Quantity decrement "--"
        $('.product-qty .decrement').on("click", function () {

            let getID = $(this).next().attr("id");
            let result = document.getElementById(getID);
            let qty = result.value;

            if (!isNaN(qty) && qty > 0) {
                result.value--;
                $('.single_add_to_cart_button').attr('data-quantity', result.value);
                $('.update_cart_btn').removeAttr('disabled');
            } else {
                return false;
            }

        });


        // Product Quantity Increment "++"
        $('.product-qty .increment').on("click", function () {
            let getID = $(this).prev().attr("id");
            let result = document.getElementById(getID);
            let qty = result.value;

            if (!isNaN(qty)) {
                result.value++;
                $('.single_add_to_cart_button').attr('data-quantity', result.value);
                $('.update_cart_btn').removeAttr('disabled');
            } else {
                return false;
            }

        });

        // Product Add to cart icon text re
        var addToCartBtn   = document.querySelectorAll(".at_product_action a.button");
        addToCartBtn.forEach(function (element) {
            element.innerHTML = '';
        });
        
        var addToCart = document.querySelectorAll(".wp-block-button__link.wp-element-button.add_to_cart_button:not(.ajax_add_to_cart)");
        addToCart.forEach(function (element) {
            element.textContent = 'Buy Now';
        });

        //Product Single Related Product
        let relatedPost = $('.rl-products-slider');
        if ( relatedPost.length > 0 ) {
            const rlProductSlider = new Swiper(".rl-products-slider", {
                slidesPerView: 4,
                spaceBetween: 24,
                loop: true,
                autoplay: true,
                navigation: {
                    nextEl: '.slider-button-next',
                    prevEl: '.slider-button-prev'
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 16
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 24
                    },
                    1400: {
                        slidesPerView: 4
                    }
                }
            });
        }

        /**Sticky Footer */
        const heightOutput = document.querySelector(".content-area, .blog-list-section");
        if ( heightOutput != null ) {
            const footer = document.querySelector(".site-footer");
            if (heightOutput.offsetHeight < 544 && footer != null) {
                footer.classList.add('fixed_footer');
            }
        }

        /** Tooltip */
        $('[data-bs-toggle="tooltip"]').tooltip();

    })

})(jQuery);
