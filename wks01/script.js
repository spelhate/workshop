/*function ShowCitySelected() {
    var selectCity = document.getElementById("CitySelector");
    var selectedOption = selectCity.options[selectCity.selectedIndex].text;
    var region = selectCity.options[selectCity.selectedIndex].getAttribute("data-infos");
    document.getElementById("output").innerHTML = "Vous avez choisi " + selectedOption + " qui se situe en " + region + ".";
  }*/
  
function ShowCitySelected(selTag) {
  var region = selTag.options[selTag.selectedIndex].getAttribute("data-infos");
  document.getElementById("output").innerHTML = "Vous avez choisi " + selTag.options[selTag.selectedIndex].textContent + " qui se situe en " + region + ".";
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
      select.add(selectOption);
    }
  }else{}
};

xhr.send();

