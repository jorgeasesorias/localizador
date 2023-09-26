function updateTimeAndLocation() {
    const timeElement = document.getElementById('time');
    const locationElement = document.getElementById('location');

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const locationString = now.toLocaleDateString(undefined, options);

    timeElement.textContent = 'Hora: ' + timeString;
    locationElement.textContent = 'Ubicación: ' + locationString;
}

updateTimeAndLocation();
setInterval(updateTimeAndLocation, 1000);
