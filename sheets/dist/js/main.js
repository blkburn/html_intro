// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 }
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc,
  })
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map })
}

// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9
  } else {
    document.querySelector('#navbar').style.opacity = 1
  }
})

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    )
  }
})

$('.drawer').drawer({
  class: {
    nav: 'drawer-nav',
    toggle: 'drawer-toggle',
    overlay: 'drawer-overlay',
    open: 'drawer-open',
    close: 'drawer-close',
    dropdown: 'drawer-dropdown',
  },
  iscroll: {
    // Configuring the iScroll
    // https://github.com/cubiq/iscroll#configuring-the-iscroll
    mouseWheel: true,
    preventDefault: false,
  },
  showOverlay: true,
})

$('.drawer').on('drawer.opened', function () {})

$('.drawer').on('drawer.closed', function () {})

var myData = {
  address: {
    House_Number: 505,
    Street_Direction: '',
    Street_Name: 'Claremont',
    Street_Type: 'Street',
    Apt: '15L',
    Burough: 'Brooklyn',
    State: 'NY',
    Zip: '10451',
    Phone: '718-777-7777',
  },
  casehead: 0,
  adults: [
    { Last_Name: 'Foo', First_Name: 'A', Sex: 'M', Date_Of_Birth: '01011980' },
  ],
  children: [],
}

var textedJson = JSON.stringify(myData, undefined, 4)
$('#myTextarea').text(textedJson)
