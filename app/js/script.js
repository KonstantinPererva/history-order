$(document).ready(function() {
    $('.form-return-select').niceSelect();

    //open popup return
    $('[data-button="open-popup-return"]').click(function () {
        openPopupReturn();
    });

    $('[data-submit="form-return"]').click(function (e) {
        e.preventDefault();
        openPopupSuccessReturn()
    });

    $('[data-close="form-return"]').click(function () {
        closePopupReturn()
    });

    $('[data-close="return-success"]').click(function () {
        closePopupSuccessReturn()
    });

    function closePopupReturn() {
        $('[data-popup="return"]').fadeOut();
    }

    function openPopupReturn() {
        $('[data-popup="return"]').fadeIn();
    }

    function openPopupSuccessReturn() {
        $('[data-popup="return"]').fadeOut();
        $('[data-popup="return-success"]').fadeIn();
    }

    function closePopupSuccessReturn() {
        $('[data-popup="return-success"]').fadeOut();
    }
});