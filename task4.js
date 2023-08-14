document.getElementById('addTaskButton').addEventListener('click', addNewTask);

function addNewTask() {
  var newTaskText = document.getElementById('newTaskInput').value;

  if (newTaskText.trim() === '') {
    return;
  }

  var newTaskDiv = document.createElement('div');
  newTaskDiv.className = 'task'; 

  newTaskDiv.style.width = '520px';
  newTaskDiv.style.height = '50px';
  newTaskDiv.style.margin = '10px';
  newTaskDiv.style.display = 'flex';
  newTaskDiv.style.alignItems = 'center';
  newTaskDiv.style.justifyContent = 'space-between';
  newTaskDiv.style.borderRadius = '25px';
  newTaskDiv.style.border = '3px solid rgb(198, 196, 153)';
  newTaskDiv.style.textAlign = 'center'; 

  var taskTextSpan = document.createElement('span');
  taskTextSpan.innerText = newTaskText;
  taskTextSpan.style.flex = '1';

  var doneButton = document.createElement('button');
  doneButton.innerText = 'Done';
  doneButton.onclick = function () {
    taskTextSpan.style.textDecoration = 'line-through';
  };
  doneButton.style.backgroundColor = 'white';
  doneButton.style.color = 'rgb(200, 173, 132)';
  doneButton.style.padding = '5px 10px';
  doneButton.style.borderRadius = '25px';
  doneButton.style.marginRight = '5px';
  doneButton.style.border='3px solid rgb(200, 173, 132)'

  var deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.onclick = function () {
    newTaskDiv.remove();
  };
deleteButton.style.backgroundColor = 'white';
 deleteButton.style.color = 'rgb(200, 173, 132)';
 deleteButton.style.padding = '5px 10px';
 deleteButton.style.borderRadius = '25px';
  deleteButton.style.marginRight = '5px';
  deleteButton.style.border='3px solid rgb(200, 173, 132)'

  newTaskDiv.appendChild(taskTextSpan);
  newTaskDiv.appendChild(doneButton);
  newTaskDiv.appendChild(deleteButton);

  document.getElementById('box').appendChild(newTaskDiv);

  document.getElementById('newTaskInput').value = '';
}
