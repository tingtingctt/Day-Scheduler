// import * as moment from "moment";
// var moment = require ('moment');
var date = moment().format('dddd, MMMM Do YYYY');
var currentTime = moment().format('hh:mm a');
$("#currentDay").append(date + "<br><br>" + currentTime);


var currentHour = parseFloat(moment().format('HH'));
console.log(currentHour);

for (i=9; i<18; i++){
    if (parseFloat($(".task").attr("id")) < currentHour) {
        $("#"+i).addClass("past");
    }
    else if (parseFloat($(".task").attr("id")) = currentHour) {
        $("#"+i).addClass("current");
    }
    else {
        $("#"+i).addClass("future");
    }
}
