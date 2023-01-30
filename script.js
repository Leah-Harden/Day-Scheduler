
$(document).ready(function () {

  //time part
  var now = dayjs().format('MMMM-DD-dddd')
  document.getElementById('currentDay').innerHTML = now
  //time part

  //sorting 
  $(".time-block").each(function () {
    //var realHour = 10
    var realHour = dayjs().format('H')
    let id = $(this).attr("id");

    // console.log("the current hour is " + realHour)
    //  console.log("the id of 'this' is: " + id)
    if (id < realHour) {
      $(this).addClass("past");
    } else if (id == realHour) {
      $(this).addClass("present");
    } else if (id > realHour) {
      $(this).addClass("future");
    }
  });


});
//sorting 
//save
$(".saveBtn").click(function () {
  let id = $(this).attr("id");
  text = document.getElementById(id).childNodes[1].nodeValue

  localStorage.setItem("task", text);
  console.log(localStorage.getItem(localStorage))

  //document.getElementById(id).firstChild.nextSibling.input.value
});
//save

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
document.getElementById('currentDay')