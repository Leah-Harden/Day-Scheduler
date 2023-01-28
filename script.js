
$(document).ready(function () {

  //time part
  var now = dayjs().format('MMMM-DD-dddd')
  document.getElementById('currentDay').innerHTML = now
  //time part

  //sorting 
  $(".time-block").each(function () {
    var realHour = dayjs().format('H')
    console.log(realHour)
    if (id < realHour) {
      $(this).addClass("past");
    } else if (id = realHour) {
      $(this).addClass("present");
    } else if (id > realHour) {
      $(this).addClass("future");
    }
  });


});
//sorting 
//save
$(".saveBtn").click(function () {

});
  //save

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //