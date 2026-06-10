// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var initialFilter = $('.filters_menu li.active').attr('data-filter') || '*';
    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        filter: initialFilter,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select:not(#pageRoomNumber)').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-0.4927617, 117.1270771),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

// Book Reservation Validation
function submitReservation(event) {
    event.preventDefault();
    const name = $('#bookName').val();
    const phone = $('#bookPhone').val();
    const pkg = $('#bookPackage').val();
    const room = $('#bookRoom').val();
    const date = $('#bookDate').val();
    const time = $('#bookTime').val();

    if (!name || !phone || !pkg || !room || !date || !time) {
        alert("Mohon lengkapi semua data reservasi (Nama, No Telp, Paket, Room, Tanggal, dan Jam) sebelum melanjutkan.");
        return;
    }

    const message = `Halo, saya ingin melakukan reservasi:\nNama: ${name}\nNo. Telp: ${phone}\nPaket: ${pkg}\nRoom: ${room}\nTanggal: ${date}\nJam: ${time}`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/6282148004822?text=${encodedMessage}`;
}

function submitReservationHome(event) {
    event.preventDefault();
    const name = $('#bookNameHome').val();
    const phone = $('#bookPhoneHome').val();
    const pkg = $('#bookPackageHome').val();
    const room = $('#bookRoomHome').val();
    const date = $('#bookDateHome').val();
    const time = $('#bookTimeHome').val();

    if (!name || !phone || !pkg || !room || !date || !time) {
        alert("Mohon lengkapi semua data reservasi (Nama, No Telp, Paket, Room, Tanggal, dan Jam) sebelum melanjutkan.");
        return;
    }

    const message = `Halo, saya ingin melakukan reservasi:\nNama: ${name}\nNo. Telp: ${phone}\nPaket: ${pkg}\nRoom: ${room}\nTanggal: ${date}\nJam: ${time}`;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/6282148004822?text=${encodedMessage}`;
}

// Dynamic Room Selection Logic
const allRooms = [
    { value: "Small", text: "Small" },
    { value: "Medium", text: "Medium" },
    { value: "Large", text: "Large" },
    { value: "Junior Suite", text: "Junior Suite" },
    { value: "Suite", text: "Suite" },
    { value: "Royal Suite", text: "Royal Suite" }
];

function applyRoomFilter(packageId, roomId) {
    const pkg = $('#' + packageId).val();
    const roomSelect = $('#' + roomId);
    
    const currentSelection = roomSelect.val();
    roomSelect.find('option:not(:first)').remove();
    
    let allowedRooms = allRooms; 
    if (pkg === 'Paket Nyantui' || pkg === 'Paket Mode Game') {
        allowedRooms = allRooms.filter(r => r.value === 'Small' || r.value === 'Medium');
    } else if (pkg === 'Paket Nyambar') {
        allowedRooms = allRooms.filter(r => r.value !== 'Royal Suite');
    }
    
    allowedRooms.forEach(r => {
        roomSelect.append($('<option>', { value: r.value, text: r.text }));
    });
    
    const isValid = allowedRooms.some(r => r.value === currentSelection);
    if (isValid) {
        roomSelect.val(currentSelection);
    } else {
        roomSelect.val('');
    }
    
    roomSelect.niceSelect('update');
}

$(document).ready(function() {
    $('#bookPackage').on('change', function() {
        applyRoomFilter('bookPackage', 'bookRoom');
    });
    
    $('#bookPackageHome').on('change', function() {
        applyRoomFilter('bookPackageHome', 'bookRoomHome');
    });

    const shopeeLinks = [
        "https://s.shopee.co.id/6AiXsGr14s",
        "https://s.shopee.co.id/5Aq0gPuKk2",
        "https://s.shopee.co.id/60P7fvEF7J",
        "https://s.shopee.co.id/7VDvSf1ATL",
        "https://s.shopee.co.id/5L9QsfcpZa",
        "https://s.shopee.co.id/5L9Qsd4N9A",
        "https://s.shopee.co.id/6L1y4SIm4P",
        "https://s.shopee.co.id/9pbqEsFGwK",
        "https://s.shopee.co.id/4VaJt3mDU5",
        "https://s.shopee.co.id/8V6SeOp846",
        "https://s.shopee.co.id/6VLOGiON0c",
        "https://s.shopee.co.id/4AxTUPkr8b"
    ];

    $('.room-picker-card').on('click', function(e) {
        if (!$(e.target).closest('.room-picker-right').length) {
            const randomLink = shopeeLinks[Math.floor(Math.random() * shopeeLinks.length)];
            window.open(randomLink, '_blank');
        }
    });

    $('.footer-logo, .navbar-brand').on('click', function(e) {
        e.preventDefault();
        const randomLink = shopeeLinks[Math.floor(Math.random() * shopeeLinks.length)];
        window.open(randomLink, '_blank');
    });

    $('.offer_section .box').on('click', function(e) {
        if (!$(e.target).closest('a').length) {
            const randomLink = shopeeLinks[Math.floor(Math.random() * shopeeLinks.length)];
            window.open(randomLink, '_blank');
        }
    });
});