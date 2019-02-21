$(document).ready(function () {
    $('.dropdown-toggle-position').mouseover(function() {
        $('.drop-position').show();
    })

    $('.dropdown-toggle-position').mouseout(function() {
        t = setTimeout(function() {
            $('.drop-position').hide();
        }, 100);

        $('.drop-position').on('mouseenter', function() {
            $('.drop-position').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.drop-position').hide();
        })
    })
})


$(document).ready(function () {
    $('.dropdown-toggle-grid').mouseover(function() {
        $('.drop-grid').show();
    })

    $('.dropdown-toggle-grid').mouseout(function() {
        t = setTimeout(function() {
            $('.drop-grid').hide();
        }, 100);

        $('.drop-grid').on('mouseenter', function() {
            $('.drop-grid').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.drop-grid').hide();
        })
    })
})

$(document).ready(function () {
    $('.dropdown-toggle-anim').mouseover(function() {
        $('.drop-anim').show();
    })

    $('.dropdown-toggle-anim').mouseout(function() {
        t = setTimeout(function() {
            $('.drop-anim').hide();
        }, 100);

        $('.drop-anim').on('mouseenter', function() {
            $('.drop-anim').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.drop-anim').hide();
        })
    })
})

$(document).ready(function () {
    $('.dropdown-toggle-resp').mouseover(function() {
        $('.drop-resp').show();
    })

    $('.dropdown-toggle-resp').mouseout(function() {
        t = setTimeout(function() {
            $('.drop-resp').hide();
        }, 100);

        $('.drop-resp').on('mouseenter', function() {
            $('.drop-resp').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.drop-resp').hide();
        })
    })
})