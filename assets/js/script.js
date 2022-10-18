var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");

//Diplays the current date and time to the element with the id currentDay
function displayDate() {
    var today = moment().format('dddd, MMM DD, YYYY hh:mm a');
    currentDay.text(today);
};

setInterval(displayDate, 1000);

//Saves user input from time blocks to local storage
saveBtn.on("click", function (event) {
    event.preventDefault();
    var block = $(this).siblings(".hour").text();
    var input = $(this).siblings(".time-block").val();
    localStorage.setItem(block,input);
});

//Checks local storage for each timeblock, if it's not empty, the saved value is displayed
function getEvent() {
    $(".hour").each(function() {
        var currentBlock = $(this).text();
        var currentInput = localStorage.getItem(currentBlock);

        if(currentInput !== null) {
            $(this).siblings(".time-block").val(currentInput);
        }
    });
};

//Compares the current hour with the id corresponding to the hour assigned to each timeblock, then adds the class of past, present, or future to color code the timeblocks
function colorHours() {
    var hour = moment().hours();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id"));

        if (blockTime > hour) {
            $(this).addClass("future");
        } else if (blockTime === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

//Calls functions for color coding the hours and getting saved items from storage
colorHours();
getEvent();