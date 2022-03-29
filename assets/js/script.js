// setup a function to display todays date and time with moment.js -- done
// setup a local storage system for the activities to be saved with a click of a button
// setup a function to track the hours of the day
// setup hour tracker to change the colors of the blocks if past, present, or future
// also work in jquery with all this ^^^^^
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
$("#nine .activity").val(localStorage.getItem("nine"));
$("#ten .activity").val(localStorage.getItem("ten"));
$("#eleven .activity").val(localStorage.getItem("eleven"));
$("#twelve .activity").val(localStorage.getItem("twelve"));
$("#one .activity").val(localStorage.getItem("one"));
$("#two .activity").val(localStorage.getItem("two"));
$("#three .activity").val(localStorage.getItem("three"));
$("#four .activity").val(localStorage.getItem("four"));
$("#five .activity").val(localStorage.getItem("five"));
$("#six .activity").val(localStorage.getItem("six"));
