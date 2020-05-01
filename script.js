// import * as moment from "moment";
// var moment = require ('moment');
var date = moment().format('dddd, MMMM Do YYYY');
var currentTime = moment().format('hh:mm a');
var currentHour = parseFloat(moment().format('HH'));
var tasks = [];

refreshTime();
renderTasks();


function refreshTime() {
    $("#currentDay").append(date + "<br><br>" + currentTime);
    
    for (i=9; i<18; i++){
        // if (parseFloat($(".task").attr("id")) < currentHour) {
        if ( i < currentHour) {
            $("#"+i).addClass("past");
        }
        // else if (parseFloat($(".task").attr("id")) == currentHour) {
            else if (i == currentHour) {
            $("#"+i).addClass("present");
        }
        else {
            $("#"+i).addClass("future");
        }
    }
}


function storeTasks() {
    tasks = [];
    for (i=0; i<9; i++) {
        var task = $("#"+i).val();
        tasks.push(task);  
    }
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function renderTasks() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks !== null) {
      tasks = storedTasks;
    }
    for (i=0; i<9; i++) {
        $("#"+i).val(tasks[i]);
    }
}



$(".saveBtn").on("click", function(event){
    event.preventDefault();
    storeTasks();
    renderTasks();
})