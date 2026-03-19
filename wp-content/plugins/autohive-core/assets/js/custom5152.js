; (function ($) {
    // USE STRICT
    "use strict";
    $(document).ready(function () {

        //MailChimp Newsletter
        $('[data-autohive-form]').each(function () {
            var $this = $(this);
            $('.form-result', $this).css('display', 'none');
            $this.submit(function () {
                $('button[type="submit"]', $this).addClass('clicked'); // Create a object and assign all fields name and value.

                var values = {};
                $('[name]', $this).each(function () {
                    var $this = $(this),
                        $name = $this.attr('name'),
                        $value = $this.val();
                    values[$name] = $value;
                }); // Make Request

                $.ajax({
                    url: $this.attr('action'),
                    type: 'POST',
                    data: values,
                    success: function success(data) {
                        if (data.error == true) {
                            $('.form-result', $this).addClass('alert-warning').removeClass('alert-success alert-danger').css('display', 'block');
                        } else {
                            $('.form-result', $this).addClass('alert-success').removeClass('alert-warning alert-danger').css('display', 'block');
                        }

                        $('.form-result > .content', $this).html(data.message);
                        $('button[type="submit"]', $this).removeClass('clicked');
                    },
                    error: function error() {
                        $('.form-result', $this).addClass('alert-danger').removeClass('alert-warning alert-success').css('display', 'block');
                        $('.form-result > .content', $this).html('Sorry, an error occurred.');
                        $('button[type="submit"]', $this).removeClass('clicked');
                    }
                });
                return false;
            });
        });

        // Inventory & Dealer Listing orderby
        $('.autohive_listing_filter').on('change', 'select.order_by', function () {
            $(this).closest('form').trigger('submit');
        });

        // Inventory & Dealer Listing orderby
        $('.equipment_cat_list').on('click', '.cat-item', function () {
            $(this).closest('form').trigger('submit');
        });



        // Page Printing
        $('.page_print').on('click', function () {
            window.print();
        })

        // Copy link script
        var copyText = document.querySelector(".link_copy");
        if (copyText != null) {
            var popupParant = document.querySelector(".right-btns, .eld-info-icons");
            copyText.addEventListener("click", function () {
                this.setAttribute('href', 'javascript:void(0)');
                navigator.clipboard.writeText(this.getAttribute('data-url'));

                let popupWarpper = document.createElement('div');
                popupWarpper.setAttribute('class', 'popup_warpper position-absolute');
                let popupText = document.createElement('span');
                popupText.innerHTML = 'Link Copied';
                popupWarpper.appendChild(popupText);
                popupParant.appendChild(popupWarpper);

                setTimeout(function () {
                    popupWarpper.remove();
                }, 2000);
            })
        }

        // Product add to cart button text remove =================
        var addToCartBtn   = document.querySelectorAll(".at_product_action a.button");
        addToCartBtn.forEach(function (element) {
            element.textContent = '';
        });


        $(document).on("mouseup", function (e) {
            var offCanvusMenu = $(".mobile-menu");

            if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
                $(".mobile-menu").removeClass("active");
            }
        });

        //section scrolldown =======================
        if ($('.right-btns a').length > 0 ) {
            $('.right-btns a').tooltip();
        }


        // Update Mini Cart ========================
        $('.add_to_cart_button').click(function () {
            setTimeout(() => {
                $.post({
                    url: woocommerce_params.ajax_url, // The AJAX URL
                    data: { 'action': 'autohive_update_mini_cart' }, // Send our PHP function
                    success: function (response) {
                        $('.apt_cart_box').html(response); // Repopulate the specific element with the new content
                        console.log(response)
                    }
                });
            }, 1000)
        })


        // Equivments listing link copy =======================
        $(document).ready(function($) {
            $(".copy_link_post").click(function() {
                var link = $(this).data("url");
                var $temp = $("<input>");
                $("body").append($temp);
                $temp.val(link).select();
                document.execCommand("copy");
                $temp.remove();
            });
        });

        var hero_slider_wraper = $(".at-hero-slider-wrapper");
        if (hero_slider_wraper.length > 0) {
            const at_hero_slider = new Swiper('.at-hero-slider-wrapper', {
                slidesPerView: 1,
                loop: true,
                spaceBetween: 0,
                autoplay: {
                    delay: 5000
                },
                speed: 900,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                }
            });
        }

        // Cycle Hero Slider =============================
        var cycle_hero_slider = new Swiper(".cycle-hero-slider", {
            slidesPerView: 1,
            spaceBetween: 24,
            autoplay: true,
            speed: 700,
            loop: true,
            loopedSlides: 6,
            pagination: {
                el: ".cycle-hero-pagination",
                type: "bullets",
                clickable: true,
                renderBullet: function (index, className) {
                    if (index + 1 >= 10) {
                        return '<span class="' + className + '">' + (index + 1) + "</span>";
                    } else {
                        return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
                    }
                }
            }
        });
        $(".cycle-hero-slider").hover(function () {
            (this).swiper.autoplay.stop();
        }, function () {
            (this).swiper.autoplay.start();
        });

        var cycle_hero_slider_control = new Swiper(".cl-hero-slider-control", {
            slidesPerView: 3,
            autoplay: true,
            speed: 700,
            centeredSlides: true,
            loop: true,
            slideToClickedSlide: true,
            navigation: {
                prevEl: ".cl-hero-slides-control-prev",
                nextEl: ".cl-hero-slides-control-next"
            }
        });
        $(".cl-hero-slider-control").hover(function () {
            (this).swiper.autoplay.stop();
        }, function () {
            (this).swiper.autoplay.start();
        });


        /*Password Check*/
        let submitBtn = $('#user-registration-form .btn-primary');
        if (submitBtn.length > 0) {
            let Password = $('#user_registration_password');
            let ConfirmPass = $('#user_registration_confirm_password');
            let passWrap = $('.confirm_pass');
            let PassWrapp = document.querySelector('.confirm_pass');
            let warning = '<p class="warning mt-2">Password dose not match!</p>';

            submitBtn.on('click', function () {    
                if (Password.val() !== ConfirmPass.val()) {
                    ConfirmPass.css('border', '1px solid red');
                    passWrap.append(warning);
                
                    return false;
                }
            });

            ConfirmPass.on('keyup', function () {
                $('.warning').remove();               
                ConfirmPass.css('border', 'none');                
            });
        }
        
    });

})(jQuery);
