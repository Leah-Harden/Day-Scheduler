
$(document).ready(function () {

  var text8 = $('#8 textarea')
  var text9 = $('#9 textarea')
  var text10 = $('#10 textarea')
  var text11 = $('#11 textarea')
  var text12 = $('#12 textarea')
  var text13 = $('#13 textarea')
  var text14 = $('#14 textarea')
  var text15 = $('#15 textarea')
  var text16 = $('#16 textarea')
  var text17 = $('#17 textarea')
  var text18 = $('#18 textarea')
  var text19 = $('#19 textarea')
  var text20 = $('#20 textarea')
  var text21 = $('#21 textarea')


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
    text10.text(list['10'])
    text11.text(list['11'])
    text12.text(list['12'])
    text13.text(list['13'])
    text14.text(list['14'])
    text15.text(list['15'])
    text16.text(list['16'])
    text17.text(list['17'])
    text18.text(list['18'])
    text19.text(list['19'])
    text20.text(list['20'])
    text21.text(list['21'])
  }
  // localStorage.setItem(id, value);
  // var x = id;
  // let storedInput = localStorage.getItem(x)
  // console.log(storedInput)
  //save
  document.getElementById('currentDay')
});