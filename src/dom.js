/**
 * This is the file where all the changes in the dom will be handled.
 */

import _ from "lodash";
import { todoAppTemplate } from "./DOM-template";
 /**
 * This function will handle all the tasks operations.
 */

export const todoTasks = () => {

    // Set the list of the tasks.
    const tasks = [
        { title: 'eat', description: 'eat some food', priority: 'high' },
        { title: 'sleep', description: 'sleep for a while', priority: 'low' },
        { title: 'code', description: 'code for a while', priority: 'medium' },
        { title: 'play', description: 'play with your friends', priority: 'high' },
    ]; 
    
    return { tasks };
}

export const todoTaskDisplay = () => {

    // TODO App template.
    document.body.innerHTML = `${todoAppTemplate().headerContainer.outerHTML}
    ${todoAppTemplate().mainContainer.outerHTML}
    ${todoAppTemplate().footerContainer.outerHTML}`;

    // TODO tasks
    const main = document.querySelector('main');
    const todoTaskContainer = todoAppTemplate().taskContainer;
    const todoAddIcone = todoAppTemplate().addTaskIcon;
    const taskList = todoTasks().tasks;
    const tasksTodisplay = taskManagerDisplay().displayTaskList(taskList);
    const addTaskPopup = todoAppTemplate().addTaskMenu;

    todoTaskContainer.innerHTML = `${todoAppTemplate().taskHeader.outerHTML} ${tasksTodisplay.outerHTML} ${addTaskPopup.outerHTML} ${todoAddIcone.outerHTML}`
    
    main.innerHTML = `${todoAppTemplate().asideContainer.outerHTML} ${todoTaskContainer.outerHTML} `;
}

export const addTask = () => {
    // const taskList = todoTasks().tasks;
    const addTaskPopup = document.querySelector('.add-task');
    // const taskElements = document.querySelector('ul');
    // const taskElement = document.createElement('li');
    // const alertMessage = document.querySelector('.field-message');
    const task = {title:'', description:'', dueDate:'', priority:''};

    // taskElement.classList.add('task-container');
    addTaskPopup.style.display = 'block';
    
    
    const priorities = Array.from(document.querySelectorAll('.priority'));
    priorities.forEach(priority => priority.addEventListener('click', () => task.priority = priority.innerHTML));

    // Add new task to the list
    // submit.addEventListener('click', (e) => {
        
    //     console.log('HI')
    //     e.preventDefault;
//         const taskObject = taskManagerDisplay().getTasksInput(task);
//         // if (e.target.innerHTML !== 'submit') return;

//         if (taskObject.title === '' || taskObject.dueDate === '' || taskObject.priority === '') {
//             alertMessage.style.display = 'inline-block';
//             return;
//         }
        
//         console.log(taskObject);
        
//         taskElement.innerHTML = 
//  `       <div>
//         <input type="checkbox">
//          <span>${taskObject.title}</span>
//         </div>
//         <div class="second-div">
//         <span>${taskObject.priority}</span>
//         <span>${taskObject.dueDate}</span>
//         <span class="list-svg">
//             <svg style="width:20px;height:20px" viewBox="0 0 24 24">
//                 <path fill="currentColor" d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
//             </svg>
//             <svg style="width:20px;height:20px" viewBox="0 0 24 24">
//                 <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
//             </svg>
//         </span>
//         </div>`;
//         e.preventDefault;
//         taskElements.appendChild(taskElement);
//         addTaskPopup.style.display = 'none';
//         taskList.push(taskObject);
//         console.log(taskElements);
//         console.log(taskList);
        
    };






  /**
 * This function will handle the change of data in the display.
 */

export const taskManagerDisplay = () => {

    /**
     * This function will display the tasks of a particular category.
     * It will take the task's list as an argument display the list.
     * @param {array} title - The list of the tasks to be displayed.
     */
    
    const displayTaskList = (taskList) => {

        const taskListContainer = document.createElement('ul');
        
        taskList.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-container');
            taskItem.innerHTML = `
            <div>
                  <input type="checkbox">
                   <span>${task.title}</span>
            </div>
            <div class="second-div">
            <span>${task.priority}</span>
            <span>6/26/2022</span>
            <span class="list-svg">
                <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
                </svg>
                <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                </svg>
            </span>
        </div>`;

            taskListContainer.appendChild(taskItem);
        });


        return taskListContainer;
    }

    //Add and edit task
    const getTasksInput = (task) => {
        const title = document.querySelector('.title');
        const description = document.querySelector('.text-area');
        const dueDate = document.querySelector('.date-input');

        task.title = title.value;
        task.description = description.value;
        task.dueDate = dueDate.value;
     
        return task;
    }

    return {displayTaskList, getTasksInput};
}
