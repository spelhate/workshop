function ShowCityParagraph(){
    var selectElement = event.target;
    var value = selectElement.value;
    var paragraph = document.getElementsByTagName("p").id
    console.log(value)
    if (value == paragraph){
        paragraph.style.display = "block"
    }
}