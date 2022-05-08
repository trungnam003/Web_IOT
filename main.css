var url = "https://api.thingspeak.com/update?";

var API_AutoManual = "1EK5B9B41AE2MIPR";
var API_LED = "L5HRQ3MPCL5AO59N";
var API_BUZZER = "2AM06PATEZNHIHM7";
var API_RELAY = "HPAHDD7PJU5HSOAY";
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{([0-9]+)}/g, function (match, index) {
      return typeof args[index] == 'undefined' ? match : args[index];
    });
};
var params_auto = "api_key={0}&field1=1".format(API_AutoManual);
var params_manual = "api_key={0}&field1=0".format(API_AutoManual);

var params_led_on = "api_key={0}&field1=1".format(API_LED);
var params_led_off = "api_key={0}&field1=0".format(API_LED);

params_buzzer_on = "api_key={0}&field1=1".format(API_BUZZER);
params_buzzer_off = "api_key={0}&field1=0".format(API_BUZZER);


params_relay_on = "api_key={0}&field1=1".format(API_RELAY);
params_relay_off = "api_key={0}&field1=0".format(API_RELAY);

var xhr = new XMLHttpRequest();
var i = 0;
function AutoManual(){
    var z = i;
    switch(z){
        case 0:{
            Auto();
            document.getElementById("automanual").innerText = "Auto"
            break;
        }
        case 1:{
            Manual();
            document.getElementById("automanual").innerText = "Manual"
            break;
        }
        
    }
    i = i+1;
    if(i>=3){
        i=0;
    }
}
function Auto()
{
    
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_auto);
    
}
function Manual()
{
   
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_manual);
    

}
var j = 0;
function LED(){
    var z = j;
    switch(z){
        case 0:{
            LED_On();
            document.getElementById("led").innerText = "ON"
            break;
        }
        case 1:{
            LED_Off();
            document.getElementById("led").innerText = "OFF"
            break;
        }
    }
    j = j+1;
    if(j>=3){
        j=0;
    }
}
function LED_On()
{
    
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_led_on);
}
function LED_Off()
{
    
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_led_off);
}
var k = 0;
function BUZZER(){
    var z = k;
    switch(z){
        case 0:{
            BUZZER_On();
            document.getElementById("buzzer").innerText = "ON"
            break;
        }
        case 1:{
            BUZZER_Off();
            document.getElementById("buzzer").innerText = "OFF"
            break;
        }
    }
    k = k+1;
    if(k>=3){
        k=0;
    }
}
function BUZZER_On()
{
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_buzzer_on);
}
function BUZZER_Off(){
    
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_buzzer_off);
}
var l = 0;
function RELAY(){
    var z = l;
    switch(z){
        case 0:{
            RELAY_On();
            document.getElementById("relay").innerText = "ON"
            break;
        }
        case 1:{
            RELAY_Off();
            document.getElementById("relay").innerText = "OFF"
            break;
        }
    }
    l = l+1;
    if(l>=3){
        l=0;
    }
}
function RELAY_On(){
    
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_relay_on);
}
function RELAY_Off(){
    
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_relay_off);
}

function Time() {
    // Creating object of the Date class
    var date = new Date();
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();
    // Variable to store AM / PM
    var period = "";
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
    // Converting the hour in 12-hour format
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
   }
    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10
   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
   }
   Time();
