
$(document).ready(function () {

  var text8 = $('#8 textarea')
  var text9 = $('#9 textarea')

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


  //sorting 
  //save
  $(".saveBtn").click(function () {
    var value = $(this).siblings(".description").val();
    let id = $(this).parent().attr("id");
    var list = JSON.parse(localStorage.getItem('tasksList'))
    // needed or will break! This make it a empty object if there is nothing in there.
    if (!list) {
      list = {}
    }


    list[id] = value
    localStorage.setItem('tasksList', JSON.stringify(list));
  })

  var list = JSON.parse(localStorage.getItem('tasksList'))
  if (list) {
    text8.text(list['8'])
    text9.text(list['9'])
  }
  // localStorage.setItem(id, value);
  // var x = id;
  // let storedInput = localStorage.getItem(x)
  // console.log(storedInput)
  //save
  document.getElementById('currentDay')
});