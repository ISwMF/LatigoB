// El watch id referencia al actual 'watchAcceleration'
var watchID = null;

function startView() {
  // Importante el manejador de eventos para que cargue las librerías
  document.addEventListener("deviceready", onDeviceReady, false);

}

// Las APIs del dispositivo listas
//
function onDeviceReady() {
  alert("ready");
  startWatch();
}

// Empezar a ver la aceleracion
//
function startWatch() {
  // Actualizar la aceleracion cada 0.5s
  var options = {
    frequency: 100
  };

  watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// Detener la aceleracion
//
function stopView() {
  navigator.accelerometer.clearWatch(watchID);
  watchID = null;
}

// onSuccess: Captura la aceleracion actual
//
function onSuccess(acceleration) {
  var TotalAcceleration = Math.abs(acceleration.x) + Math.abs(acceleration.y) + Math.abs(acceleration.z);
  if (TotalAcceleration >= 30 && TotalAcceleration <= 50) {
    var pla = new player();
    pla.play();
  }
}

// onError: Al fallar el captor
//
function onError() {
  alert("ERROR!");
}
