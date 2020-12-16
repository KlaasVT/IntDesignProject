

function initializeMap(){
    var mymap = L.map('mapid').setView([0,0], 2);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 2,
        accessToken: 'pk.eyJ1Ijoia2xhYXN2dCIsImEiOiJja2lya3huODkwcWszMnJyeDYxOGoybXJoIn0.uxm91QeO14zNKOljvA5BOw'
    }).addTo(mymap);
    var marker = L.marker([51.5, -0.09]).addTo(mymap);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
}

const showData = function(jsonObject){
    console.log(jsonObject);
}

const getData = function(){
    handleData("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?days=7", showData);
};

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    // handleFloatingLabel();
    // handlePasswordSwitcher();
    initializeMap();
    getData();
});