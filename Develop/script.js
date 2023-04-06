
$(function () {
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
  // TODO: Add code to display the current date in the header of the page.
});

var today = dayjs().format('MMM D, YYYY')
var currentHour = dayjs().format("HH")



document.title = today
var nineHourListener = $("#hour-9")
var tenHourListener = $("#hour-10")
var elevenHourListener = $("#hour-11")
var noonHourListener = $("#hour-12")
var oneHourListener = $("#hour-1")
var twoHourListener = $("#hour-2")
var threeHourListener = $("#hour-3")
var fourHourListener = $("#hour-4")
var fiveHourListener = $("#hour-5")




$(nineHourListener.on('click','.btn',function(event){
  var nineAM = dayjs().set('hour', 09).format("HH")
  if (currentHour > nineAM){
    console.log("past");
    document.getElementById("hour-9").classList.add('future');
  }
  else{
    console.log("future");
  }
}))

$(tenHourListener.on('click','.btn',function(event){
  var tenAM = dayjs().set('hour', 10).format("HH")
  if (currentHour > tenAM){
    console.log("past");
  }
  else{
    console.log("future");
  }
}))

$(elevenHourListener.on('click','.btn',function(event){
  var elevenAM = dayjs().set('hour', 11).format("HH")
  if (currentHour > elevenAM){
    console.log("past");
  }
  else{
    console.log("future");
  }
}))

$(noonHourListener.on('click','.btn',function(event){
  var noonPM = dayjs().set('hour', 12).format("HH")
  if (currentHour > noonPM){
    console.log("past");
  }
  else{
    console.log("future");
  }
}))

$(oneHourListener.on('click','.btn',function(event){
  var onePM = dayjs().set('hour', 13).format("HH")
  if (currentHour > onePM){
    console.log("past");
  }
  else{
    console.log("future");
  }
}))

$(twoHourListener.on('click','.btn',function(event){
  var twoPM = dayjs().set('hour', 14).format("HH")
  if (currentHour > twoPM){
    console.log("past");
  }
  else{
    console.log("future");
  }
}))

$(threeHourListener.on('click','.btn',function(event){
  var threePM = dayjs().set('hour', 15).format("HH")
  if (currentHour > threePM){
    console.log("past");
  }
  else{
    console.log("future");
  }
}))

$(fourHourListener.on('click','.btn',function(event){
  var fourPM = dayjs().set('hour', 15).format("HH")
  if (currentHour > fourPM){
    console.log("past");
  }
  else{
    console.log("future");
  }
}))

$(fiveHourListener.on('click','.btn',function(event){
  var fivePM = dayjs().set('hour', 17).format("HH")
  if (currentHour > fivePM){
    console.log("past");
  }
  else{
    console.log("future");
  }
}))





