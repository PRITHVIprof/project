// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([20.5937, 78.9629], 5); // Center of India, zoom level 5

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Array of heritage sites with coordinates and image paths
    var sites = [
        {
            name: "Taj Mahal",
            coords: [27.1751, 78.0421],
            image: "images/tajmahal.jpg"
        },
        {
            name: "Qutub Minar",
            coords: [28.5244, 77.1855],
            image: "images/qutubminar.jpg"
        },
        {
            name: "Red Fort",
            coords: [28.6562, 77.2410],
            image: "images/redfort.jpg"
        },
        {
            name: "Humayun's Tomb",
            coords: [28.5933, 77.2507],
            image: "images/humayunstomb.jpeg"
        },
        {
            name: "Gateway of India",
            coords: [18.9220, 72.8347],
            image: "images/gatewayofindia.jpeg"
        },
        {
            name: "Amer Fort",
            coords: [26.9855, 75.8513],
            image: "images/amerfort.jpg"
        },
        {
            name: "Mysore Palace",
            coords: [12.3052, 76.6552],
            image: "images/mysorepalace.jpg"
        },
        {
            name: "Hawa Mahal",
            coords: [26.9239, 75.8267],
            image: "images/hawamahal.jpeg"
        },
        {
            name: "Victoria Memorial",
            coords: [22.5448, 88.3426],
            image: "images/victoriamemorial.jpeg"
        },
        {
            name: "Charminar",
            coords: [17.3616, 78.4747],
            image: "images/charminar.jpg"
        },
        {
            name: "Konark Sun Temple",
            coords: [19.8876, 86.0945],
            image: "images/konarksuntemple.jpg"
        },
        {
            name: "Meenakshi Temple",
            coords: [9.9195, 78.1195],
            image: "images/meenakshitemple.jpg"
        },
        {
            name: "Ajanta Caves",
            coords: [20.5522, 75.7033],
            image: "images/ajantacaves.jpg"
        },
        {
            name: "Ellora Caves",
            coords: [20.0269, 75.1790],
            image: "images/elloracaves.jpg"
        },
        {
            name: "Sanchi Stupa",
            coords: [23.4865, 77.7394],
            image: "images/sanchistupa.jpg"
        }

        // Add more sites as needed
    ];

    // Create markers and popups for each site
    sites.forEach(function (site) {
        var marker = L.marker(site.coords).addTo(map);
        marker.bindPopup('<b>' + site.name + '</b><br><img src="' + site.image + '" alt="' + site.name + '" style="width:100px;">');
    });
});
