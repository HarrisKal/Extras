// index.html: <button>Get Location</button>

const button = document.querySelector('button');

button.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        // Get the location of coords using geocoding API
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        fetch(url).then(res => res.json()).then(data =>  {
            console.table(data.address);
        }).catch(() => {
            console.log("There was a problem")
        })
    })
})