function ShowCitySelected(selTag) {
    var selectCity = document.getElementById("CitySelector");
    var selectedOption = selectCity.options[selectCity.selectedIndex].text;
    document.getElementById("output").innerHTML = "Vous avez choisi " + selectedOption;
  }