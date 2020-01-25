//form js

$(document).ready(function () {
    $('.flip').click(function () {
        $('.cont-flip').toggleClass('flipped');
        return false;
    });

    // $('.contact-form').delay(300).submit(function (e) {
    //     e.preventDefault();
    //     $('.cont-flip').toggleClass('flipped');
    //
    //     $('#submitBtn').text('Thank you!');
    //
    //     setTimeout(location.reload.bind(location), 2000);
    // })

});

// smooth scroll

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});


$('.carousel').carousel();