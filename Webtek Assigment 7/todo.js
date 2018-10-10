//Empty list to store user inputs
let tasks = [];
let counter = document.getElementById("counter");
//eksamen
function largest(){
  var numA = parseInt(document.myForm.numA.value);
  var numB = parseInt(document.myForm.numB.value);
  if (numA > numB){
    console.log(numA + " is larger than " + numB)
  } else if (numA <numB){
    document.write(numB + " is larger than "+numA)

  }else{
    document.write(numB+" is the same as " + numA)
  }
}


//Adds a new task on user submit
document.getElementById("form").onsubmit = function addTask(evt){
  evt.preventDefault();
  let li = document.createElement("li");
  let inputText = document.getElementById("textInput");
  let inputValue = inputText.value;
  let t = document.createElement("label");
  let checkBox = document.createElement("input");
  let myTask = new Object();
  //When a checkbox is clicked, update the counter
  checkBox.onclick = updateCounter;
  
  t.innerText = inputValue;
  
  checkBox.type = "checkbox";
  
  //adds a checkbox and the text to the <li> element
  li.appendChild(checkBox);
  li.appendChild(t);
  
  //Puts the new task on top of the old ones
  document.getElementById("myUL").insertBefore(li, document.getElementById("myUL").firstChild);
  
  //Adds the user input and date it was written to the tasks array
  myTask.text = inputValue;
  myTask.date = new Date();
  tasks.push(myTask);
  
  //empties the inputbox after each new task
  document.getElementById("textInput").value = "";
  
  console.log(tasks);
  inputText.focus();
  updateCounter();
  }

  //Update the number of tasks and tasks completed and print it in the HTML
  function updateCounter() {
    let completed = document.querySelectorAll("input[type=checkbox]:checked");
    counter.innerHTML = "Completed: " + completed.length + "/" + tasks.length;

  }

