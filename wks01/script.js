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

