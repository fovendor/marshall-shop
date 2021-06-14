// Модуль приложения
var app = (function($) {

    var $body = $('body'),
        page = $body.data('page'),
        options = {},
        optionsCatalog = _.extend({
            renderCartOnInit: false,
            renderMenuCartOnInit: true
        }, options),
        optionsCart = _.extend({
            renderCartOnInit: true,
            renderMenuCartOnInit: true
        }, options);

    function init() {
        if (page === 'catalog') {
            catalog.init();
            cart.init(optionsCatalog);
        }
        if (page === 'cart') {
            cart.init(optionsCart);
        }
    }

    return {
        init: init
    }

})(jQuery);

jQuery(document).ready(app.init);
