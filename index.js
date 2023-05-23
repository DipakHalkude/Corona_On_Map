function updateMap() {
  console.log("Your data is up-to-date");
  fetch("/data.json")
    .then(response => response.json())
    .then((rsp) => {
      console.log(rsp.data);
      rsp.data.forEach(element => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
        if (cases > 255) {
          color1 = "rgb(255,0,0)";
        }

        else {
          color1 = `rgb(${cases},0,0)`;
        }

        // Mark on the Map
        const marker = new mapboxgl.Marker({
          draggable: false,
          color: color1
        })
          .setLngLat([longitude, latitude])
          .addTo(map);



      });


    })
}

setInterval(updateMap,20000);