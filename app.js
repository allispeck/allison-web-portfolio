//form js

$(document).ready(function () {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    const url = new URL(window.location.href);

    if (url.searchParams.get('email-sent')) {
        Toast.fire({
            icon: 'success',
            title: 'Message Sent!'
        });
    }


    $('.flip').click(function () {
        $('.cont-flip').toggleClass('flipped');
        return false;
    });

    $('.contact-form').delay(300).submit(function (e) {
        // e.preventDefault();
        $('.cont-flip').toggleClass('flipped');

        $('#submitBtn').text('Thank you!');

        //setTimeout(location.reload.bind(location), 2000);
    })

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


