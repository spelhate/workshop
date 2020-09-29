// Map-------

var mymap = L.map('mapId').setView([0,0], 1);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibGlseXAiLCJhIjoiY2tmbnBjcnJlMGYwejJwb2Z2dmhhMWl5NyJ9._cHF_0MIbAuu21V2s7Swvg'
    }).addTo(mymap);


/*function ShowCitySelected() {
    var selectCity = document.getElementById("CitySelector");
    var selectedOption = selectCity.options[selectCity.selectedIndex].text;
    var region = selectCity.options[selectCity.selectedIndex].getAttribute("data-infos");
    document.getElementById("output").innerHTML = "Vous avez choisi " + selectedOption + " qui se situe en " + region + ".";
  }*/
  
function ShowCitySelected(selTag) {
  var region = selTag.options[selTag.selectedIndex].getAttribute("data-infos");
  document.getElementById("output").innerHTML = "Vous avez choisi " + selTag.options[selTag.selectedIndex].textContent + " qui se situe en " + region + ".";
  var latitude = selTag.options[selTag.selectedIndex].getAttribute("latitude");
  var longitude = selTag.options[selTag.selectedIndex].getAttribute("longitude");
  mymap.flyTo([latitude, longitude], 10);
  L.marker([latitude, longitude]).addTo(mymap);

}

var select = document.getElementById('CitySelector');
select.length = 0;

var defaultText = document.createElement('option');
defaultText.textContent = "Sélectionner une ville"

select.add(defaultText);
select.selectedIndex = 0;

var url = "data.json";

var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onload = function(){
  if (xhr.status === 200){
    const data = JSON.parse(xhr.responseText);
    var selectOption;
    for ( let i = 0; i < data.length; i++){
      selectOption = document.createElement('option');
      selectOption.text = data[i].city;
      selectOption.value = data[i].id;
      selectOption.setAttribute("data-infos", data[i].infos);
      selectOption.setAttribute("latitude", data[i].lat);
      selectOption.setAttribute("longitude", data[i].lon);
      select.add(selectOption);
    }
  }else{};

};

xhr.send();