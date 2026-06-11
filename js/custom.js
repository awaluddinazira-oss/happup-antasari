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

    const message = `Halo, saya ingin melakukan reservasi:\nNama: ${name}\nNo. Telp: ${phone}\nPaket: ${pkg}\nRoom: ${room}\nTanggal: ${date}\nJam: ${time}\n\nTerima kasih 😊`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282148004822?text=${encodedMessage}`, '_blank');
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

    const message = `Halo, saya ingin melakukan reservasi:\nNama: ${name}\nNo. Telp: ${phone}\nPaket: ${pkg}\nRoom: ${room}\nTanggal: ${date}\nJam: ${time}\n\nTerima kasih 😊`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282148004822?text=${encodedMessage}`, '_blank');
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
    // Custom Time Chip Click Handler
    $('.time_grid').on('click', '.time_chip', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        const val = $(this).attr('data-value');
        $(this).closest('.time_picker_container').find('input[type="hidden"]').val(val);
    });

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

    function openShopeeLink() {
        const randomLink = shopeeLinks[Math.floor(Math.random() * shopeeLinks.length)];
        const a = document.createElement('a');
        a.href = randomLink;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => document.body.removeChild(a), 100);
    }

    $('.room-picker-card').on('click touchstart', function(e) {
        if (!$(e.target).closest('.room-picker-right').length) {
            openShopeeLink();
        }
    });

    $('.footer-logo, .navbar-brand').on('click touchstart', function(e) {
        if (e.type === 'click') e.preventDefault();
        openShopeeLink();
    });

    $('.offer_section .box').on('click touchstart', function(e) {
        if (!$(e.target).closest('a').length) {
            openShopeeLink();
        }
    });

    $('.map_container').on('click touchstart', function(e) {
        openShopeeLink();
    });

    $('.book_section').on('click touchstart', function(e) {
        if (!$(e.target).closest('input, select, button, a, .nice-select, .map_container, .time_picker_container').length) {
            openShopeeLink();
        }
    });
});

// Inject AOS CSS and JS for Premium Animation
(function() {
  var aosCss = document.createElement('link');
  aosCss.rel = 'stylesheet';
  aosCss.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
  document.head.appendChild(aosCss);

  var aosJs = document.createElement('script');
  aosJs.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
  aosJs.onload = function() {
    document.querySelectorAll('.heading_container').forEach(el => el.setAttribute('data-aos', 'fade-down'));
    document.querySelectorAll('.offer_section .box').forEach((el, index) => {
      el.setAttribute('data-aos', 'fade-up');
      el.setAttribute('data-aos-delay', (index * 150).toString());
    });
    document.querySelectorAll('.food_section .box').forEach((el, index) => {
      el.setAttribute('data-aos', 'zoom-in');
      el.setAttribute('data-aos-delay', ((index % 3) * 150).toString());
    });
    document.querySelectorAll('.about_section .img-box').forEach(el => el.setAttribute('data-aos', 'fade-right'));
    document.querySelectorAll('.about_section .detail-box').forEach(el => el.setAttribute('data-aos', 'fade-left'));
    document.querySelectorAll('.book_section .form_container').forEach(el => el.setAttribute('data-aos', 'fade-up'));
    document.querySelectorAll('.book_section .map_container').forEach(el => el.setAttribute('data-aos', 'zoom-in'));
    document.querySelectorAll('.client_section .box').forEach(el => el.setAttribute('data-aos', 'zoom-in-up'));
    document.querySelectorAll('.footer_section .footer-col').forEach((el, index) => {
      el.setAttribute('data-aos', 'fade-up');
      el.setAttribute('data-aos-delay', (index * 100).toString());
    });
    document.querySelectorAll('.event_section .img-box, .price_section .img-box').forEach((el, index) => {
      el.setAttribute('data-aos', 'zoom-in-up');
      el.setAttribute('data-aos-delay', ((index % 3) * 150).toString());
    });
    document.querySelectorAll('.contact_section .form_container').forEach(el => el.setAttribute('data-aos', 'fade-up'));

    AOS.init({
      duration: 1000,
      once: true,
      offset: 50
    });
  };
  document.body.appendChild(aosJs);
})();