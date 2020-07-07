var currDate = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(currDate);

var now = moment();
var thisHour = moment().hour();

function textBlockClass(id){
  var hour = parseInt(id.replace("todo-", ""), 10);
  if (thisHour > hour) {
    $("#todo-" + hour).addClass("past");
    console.log(hour);
  } else if (thisHour < hour) {
    $("#todo-" + hour).addClass("future");
    console.log(hour);
  } else if (thisHour = hour) {
    $("#todo-" + hour).addClass("present");
  }
} //end textBlockClass function

function applyCurrentTime(){
    
    $(".form-control").each(function() {
        // console.log(this.id);
        textBlockClass(this.id);
    });

}//end applyCurrentTime function


applyCurrentTime();


$(".saveBtn").click(function() {
var id = $(this).attr("id").replace("save-", "");
var toDo = $("#todo-" + id).val();
localStorage.setItem(id, toDo);
console.log("clicked");
});

$("#todo-8").val(localStorage.getItem("8"));
$("#todo-9").val(localStorage.getItem("9"));
$("#todo-10").val(localStorage.getItem("10"));
$("#todo-11").val(localStorage.getItem("11"));
$("#todo-12").val(localStorage.getItem("12"));
$("#todo-13").val(localStorage.getItem("13"));
$("#todo-14").val(localStorage.getItem("14"));
$("#todo-15").val(localStorage.getItem("15"));
$("#todo-16").val(localStorage.getItem("16"));
$("#todo-17").val(localStorage.getItem("17"));
$("#todo-18").val(localStorage.getItem("18"));
$("#todo-19").val(localStorage.getItem("19"));