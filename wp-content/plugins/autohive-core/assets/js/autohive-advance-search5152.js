(function ($) {
    // USE STRICT
    "use strict";
    let advance_search_form_1 = document.querySelector('.advance_search_form_1');
    let advance_search_form_2 = document.querySelector('.advance_search_form_2');

    if ( advance_search_form_1 != null ) {
        let selectBrand = document.querySelector('#select_brand');
        let bodyType = document.querySelector('#body_type');
        let model_ = document.querySelector('#select_model');
        let transmissions = document.querySelector('#car_transmissions');

        if (selectBrand != null) {
       
            selectBrand.onchange = function (e) {
                bodyType.innerHTML = '';
                bodyType.setAttribute('data-brand', this.value);

                listing_advance_search_brand();
            };

            function listing_advance_search_brand() {

                var $brand = bodyType.getAttribute('data-brand');
                var $setting = 'brand=' + $brand;

                return $.ajax({
                    type: "post",
                    url: autohive_advance_search.ajax_url + '?action=filter_listing',
                    data: $setting,
                    dataType: "JSON",
                    beforeSend: function () {
                        var s_option = document.createElement('option');
                        s_option.setAttribute('value', '');
                        s_option.innerHTML = autohive_advance_search.select_option;
                        bodyType.appendChild(s_option);
                    },
                    success: function (res) {

                        if (res.success) {

                            var $posts = (res.data.posts) ? res.data.posts : [];

                            if ($posts.length > 0) {
                                for (let $i = 0; $i < $posts.length; $i++) {
                                    let $self = $posts[$i];
                                    if (!$self) {
                                        continue;
                                    }
                                
                                    var bodyType_ = $self.body_type;
                                    if (bodyType_.length != 0) {
                                        bodyType_.forEach(element => {
                                            let option = document.createElement('option');
                                            option.setAttribute('class', 'bodytype_list');
                                            option.setAttribute('value', element);
                                            option.innerHTML = element;

                                            bodyType.appendChild(option);
                                        });
                                    }

                                }

                            }

                        }

                    },
                    error: function (xhr) {
                        console.log('xhr error: ' + xhr);
                    }
                
                });
            };
        }
    

        if (bodyType != null) {
            bodyType.onchange = function (e) {
                model_.innerHTML = '';
                model_.setAttribute('data-bodytype', this.value);

                listing_advance_search_bodytype();
            };

            function listing_advance_search_bodytype() {
                var $brand = bodyType.getAttribute('data-brand');
                var $body_type = model_.getAttribute('data-bodytype');
                var $setting = 'brand=' + $brand + '&car_body_type=' + $body_type;

                return $.ajax({
                    type: "post",
                    url: autohive_advance_search.ajax_url + '?action=filter_listing',
                    data: $setting,
                    dataType: "JSON",
                    beforeSend: function () {
                        var s_option = document.createElement('option');
                        s_option.setAttribute('value', '');
                        s_option.innerHTML = autohive_advance_search.select_option;
                        model_.appendChild(s_option);
                    },
                    success: function (res) {

                        if (res.success) {

                            var $posts = (res.data.posts) ? res.data.posts : [];

                            if ($posts.length > 0) {
                                for (let $i = 0; $i < $posts.length; $i++) {
                                    let $self = $posts[$i];
                                    if (!$self) {
                                        continue;
                                    }

                                    var selectModel = $self.model;
                                    if (selectModel != null) {
                                        selectModel.forEach(item => {
                                            let moption = document.createElement('option');
                                            moption.setAttribute('class', 'model_list');
                                            moption.setAttribute('value', item);
                                            moption.innerHTML = item;
                                            model_.appendChild(moption);
                                        });
                                    }


                                }

                            }

                        }

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }


                });
            };
        }
    
    
        if (model_ != null) {
            model_.onchange = function (e) {
                transmissions.innerHTML = '';
                transmissions.setAttribute('data-model', this.value);

                listing_advance_search_model();

            };
            function listing_advance_search_model() {


                var $carModel = transmissions.getAttribute('data-model');
                var $setting = 'car_model=' + $carModel;

                return $.ajax({
                    type: "post",
                    url: autohive_advance_search.ajax_url + '?action=filter_listing',
                    data: $setting,
                    dataType: "JSON",
                    beforeSend: function () {
                        var s_option = document.createElement('option');
                        s_option.setAttribute('value', '');
                        s_option.innerHTML = autohive_advance_search.select_option;
                        transmissions.appendChild(s_option);
                    },
                    success: function (res) {

                        if (res.success) {

                            var $posts = (res.data.posts) ? res.data.posts : [];

                            if ($posts.length > 0) {
                                for (let $i = 0; $i < $posts.length; $i++) {
                                    let $self = $posts[$i];
                                    if (!$self) {
                                        continue;
                                    }
                            
                                    var carTransmissions = $self.transmissions;
                                    if (carTransmissions != null) {
                                        carTransmissions.forEach(item => {
                                            let toption = document.createElement('option');
                                            toption.setAttribute('class', 'transmissions');
                                            toption.setAttribute('value', item);
                                            toption.innerHTML = item;

                                            transmissions.appendChild(toption);
                                        });
                                    }


                                }

                            }

                        }

                    },
                    error: function (xhr) {
                        console.log('xhr error: ' + xhr);
                    }
                });
            };
        }
    }
    
    // Advance search form 2 ================================
    if (advance_search_form_2 != null) {
        
        let selectBrand2 = document.querySelector('#select_brand2');
        let model_2 = document.querySelector('#select_model2');
        let transmissions2 = document.querySelector('#car_transmissions2');

        if (selectBrand2 != null) {
       
            selectBrand2.onchange = function (e) {
                model_2.innerHTML = '';
                model_2.setAttribute('data-brand', this.value);

                listing_advance_search_brand2();
            };

            function listing_advance_search_brand2() {

                var $brand = model_2.getAttribute('data-brand');
                var $setting = 'brand=' + $brand;

                return $.ajax({
                    type: "post",
                    url: autohive_advance_search.ajax_url + '?action=filter_listing',
                    data: $setting,
                    dataType: "JSON",
                    beforeSend: function () {
                        var s_option = document.createElement('option');
                        s_option.setAttribute('value', '');
                        s_option.innerHTML = autohive_advance_search.select_option;
                        model_2.appendChild(s_option);
                    },
                    success: function (res) {

                        if (res.success) {

                            var $posts = (res.data.posts) ? res.data.posts : [];

                            if ($posts.length > 0) {
                                for (let $i = 0; $i < $posts.length; $i++) {
                                    let $self = $posts[$i];
                                    if (!$self) {
                                        continue;
                                    }
                                
                                    var carModel = $self.model;
                                    if (carModel.length != 0) {
                                        carModel.forEach(element => {
                                            let option = document.createElement('option');
                                            option.setAttribute('class', 'bodytype_list');
                                            option.setAttribute('value', element);
                                            option.innerHTML = element;

                                            model_2.appendChild(option);
                                        });
                                    }

                                }

                            }

                        }

                    }
                


                });
            };
        }    
    
        if (model_2 != null) {
            model_2.onchange = function (e) {
                transmissions2.innerHTML = '';
                transmissions2.setAttribute('data-model', this.value);

                listing_advance_search_model2();
            };

            function listing_advance_search_model2() {


                var $carModel = transmissions2.getAttribute('data-model');
                var $setting = 'car_model=' + $carModel;

                return $.ajax({
                    type: "post",
                    url: autohive_advance_search.ajax_url + '?action=filter_listing',
                    data: $setting,
                    dataType: "JSON",
                    beforeSend: function () {
                        var s_option = document.createElement('option');
                        s_option.setAttribute('value', '');
                        s_option.innerHTML = autohive_advance_search.select_option;
                        transmissions2.appendChild(s_option);
                    },
                    success: function (res) {

                        if (res.success) {

                            var $posts = (res.data.posts) ? res.data.posts : [];

                            if ($posts.length > 0) {
                                for (let $i = 0; $i < $posts.length; $i++) {
                                    let $self = $posts[$i];
                                    if (!$self) {
                                        continue;
                                    }
                            
                                    var carTransmissions = $self.transmissions;
                                    if (carTransmissions != null) {
                                        carTransmissions.forEach(item => {
                                            let toption = document.createElement('option');
                                            toption.setAttribute('class', 'transmissions');
                                            toption.setAttribute('value', item);
                                            toption.innerHTML = item;

                                            transmissions2.appendChild(toption);
                                        });
                                    }


                                }

                            }

                        }

                    }


                });
            };
        }
    }
    


})(jQuery);
