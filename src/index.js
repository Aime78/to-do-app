import _ from "lodash";
import './style.css';
import { todoAppTemplate } from "./DOM-template";
import { addTask, taskManagerDisplay, todoTaskDisplay, todoTasks } from "./dom";

const todoApp = (function() {
    
    // The App loading display the default list
    todoTaskDisplay();

    // Add task to the list
    const addIcon = document.querySelector('.add-icon');
    addIcon.addEventListener('click', (e) => {
        
        addTask();
        e.preventDefault
    });

    const addTaskPopupMenu = document.querySelector('.add-task');
    const cancel = document.querySelector('.cancel');
    cancel.addEventListener('click', () => addTaskPopupMenu.style.display = 'none');    

    // Add task
    // const tasks = todoTasks().tasks;
    // const addIcon = document.querySelector('.add-icon');

    // addIcon.addEventListener('click', () => {

    //     const addMenu =  todoAppTemplate().addTaskMenu;
    //     addMenu.style.display = 'block';
    //     main.innerHTML = `${todoAppTemplate().asideContainer.outerHTML} ${addMenu.outerHTML}`

    //     const task = {title:'', description:'', dueDate:'', priority:''};
    //     const submit = document.querySelector('.submit');
    //     const priorities = Array.from(document.querySelectorAll('.priority'));
    //     priorities.forEach(priority => priority.addEventListener('click', () => task.priority = priority.innerHTML));

    //     submit.addEventListener('click', () => {
    //         // main.innerHTML = `${todoAppTemplate().asideContainer.outerHTML}`
    //         const taskObject = todoTasks().addTask.getTasksInput(task);
    //         tasks.push(taskObject);

    //         // Display the task list
    //         const todoTaskContainer = todoAppTemplate().taskContainer;
    //         const tasksDisplay = taskManagerDisplay().displayTaskList(tasks);
    //         const todoList = todoAppTemplate().taskList;
    //         const todoAddIcon = todoAppTemplate().addTaskIcon;

    //         todoList.innerHTML = tasksDisplay.outerHTML;
    //         todoTaskContainer.appendChild(todoList);
    //         todoTaskContainer.appendChild(todoAddIcon);

    //         main.innerHTML = `${todoAppTemplate().asideContainer.outerHTML} ${todoTaskContainer.outerHTML}`

    //         console.log(todoTaskContainer);
            
            

    //         console.log(todoList);
    //     });
    // })
    
})();

