var currDate = moment().format('dddd MMMM Do, YYYY');
$("#currentDay").text(currDate);
console.log(currDate);

var now = moment();
console.log(now);

var i = 20;

if ((moment().hour(i)) < now) {
    $(".form-control").addClass("past");
    console.log("earlier");
} else if ((moment().hour(i)) > now) {
    $(".form-control").addClass("future");
    console.log("later");  
} else {
    $(".form-control").addClass("present");
}