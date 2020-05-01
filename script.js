// import * as moment from "moment";
// var moment = require ('moment');
var time = moment().format('dddd, MMMM Do YYYY');
console.log(time);
$("#currentDay").text(time);