var currDate = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(currDate);
// console.log(currDate);

var now = moment();
// console.log(now);
var thisHour = moment().hour();


function textBlockClass(id){
    // console.log(hour, " element hour");
    // console.log(thisHour, "moment's hour");
  var hour = parseInt(id.replace("todo-", ""), 10);
  console.log("textBlock");
  console.log(hour);
  if (thisHour > hour) {
    $("#todo-" + hour).addClass("past");
    console.log(hour);
  } else if (thisHour < hour) {
    $("#todo-" + hour).addClass("future");
    console.log(hour);
  } else if (thisHour = hour) {
    $("#todo-" + hour).addClass("present");
  }
} //end textBlockClass fct def

function applyCurrentTime(){
    
    $(".form-control").each(function() {
        // console.log(this.id);
        textBlockClass(this.id);
    });

}//end applyCurrentTime 


applyCurrentTime();

// saveTimeblockEntry();

// function saveTimeBlocks () {
$(".saveBtn").click(function() {
var id = $(this).attr("id").replace("save-", "");

var toDo = $("#todo-" + id).val();
localStorage.setItem(id, toDo);
console.log("clicked");
});
// }

//write a for loop that goes through every hour of the day.
//for each hour. look inlocaal storage for that hour and put the value into the todo for that hour.
var hour = 8;

$("#todo-" + hour).each(function(){
  localStorage.getItem(id, toDo);
  console.log(toDo);
  hour++;
})