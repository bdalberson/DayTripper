
var today = dayjs().format('MMM D, YYYY')  //gets the time
var currentHour = dayjs().format("HH")   //stlyes the time in military time for use



document.title = today   //sets title to time

//button grabbers for each item below
var nineHourListener = $("#hour-9")
var tenHourListener = $("#hour-10")
var elevenHourListener = $("#hour-11")
var noonHourListener = $("#hour-12")
var oneHourListener = $("#hour-1")
var twoHourListener = $("#hour-2")
var threeHourListener = $("#hour-3")
var fourHourListener = $("#hour-4")
var fiveHourListener = $("#hour-5")




$(nineHourListener.on('click','.btn',function(event){ //click listener
  var nineAM = dayjs().set('hour', 09).format("HH") //sets the timer variable to the time clicked.  
  if (currentHour == nineAM){ //sets the class to present if its the present
    document.getElementById("divhour-9").classList.add('present');

  }
  else if (currentHour > nineAM){ //sets the class to past if its the past
    console.log("past");
    document.getElementById("divhour-9").classList.add('past');
  }
  else{
    console.log("future"); //sets the class to future  if its not current time or the past
    document.getElementById("divhour-9").classList.add('future')
  }
}))

$(tenHourListener.on('click','.btn',function(event){ //same as above
  var tenAM = dayjs().set('hour', 10).format("HH")
  if (currentHour == tenAM){
    document.getElementById("divhour-10").classList.add('present');
  }
  else if (currentHour > tenAM){
    console.log("past");
    document.getElementById("divhour-10").classList.add('past');
  }
  else{
    console.log("future");
    document.getElementById("#divhour-10").classList.add('future');
  }
}))

$(elevenHourListener.on('click','.btn',function(event){
  var elevenAM = dayjs().set('hour', 11).format("HH")
  if (currentHour == elevenAM){
    document.getElementById("hour-11").classList.add('present');
  }
  else if (currentHour > elevenAM){
    console.log("past");
    document.getElementById("hour-11").classList.add('past');
  }
  else{
    console.log("future");
    document.getElementById("hour-11").classList.add('future');

  }
}))

$(noonHourListener.on('click','.btn',function(event){
  var noonPM = dayjs().set('hour', 12).format("HH")
  if (currentHour > noonPM){
    document.getElementById("hour-12").classList.add('present');
  }
  else if (currentHour > noonPM){
    console.log("past");
    document.getElementById("hour-12").classList.add('past');
  }
  else{
    console.log("future");
    document.getElementById("hour-12").classList.add('future');

  }
}))

$(oneHourListener.on('click','.btn',function(event){
  var onePM = dayjs().set('hour', 13).format("HH")
  if (currentHour == onePM){
    document.getElementById("hour-1").classList.add('present');
  }
  else if (currentHour > onePM){
    console.log("past");
    document.getElementById("hour-1").classList.add('past');
  }
  else{
    console.log("future");
  }
}))

$(twoHourListener.on('click','.btn',function(event){
  var twoPM = dayjs().set('hour', 14).format("HH")
  if (currentHour == twoPM){
    document.getElementById("hour-2").classList.add('present');
  }
  else if (currentHour > twoPM){
    console.log("past");
    document.getElementById("hour-2").classList.add('past');
  }
  else{
    console.log("future");
  }
}))

$(threeHourListener.on('click','.btn',function(event){
  var threePM = dayjs().set('hour', 15).format("HH")
  if (currentHour > threePM){
    document.getElementById("hour-3").classList.add('present');
  }
  else if (currentHour > threePM){
    console.log("past");
    document.getElementById("hour-3").classList.add('past');
  }
  else{
    console.log("future");
  }
}))

$(fourHourListener.on('click','.btn',function(event){
  var fourPM = dayjs().set('hour', 15).format("HH")
  if (currentHour == fourPM){
    document.getElementById("hour-4").classList.add('present');

  }
  else if (currentHour > fourPM){
    console.log("past");
    document.getElementById("hour-4").classList.add('past');
  }
  else{
    console.log("future");
    document.getElementById("hour-4").classList.add('future');
  }
}))

$(fiveHourListener.on('click','.btn',function(event){
  var fivePM = dayjs().set('hour', 17).format("HH")
  if (currentHour == fivePM){
    console.log("present");
    document.getElementById("hour-5").classList.add('present')
  }
  else if (currentHour > fivePM){
    console.log("past");
    document.getElementById("hour-5").classList.add('past');
  }
  else{
    console.log("future");
    document.getElementById("hour-5").classList.add('future');
  }
}))





