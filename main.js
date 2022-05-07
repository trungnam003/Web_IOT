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

function Auto()
{
    document.getElementById("auto").style.backgroundColor = "#ff9d00"
    document.getElementById("manual").style.backgroundColor = "#fbe8c2"
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_auto);
    document.getElementById("led_on").disabled = true;
    document.getElementById("led_off").disabled = true;
    document.getElementById("buz_on").disabled = true;
    document.getElementById("buz_off").disabled = true;
    document.getElementById("relay_on").disabled = true;
    document.getElementById("relay_off").disabled = true;
    document.getElementById("led_off").style.backgroundColor = "#fbe8c2"
    document.getElementById("led_on").style.backgroundColor = "#fbe8c2"
    document.getElementById("buz_off").style.backgroundColor = "#fbe8c2"
    document.getElementById("buz_on").style.backgroundColor = "#fbe8c2"
    document.getElementById("relay_off").style.backgroundColor = "#fbe8c2"
    document.getElementById("relay_on").style.backgroundColor = "#fbe8c2"
}
function Manual()
{
    document.getElementById("manual").style.backgroundColor = "#ff9d00"
    document.getElementById("auto").style.backgroundColor = "#fbe8c2"
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_manual);
    document.getElementById("led_on").disabled = false;
    document.getElementById("led_off").disabled = false;
    document.getElementById("buz_on").disabled = false;
    document.getElementById("buz_off").disabled = false;
    document.getElementById("relay_on").disabled = false;
    document.getElementById("relay_off").disabled = false;

}

function LED_On()
{
    document.getElementById("led_on").style.backgroundColor = "#ff9d00"
    document.getElementById("led_off").style.backgroundColor = "#fbe8c2"
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_led_on);
}
function LED_Off()
{
    document.getElementById("led_off").style.backgroundColor = "#ff9d00"
    document.getElementById("led_on").style.backgroundColor = "#fbe8c2"
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_led_off);
}

function BUZZER_On()
{
    document.getElementById("buz_on").style.backgroundColor = "#ff9d00"
    document.getElementById("buz_off").style.backgroundColor = "#fbe8c2"
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_buzzer_on);
}
function BUZZER_Off(){
    document.getElementById("buz_off").style.backgroundColor = "#ff9d00"
    document.getElementById("buz_on").style.backgroundColor = "#fbe8c2"
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_buzzer_off);
}

function RELAY_On(){
    document.getElementById("relay_on").style.backgroundColor = "#ff9d00"
    document.getElementById("relay_off").style.backgroundColor = "#fbe8c2"
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params_relay_on);
}
function RELAY_Off(){
    document.getElementById("relay_off").style.backgroundColor = "#ff9d00"
    document.getElementById("relay_on").style.backgroundColor = "#fbe8c2"
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