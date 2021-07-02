//code for inserting new tasks

const list = document.querySelector('#non-priority-box ul')

const addTask = document.querySelector('form');
addTask.addEventListener('submit', (e) => {

	e.preventDefault();

	const inputValue = document.querySelector('#add-container input').value;

	const li = document.createElement('li');
	const taskName = document.createElement('span');
	const doneBtn = document.createElement('button');

	doneBtn.textContent = 'Done';
	taskName.textContent = inputValue;

	taskName.classList.add('work-name');
	doneBtn.classList.add('btn');
	li.classList.add('item');

	list.appendChild(li);
	li.appendChild(taskName);
	li.appendChild(doneBtn);

});

//code for deleting finished tasks

/*let btns = document.querySelectorAll('#non-priority-box .btn');*/

list.addEventListener('click', (e) => {
    if(e.target.className == 'btn'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });