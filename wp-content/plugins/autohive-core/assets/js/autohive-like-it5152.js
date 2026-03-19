(function ($) {
    'use strict';

    $(document).ready(function () {
        jQuery(document).on('click', '.like-button', function () {
 
            var post_id = Number( jQuery(this).attr('data-id') ),
                nonce = jQuery(this).attr("data-nonce"),
                $this = jQuery(this);

            let likedItems = getCookie('likedItems') != null ?  JSON.parse(getCookie('likedItems')) : [];

            if (likedItems.length > 0 && likedItems.includes(post_id)) {
                return false;
            } else { 
                likedItems.push(  post_id ); 
                setCookie('likedItems', JSON.stringify(likedItems))
            }  

            jQuery.ajax({
                url: autohive_like_it.ajax_url,
                type: 'post',
                data: {
                    action: 'pt_like_it',
                    post_id: post_id,
                    nonce: nonce
                },
                success: function (response) {
                    
                    let like_text = response <= 1 ? ' Like' : ' Likes';
                    jQuery('#like-count-' + post_id).html(response + like_text);
                    
                    $this.addClass('liked-button');
                    jQuery('.liked-button i').removeClass('fa-regular fa-heart').addClass('fa-solid fa-heart');
                },
                complete: function () {
                    jQuery('.liked-button').on('click', function (e) {
                        let alert = '<div class="alredy_liked alert alert-warning alert-dismissible fade show" role="alert">You already liked this post.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
                        $('body').append(alert);
                        setTimeout(function () { 
                            $('.alredy_liked').remove();
                        }, 3000);
                    })
                },
                error: function (jqXHR, textStatus, errorTh) {
                    console.log(jqXHR);
                    console.log(textStatus);
                }
            });


            return false;
        });

        jQuery('.liked-button').on('click', function (e) {
            let alert = '<div class="alredy_liked alert alert-warning alert-dismissible fade show" role="alert">You already liked this post.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
            $('body').append(alert);
            setTimeout(function () {
                $('.alredy_liked').remove();
            }, 3000);
        })

        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return null;
        }

    })

})(jQuery);