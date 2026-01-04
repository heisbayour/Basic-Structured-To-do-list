//Create 3 variables and store the html elements
let input = document.querySelector("#myInput");
const addBtn = document.querySelector("#btn");
const list = document.querySelector(".myUl");
const container = document.querySelector(".container");
let taskCounter = 0;
//add task function
function addTask() {
    taskCounter++;
    //get input value and store in a variable
    const task = input.value.trim();
    //condition to avoid empty task storage.
    if (task === "") {
        let noDataMessage = "Please enter some texts";
        alert(noDataMessage);
        return;
    }

    //Create a variable for list,store a new li element in it, append it to the list of tasks
    const li = document.createElement("li");
    li.textContent = `${taskCounter}: ${task}`;
    li.classList.add('content');
    
    //toggle css completion design
    const complete = document.createElement("button");
    complete.textContent = "Completed";
    complete.addEventListener("click", function(){
        li.classList.remove('content');
        li.classList.toggle('checked');
        list.removeChild(complete);
        list.appendChild(inComplete);
    })

    const inComplete = document.createElement("button");
    inComplete.textContent = "Incompleted";
    inComplete.addEventListener("click", function(){
        li.classList.toggle('content');
        li.classList.remove('checked');
        list.removeChild(inComplete);
        list.appendChild(complete);
    })

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete Task";
    delBtn.addEventListener("click", function(){
        li.remove();
        delBtn.remove();
        inComplete.remove();
        complete.remove();
        container.parentNode.removeChild(list);
    });
    //append the childs to the list of tasks
    list.appendChild(li);
    list.appendChild(delBtn);
    list.appendChild(complete);
    input.value = "";
}

//add event listener to the button
addBtn.addEventListener("click", addTask);
addBtn.addEventListener("keydown", function(event){
    if (event.key === 'Enter' || event.keyCode === 13){
      event.preventDefault();
      addTask();
    }
  });
