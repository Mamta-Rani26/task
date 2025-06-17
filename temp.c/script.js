document.getElementById("clear").onclick = clearForm;
function convertToFahrenheit(){
    var celsius = parseFloat(document.getElementById("temp").value);
    var fahrenheit = (celsius* 9 / 5) + 32;
    document.getElementById("result").innerHTML= fahrenheit + " F";
}

function convertToKelvin(){
    var celsius = parseFloat(document.getElementById("temp").value);
    var kelvin = celsius + 273.15;
    document.getElementById("result").innerHTML= kelvin + " K";
}
function clearForm(){
    document.getElementById("temp").value="";
    document.getElementById("result").innerHTML="";
}

