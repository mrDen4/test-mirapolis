$(document).ready(function () {
    $('.item__btn').on('click', function (e) {
        $(e.target).closest('.structure__item').children('.item__about').toggleClass('item__about--active');
        if($(e.target).closest('.structure__item').children('.item__about').hasClass('item__about--active')) {
            $(e.target).text('-')
        } else {
            $(e.target).text('+')
        }
    });
});