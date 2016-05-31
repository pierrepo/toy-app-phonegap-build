

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}


// https://github.com/apache/cordova-plugin-geolocation/blob/e529db6/README.md
// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: ' + position.coords.latitude + '\n' +
                        'Longitude: ' + position.coords.longitude + '\n' +
                        'Accuracy: ' + position.coords.accuracy + '\n' +
                        'Timestamp:' + position.timestamp + '\n' ;

};

// onError Callback receives a PositionError object
//
function onError(error) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'code: ' + error.code    + '\n' +
                        'message: ' + error.message + '\n' ;
}

navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});

