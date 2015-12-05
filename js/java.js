var map = L.map('map').setView([26.271847, -80.104343], 2);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'gataki.obho3po2',
    accessToken: 'pk.eyJ1IjoiZ2F0YWtpIiwiYSI6ImNpaDhkMXZmNzB0OW51Y2tsMnN6NnhyNjIifQ.HzeBmuFJR-mdk9st0JYVbQ'
}).addTo(map);


var marker1 = L.marker([51.399205, 10.23925700000001]).addTo(map);
var marker2 = L.marker([47.189712, 2.373045999999988]).addTo(map);
var marker3 = L.marker([39.842286, -8.12988200000001]).addTo(map);
var marker4 = L.marker([55.229023, -2.4609370000000013]).addTo(map);
var marker5 = L.marker([34.524661, 103.710937]).addTo(map);

var marker6 = L.marker([24.766784, 77.343749]).addTo(map);
var marker7 = L.marker([38.61687, 139.921875]).addTo(map);
var marker8 = L.marker([14.43468, 122.43164000000002]).addTo(map);
var marker9 = L.marker([1.493971, 115.83984299999997]).addTo(map);
var marker10 = L.marker([23.079731, -101.865234]).addTo(map);

var marker11 = L.marker([-13.838079, -73.21289]).addTo(map);
var marker12 = L.marker([13.710035, 108.632812]).addTo(map);
var marker13 = L.marker([36.633162, 127.83691399999998]).addTo(map);
var marker14 = L.marker([39.487084, 21.807861000000003]).addTo(map);
var marker15 = L.marker([55.813629, 23.620605000000012]).addTo(map);
var marker16 = L.marker([39.164141, 34.84863200000001]).addTo(map);


marker1.bindPopup("Germany...");
marker1.on('click', function (e) {
    this.openPopup();
});

marker2.bindPopup("France...");
marker2.on('click', function (e) {
    this.openPopup();
});

marker3.bindPopup("Portugal...");
marker3.on('click', function (e) {
    this.openPopup();
});

marker4.bindPopup("England...");
marker4.on('click', function (e) {
    this.openPopup();
});

marker5.bindPopup("China...");
marker5.on('click', function (e) {
    this.openPopup();
});

marker6.bindPopup("India...");
marker6.on('click', function (e) {
    this.openPopup();
});

marker7.bindPopup("Japan...");
marker7.on('click', function (e) {
    this.openPopup();
});

marker8.bindPopup("Phillippines...");
marker8.on('click', function (e) {
    this.openPopup();
});

marker9.bindPopup("Indonesia...");
marker9.on('click', function (e) {
    this.openPopup();
});

marker10.bindPopup("Aztec...");
marker10.on('click', function (e) {
    this.openPopup();
});

marker11.bindPopup("Inca...");
marker11.on('click', function (e) {
    this.openPopup();
});

marker12.bindPopup("Vietnam...");
marker12.on('click', function (e) {
    this.openPopup();
});

marker13.bindPopup("Korea...");
marker13.on('click', function (e) {
    this.openPopup();
});

marker14.bindPopup("Greece...");
marker14.on('click', function (e) {
    this.openPopup();
});

marker15.bindPopup("Latvia...");
marker15.on('click', function (e) {
    this.openPopup();
});

marker16.bindPopup("Turkey...");
marker16.on('click', function (e) {
    this.openPopup();
});