//smooth scrolling

$('#navbar a, .btn').on('click', function (event) {

    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 130
            },
            800
        )
    }
});

//sticky nav background

/*
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.getElementById('navbar').style.opacity = 0.9;
    }
    else {
        document.getElementById('navbar').style.opacity = 1;
    }

});
*/

// map


function initMap() {

    const loc = { lat: 31.629473, lng: -7.981084 };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: loc,
        zoom: 12,
    });

    const marker = new google.maps.Marker({ position: loc, map: map });

}