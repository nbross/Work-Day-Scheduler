$(document).ready(function () {
    // this will display the date and time on the page
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // click listener for the save button. allowing the activities to be saved
    $(".saveBtn").on("click", function() {
        console.log(this);
        var text = $(this).siblings(".activity").val();
        var time = $(this).parent().attr("id");

        // these items are then set in the local storage 
        localStorage.setItem(time, text);
    })
});

// when page is refreshed this loads the saved data from the localStorage for each hour
$("#hour8 .activity").val(localStorage.getItem("hour8"));
$("#hour9 .activity").val(localStorage.getItem("hour9"));
$("#hour10 .activity").val(localStorage.getItem("hour10"));
$("#hour11 .activity").val(localStorage.getItem("hour11"));
$("#hour12 .activity").val(localStorage.getItem("hour12"));
$("#hour13 .activity").val(localStorage.getItem("hour13"));
$("#hour14 .activity").val(localStorage.getItem("hour14"));
$("#hour15 .activity").val(localStorage.getItem("hour15"));
$("#hour16 .activity").val(localStorage.getItem("hour16"));
$("#hour17 .activity").val(localStorage.getItem("hour17"));
$("#hour18 .activity").val(localStorage.getItem("hour18"));

// function that checks the time and changes the time blocks color depending on the current time
function timeChecker() {
    // checks the current time
    var currentTime = moment().hour();

    // this loop checks if the current time is past the blocks time
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime, currentTime)

        if (blockTime < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
};

timeChecker();