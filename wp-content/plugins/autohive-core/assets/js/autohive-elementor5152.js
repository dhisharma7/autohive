(function ($, elementor) {
    "use strict";

    var Autohive = {

        init: function () {

            var widgets = {
                'autohive-slider.default'               : Autohive.SwiperControls,
                'autohive_video.default'                : Autohive.VideoPopup,
                'autohive_testimonials.default'         : Autohive.SwiperControls,
                'autohive_promo_slider.default'         : Autohive.SwiperControls,
                'autohive_countdown.default'            : Autohive.Countdown,
                'autohive_product.default'              : Autohive.SwiperControls,
                'autohive_listing_details.default'      : Autohive.ThumbnailSlider,
                'autohive_listing.default'              : Autohive.SwiperControls,
                'autohive_dealers.default'              : Autohive.Dealers,
                'autohive_navbar.default'               : Autohive.navbarMenu,
                'autohive_listing_rent.slider'          : Autohive.RentalSlider,
                'autohive_listing_rent.carousel'        : Autohive.SwiperControls,
                'autohive_services.default'             : Autohive.SwiperControls,
                'autohive_clients_logo.default'         : Autohive.SwiperControls,
                'autohive_electric_car.default'         : Autohive.ThumbnailSlider,
                'autohive_progress_bar.default'         : Autohive.ProgressBar,
                'autohive_motors.default'               : Autohive.SwiperControls,
                'autohive_motor_details.default'        : Autohive.SwiperThumbSlider,
                'autohive_equipment_details.default'    : Autohive.EquipmentDetails,
                'autohive_listing_tab_masonry'          : Autohive.MasonryTab,
                'autohive_car_slider_v2'                : Autohive.CarSliderV2,
                'autohive_testimonial_tab'              : Autohive.ThumbnailSlider
            };

            $.each(widgets, function (widget, callback) {
                elementor.hooks.addAction('frontend/element_ready/' + widget, callback);
            });
        },

        CarSliderV2: function ($scope) {
            $(".hero3-slider").slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
                autoplay: true,
                fade: true,
                autoplaySpeed: 5000,
                speed: 1000
            });  
        },

        MasonryTab: function ( $scope ) {
            //masonry grid
            $('.masonry_grid').isotope({
                itemSelector: '.grid_item',
                percentPosition: true,
                masonry: {
                    columnWidth: 1
                }
            });
            var filter_grid_4 = $(".featured_masonry");
            $('.listing-ft-controls').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                filter_grid_4.isotope({
                    filter: filterValue
                });
                $(this).parent(".listing-ft-controls").find("button.active").removeClass("active");
                $(this).addClass("active");
            });
        },

        EquipmentDetails: function ($scope) {

            $('.video-popup-btn').magnificPopup({
                type: 'iframe'
            }); //theme slider

            const eqdGalleryControlSlider = new Swiper(".eqd-gallery-control-slider", {
                spaceBetween: 16,
                loop: true,
                speed: 700,
                breakpoints: {
                    0: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 4
                    }
                }
            });

            const eqdVideoGallerySlider = new Swiper(".eqd-video-gallery-slider", {
                slidesPervView: 1,
                autoplay: true,
                loop: true,
                spaceBetween: 24,
                speed: 700,
                thumbs: {
                    swiper: eqdGalleryControlSlider
                }
            }); //slide index

        },

        // Swiper Thumbnail Slider
        SwiperThumbSlider: function ($scope) {
            const bldBikeSliderControl = new Swiper(".bike-listing-slider-control", {
                slidesPerView: 3,
                spaceBetween: 12,
                speed: 700,
                loop: true,
                breakpoints: {
                    0: {
                        direction: "horizontal"
                    },
                    992: {
                        direction: "vertical"
                    }
                }
            });
            const bldBikeSlider = new Swiper(".bld-bike-slider", {
                slidesPerView: 1,
                spaceBetween: 24,
                autoplay: true,
                speed: 700,
                loop: true,
                thumbs: {
                    swiper: bldBikeSliderControl
                }
            });
        },

        // Progress Bar
        ProgressBar: function ($scope) {

            $.fn.ProgressBar = function(){
                var targetParent = $(this);
                targetParent.each(function(){

                    //required variables
                    var target = $(this).children();
                    var offsetTop = $(this).offset().top;
                    var winHeight = $(window).height();
                    var data_width = target.attr("data-percent") + "%";
                    var data_color = target.attr("data-color");

                    //animation starts
                    if( winHeight > offsetTop ) {
                        target.css({
                            backgroundColor: data_color,
                        });
                        target.animate({
                            width: data_width,
                        }, 1000);
                    }

                    //animation with scroll
                    $(window).on("scroll", function(){
                        var scrollBar = $(this).scrollTop();
                        var animateStart = offsetTop - winHeight;
                        var animateEnd = animateStart + 400;
                        if( scrollBar > animateStart && scrollBar < animateEnd ) {
                            target.css({
                                backgroundColor: data_color,
                            });
                            var start_animate = target.animate({
                                width: data_width,
                            }, 1000);

                            if(start_animate) {
                                setTimeout(function(){
                                    target.stop();
                                }, 2000);
                            } else {
                                return false;
                            }
                        }
                    });
                });

                return this;
            }

            //Active Js
            $(".progress-bar-line").ProgressBar(); //listing scroll nav

        },


        RentalSlider: function (element) {
            const carThumbSlider = new Swiper(".car-thumb-slider", {
                loop: true,
                spaceBetween: 24,
                slidesPerView: 3,
                freeMode: true,
                watchSlidesProgress: true,
                navigation: {
                    nextEl: ".slider-button-next",
                    prevEl: ".slider-button-prev"
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 2
                    },
                    1400: {
                        slidesPerView: 3
                    }
                }
            });
            const carSlider = new Swiper(".car-slider", {
                loop: true,
                spaceBetween: 20,
                thumbs: {
                    swiper: carThumbSlider
                }
            });
        },

        //================= Dealer Listing =================//
        navbarMenu: function ($scope) {

            let categoryToggle = $scope.find('.category-toggle');
            let scrollbar = $scope.find('.at_scrollbar');

            if ( categoryToggle.length > 0 ) {
                $(".category-toggle").on("click", function () {
                    $(".product_category_nav").slideToggle();
                }); //custom scrollbar
            }

            if ( scrollbar.length > 0 ) {
                scrollbar.mCustomScrollbar({
                    axis: "y"
                });
            }


        },


        //================= Dealer Listing =================//
        Dealers: function($scope) {

            let dealer_slider = $scope.find('.dl_slider_wrapper');
            if ( dealer_slider.length > 0 ) {
                dealer_slider.slick({
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    responsive: [{
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: 3
                      }
                    }, {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 2
                      }
                    }, {
                      breakpoint: 576,
                      settings: {
                        slidesToShow: 1
                      }
                    }]
                  })
            }

            //===== Dealers 04
            let dealer_slider4 = $scope.find('.dealership-slider');
            if ( dealer_slider4.length > 0 ) {
                const dealerSlider = new Swiper(".dealership-slider", {
                    loop: true,
                    spaceBetween: 24,
                    autoplay: true,
                    slidesPerView: 3,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16
                        },
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        },
                        1400: {
                            slidesPerView: 4
                        }
                    }
                }); //sr feedback slider
            }

        },



        //=========== Countdown ==============//
        Countdown: function ($scope) {

            let countdownTimer = $scope.find('.countdown-timer');
            if ( countdownTimer.length > 0 ) {
                countdownTimer.each(function () {
                    var $data_date = $(this).data('date');
                    $(this).countdown({
                        date: $data_date
                    });
                });
            }
        }, //End Countdown



        //======= Magnific Video Popup =========//
        VideoPopup: function ($scope) {
            let videoPopup = $scope.find('.video-popup-btn');
            if ( videoPopup.length > 0 ) {
                videoPopup.magnificPopup({
                    type: 'iframe'
                });
            }
        },

        ThumbnailSlider: function () {
            var swiper_container = $(".iv_thumb_slider, .el-car-listing-slider-lg, .h3-feedback-slider");
            if (swiper_container.length) {
                swiper_container.each(function () {

                    const ivThumbControlSlider = new Swiper( ".iv_thumb_control_slider, .el-car-listing-slider-thumb, .h3-feedback-client-slider", {
                        slidesPerView: 4,
                        loop: true,
                        spaceBetween: 24,
                        breakpoints: {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 16
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 16
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 24
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 24
                            }
                        }
                    });

                    var th = $(this),
                        i = (th.attr("id"), th.data("perpage") || 1),
                        a = th.data("loop"),
                        e = th.data("speed") || 1000,
                        o = th.data("space") || 0,
                        l = th.data("effect"),
                        c = th.data("center"),
                        ef = th.data("effect") || 'slide',
                        pl = th.data("autoplay"),
                        nex = th.data("next"),
                        pre = th.data("prev"),
                        pag = th.data("pagination"),
                        pagtype = th.data("paginationtype"),
                        d = th.data("direction") || "horizontal",
                        r = th.data("breakpoints");

                    new Swiper( this, {
                        slidesPerView: i,
                        direction: d,
                        spaceBetween: o,
                        loop: a,
                        speed: e,
                        effect: l,
                        breakpoints: r,
                        centeredSlides: c,
                        autoplay: {
                            delay: 5000
                        },
                        //effect: ef,
                        fadeEffect: {
                            crossFade: true
                        },
                        pagination: {
                            el: pag,
                            type: pagtype,
                            clickable: !0
                        },
                        navigation: {
                            nextEl: nex,
                            prevEl: pre
                        },

                        thumbs: {
                            swiper: ivThumbControlSlider
                        }
                    })
                    swiper_container.hover(function () {
                        (this).swiper.autoplay.stop();
                    }, function () {
                        (this).swiper.autoplay.start();
                    });



                })
            }


            // Financial Calculator
            const checkbox = document.querySelector(".iv_calculate_form button.btn-secondary");
            if (checkbox != null ) {
                checkbox.addEventListener("click", checkboxClick, false);

                function checkboxClick(event) {

                    document.getElementById("result_output").innerHTML = '';

                    let vehicle_price = document.querySelector(".iv_calculate_form #vehicle_price").value;
                    let down_payment = document.querySelector(".iv_calculate_form #down_payment").value;
                    let interest_rate = document.querySelector(".iv_calculate_form #interest_rate").value;
                    let no_of_month = document.querySelector(".iv_calculate_form #no_of_month").value;

                    if (vehicle_price != '' && down_payment != '' && interest_rate != '' && no_of_month != '') {



                        let interest = (Number(interest_rate) / 100);
                        let totalInterest = Number(interest.toFixed(2)) * 12;
                        let vPriceInterest = (Number(vehicle_price) - Number(down_payment)) * Number(interest);
                        let vPriceWithInterest = (Number(vPriceInterest.toFixed(2)) + Number(totalInterest.toFixed(2)));
                        let totalAmount = Number(vPriceWithInterest) + Number(vehicle_price) - Number(down_payment);
                        let monthly_amount = totalAmount / no_of_month;


                        let result_output = document.getElementById("result_output");
                        let result_wrapper = document.createElement('div');
                        result_wrapper.setAttribute('class', 'result_wrapper');

                        // Monthly payment
                        let monthly_pay = document.createElement('p');
                        monthly_pay.innerHTML += autohive_translator.monthly_payment + monthly_amount.toFixed(2);
                        result_wrapper.appendChild(monthly_pay);

                        // Total Interest payment
                        let total_interest = document.createElement('p');
                        total_interest.innerHTML += autohive_translator.total_interest + vPriceWithInterest.toFixed(2);
                        result_wrapper.appendChild(total_interest);

                        // Total Amount to pay
                        let total_amount = document.createElement('p');
                        total_amount.innerHTML += autohive_translator.total_amount + totalAmount.toFixed(2);
                        result_wrapper.appendChild(total_amount);


                        result_output.appendChild(result_wrapper);
                    }
                    else {
                        let formInputs = document.querySelectorAll(".iv_calculate_form input");

                        formInputs.forEach(function (e) {
                            e.value == '' ? e.style = 'border-color:red' : '';
                            e.addEventListener('keyup', function () {
                                e.style = 'border-color:#0b163f12';
                            })
                        })
                        var warning = document.createElement('span');
                        warning.setAttribute('class', 'mt-20 d-block');
                        warning.innerHTML = autohive_translator.warning_txt;
                        result_output.appendChild(warning);

                    }
                    event.preventDefault();
                }
            }

        },

        SwiperControls: function () {
            var swiper_container = $(".swiper");
            if (swiper_container.length) {
                swiper_container.each(function () {

                    var th = $(this),
                        i = (th.attr("id"), th.data("perpage") || 1),
                        a = th.data("loop"),
                        e = th.data("speed") || 1000,
                        o = th.data("space") || 0,
                        l = th.data("effect"),
                        c = th.data("center"),
                        pl = th.data("autoplay"),
                        nex = th.data("next"),
                        pre = th.data("prev"),
                        pag = th.data("pagination"),
                        pagtype = th.data("paginationtype"),
                        d = th.data("direction") || "horizontal",
                        r = th.data("breakpoints");

                    const swiperSliderControls = new Swiper( this, {
                        slidesPerView: i,
                        direction: d,
                        spaceBetween: o,
                        loop: a,
                        speed: e,
                        effect: l,
                        breakpoints: r,
                        centeredSlides: c,
                        autoplay: {
                            delay: 5000
                        },
                        fadeEffect: {
                            crossFade: true
                        },
                        pagination: {
                            el: pag,
                            type: pagtype,
                            clickable: true
                        },
                        navigation: {
                            nextEl: nex,
                            prevEl: pre
                        }
                    })
                    swiper_container.hover(function () {
                        (this).swiper.autoplay.stop();
                    }, function () {
                        (this).swiper.autoplay.start();
                    });

                })


            }


        },

    };
    $(window).on('elementor/frontend/init', Autohive.init);
}(jQuery, window.elementorFrontend));
