// BASIC SYNTAX
// Selectors: 
//let elementName = document.querySelector("#elementId")
// Functions
//function functionName() {
  // do something here
 
//}
// Call the event with an event listener
//elementName.addEventListener("onclick", functionName);

// 1. DISPLAY NAME
// Click the button to display your name in the box
// (Tip: in this example, you will hard code your name within the JavaScript function, rather than use the input box to grab it).

// Selectors
let thisButton = document.querySelector("#btnName");
// Function
function displayMyName () {
  document.querySelector("#myName").value = "Shubha";
}
// Call the event
thisButton.addEventListener("click", displayMyName);
// 2. LIGHTSWITCH
// Switch lights on mouseover
// When the mouse cursor is on the lightbulb image, the lighton image should show; and revert back to the lightoff image when the mouse moves off.

// Selectors
let myBulb = document.querySelector("#imageOff");
// Function
function displayBulb () {
  myBulb.src='./images/lighton.png';
}
function bulbOff () {
  myBulb.src='./images/lightoff.png';
}

// Call the event
myBulb.addEventListener("mouseover", displayBulb);
myBulb.addEventListener("mouseout", bulbOff);
// 3. Double click button to display content
// Selectors
let dbClick = document.querySelector("#btndbName");
/* Function {
  //some code here
  //create a new img element
}*/

function displayOnDbClick () {
  document.querySelector("#displayPara").innerHTML="<img src='./images/smileyface.png'>";
}

// Call the event
dbClick.addEventListener("dblclick", displayOnDbClick);
// 4. Traffic Lights
// Selectors
let stopButton = document.getElementById("btnStop");
let readyButton = document.querySelector("#btnReady");
let goButton = document.querySelector("#btnGo");
let stop = document.getElementById("stopDiv");
let go = document.getElementById("goDiv");
let ready = document.getElementById("readyDiv");
// Function 1
function stopLights () {
  stop.style.background = 'red';
  ready.style.background = 'black';
  go.style.background = 'black';
}
// Function 2
function readyLights () {
  stop.style.background = 'black';
  ready.style.background = 'yellow';
  go.style.background = 'black';
}
// Function 3
function goLights () {
  stop.style.background = 'black';
  ready.style.background = 'black';
  go.style.background = 'green';
}
// Call the events
stopButton.addEventListener("click", stopLights);
readyButton.addEventListener("click", readyLights);
goButton.addEventListener("click", goLights);
// 5. Change textbox border colours
// Selectors
let fName = document.getElementById('firstName');
let lName = document.getElementById('lastName');
let nameButton = document.getElementById('btn2Name');
// Function
function changeFirstName () {
  fName.style.border = '1px solid red';
  lName.style.border = '1px solid red';
}
// Call the event
nameButton.addEventListener("click", changeFirstName);



// 6. Validate the input [length should be more than 5 characters]
// Selectors
let submitButton = document.querySelector("#btnSub2");
let errMsg = document.querySelector("#errMsg");
/*Function {
  //if statement
}*/
function charCal () {
  let myName = document.querySelector("#myName2").value;
  if (myName.length === 0 || myName.length < 8) {
    errMsg.innerText = 'Enter more than 8 characters.';
  }
  else {
    errMsg.innerText = myName;
  }
}
// Call the event
submitButton.addEventListener("click", charCal);



// 7.create a list of hobbies
// Selectors
let addHobby = document.querySelector("#hobbies").firstElementChild;
let listButton = document.querySelector("#btnHobbies");
/*Function {
  //for loop
}*/
function makeHobbyList () {
  let inputValue = prompt("Enter your hobby: ");
  let l = document.createElement('li');
  let t = document.createTextNode(inputValue);
  addHobby.appendChild(l.appendChild(t));

}
  
// Call the event
listButton.addEventListener("click", makeHobbyList);
// 8. Display a profile card from an object
//Object

// Selectors

/*Function {
    //for loop
      //if statement
  }*/
