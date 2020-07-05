var currDate = moment().format('dddd MMMM Do, YYYY');
$("#currentDay").text(currDate);
console.log(currDate);

var now = moment();
console.log(now);

var i = 18;

if ((moment().hour(i)) <= now) {
    console.log("earlier");
} else {
    console.log("later");  
}