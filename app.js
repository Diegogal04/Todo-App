const addBtn = document.getElementById("plus-btn");
const taskCenter = document.getElementById("task-center");





function createTask() {
    let task = document.getElementById("to-do").value;
    let trashIcon = '<i class="fas fa-trash"></i>';
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskCenter.appendChild(taskContainer);
    const trash = document.createElement('div')
    trash.classList.add('trash-icon');
    trash.innerHTML = trashIcon;
    taskContainer.appendChild(trash);
    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    taskContent.innerHTML = task;
    taskContainer.appendChild(taskContent);

    let trashBtn = trash.addEventListener('click', () => {
        taskCenter.removeChild(taskContainer)
    })
};





addBtn.addEventListener('click', createTask);




