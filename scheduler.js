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


$(".form-control").each(function(element){
  localStorage.getItem(toDo);
  console.log(toDo);
  $("todo-" + id).text(toDo); 
})

