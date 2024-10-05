const inputValue = document.getElementById('task-text');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', taskFunction);

const inputBox = document.getElementById('task-container');
inputBox.style.display = "none";

// function taskFunction () {
//   let taskValue = document.getElementById('task');
//   taskValue.innerHTML = inputValue.value;
//   inputBox.style.display = "block";
// }


// function taskFunction() {
//   inputBox.style.display = "block";
//   const label = document.createElement("label");
//   label.innerHTML = inputValue.value;
//   label.classList.add('task');
//   inputBox.appendChild(label);
// }

function taskFunction() {
  inputBox.style.display = "block";
  taskText = inputValue.value.trim();

  if (taskText) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.style.listStyleType = "none";
    listItem.textContent = taskText;

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    checkBox.addEventListener('change', () => {
      if (checkBox.checked) {
        alert (`YAY! You have completed ${taskText}`);
        listItem.remove();
      }
    });
    
    // const taskNode = document.createTextNode(taskText);

    listItem.appendChild(checkBox);
    // listItem.appendChild(taskNode);

    task.appendChild(listItem);

    inputValue.value = '';

  } else {
    alert('Please Enter your task');
  }

}