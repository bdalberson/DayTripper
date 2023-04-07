# 05 Third-Party APIs: Work Day Scheduler
# Quiz-test

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     

## Description 

[Visit the Deployed Site](https://bdalberson.github.io/Quiz-test/)

![plot](./Assets/05-third-party-apis-homework-demo.gif)

## Code Refactor Example

Below is a hour I style the page based on the day.  

```javascript


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


```

These format the buttons based on the time

```javascript

$(nineHourListener.on('click','.btn',function(event){
  var nineAM = dayjs().set('hour', 09).format("HH")
  if (currentHour == nineAM){
    document.getElementById("divhour-9").classList.add('present');

  }

```


## Usage 

Just head to the site and select the Start Button to begin the quiz.  You will have 1 minute too finish and each incorrect answer subtracts 10 seconds. A High Score list is saved to Local Storage so you can keep refreshing the page and trying to get a higher score. 

## Learning Points 


Huge jump in learning on this project.  I got my process down.  I begin with a big list of todos on a notepad.  Then, without styling I construct the HTML of where I want everything to do with black outline boxes.  Then I start dynamically updating the page. At the end I style it to how I want it visually.  

Learned how to use local storage, learned how to make a timer, learned how to dynamically update a page and its view. 

