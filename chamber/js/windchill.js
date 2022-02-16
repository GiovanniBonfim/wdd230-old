let temperature;
let windSpeed;

temperature = parseInt(document.getElementById("temperature").textContent);
windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);

let tempF; 
tempF = (temperature * 9/5) + 32;
console.log(tempF);

let windmph;
windmph = windSpeed / 1.609;
console.log(windmph)

let windChill;

if (tempF<=50 && windmph>3.0){
    windChill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windmph,0.16)+ 0.4275 * tempF * Math.pow(windmph,0.16);
    document.querySelector("#windChill").textContent = windChill;
}
else {
    document.querySelector("#windChill").textContent = " N/A";
}