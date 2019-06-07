$(document).ready(function () {
    var itemCount = 0;
    var priceTotal = 0;


    $('.dodadi').click('click', function () {
        itemCount++;
        $('#itemCount').html(itemCount).css('display', 'block');

        $(this).parent().clone().appendTo('#cartItems').append('<button class="removeItem">Remove Item</button>');

        var price = parseInt($(this).parent().find('.cena').text());
        priceTotal += price;

        $('#cartTotal').text("Вкупо ден: " + priceTotal);

    });
    $('.container-kosnicka').click(function () {
        $('#shoppingCart').toggle();
    });

    $('.izbrisi').click(function () {
        itemCount = 0;
        priceTotal = 0;

        $('#itemCount').css('display', '0');
        $('#cartItems').html('');
        $('#cartTotal').text("Вкупо денари: " + priceTotal);
    });

    $('#shoppingCart').on('click', '.removeItem', function () {
        $(this).parent().remove();
        itemCount--;
        $('#itemCount').text(itemCount);

        var price = parseInt($(this).parent().find('.cena').text());
        priceTotal -= price;
        $('#cartTotal').text("Вкупо ден: " + priceTotal);
        if (priceTotal <= 1) {
            $('#cartTotal').text("Вкупо ден: 0");
        };

        if (itemCount == 0) {
            $('#itemCount').css('display', '0');
        }

    });
    $('#closeList').click(function () {
        $('#shoppingCart').hide();
    });

});