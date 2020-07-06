var currDate = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(currDate);
// console.log(currDate);

var now = moment();
// console.log(now);
var thisHour = moment().hour();


function textBlockClass(hour){
    // console.log(hour, " element hour");
    // console.log(thisHour, "moment's hour");
    
  if (thisHour > hour) {
    $("#" + hour).addClass("past");
    console.log("earlier");
  } else if (thisHour < hour) {
    $("#" + hour).addClass("future");
    console.log("later");
  } else if (thisHour = hour) {
    $("#" + hour).addClass("present");
  }
} //end textBlockClass fct def

function applyCurrentTime(){

    //for each loop over each time Block Element
    
    $(".form-control").each(function() {
        // console.log(this.id);
        textBlockClass(this.id);
    });

}//end applyCurrentTime fct def





applyCurrentTime();
// saveTimeblockEntry();


$("saveBtn").click(function()
{var toDo = $(".form-control").value;
localStorage.setItem(".form-control", toDo);
console.log("clicked");
});

// subtractButton.addEventListener("click", function() {
//     count--; // update variable
//     counter.textContent = count; // update HTML

//     localStorage.setItem("count", count); // update storage, remains until it is manually cleared
//   });
