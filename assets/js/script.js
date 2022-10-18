var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");

function displayDate() {
    var today = moment().format('dddd, MMM DD, YYYY hh:mm a');
    currentDay.text(today);
};

setInterval(displayDate, 1000);

$(function () {
    $("#selectable").selectable();
});

saveBtn.on("click", function() {

});

function getEvent() {

};

function colorHours() {

};