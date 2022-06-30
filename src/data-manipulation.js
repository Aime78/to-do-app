
/**
 *  This is the file where the storage, modification, deletion and retrieval of the data will be handled.
 *  The modification of the data in the dom is done here.
 */


/**
 * This function will handle the change of data in the storage.
 */

export const taskManager = (taskArray) => {

    // This is the array that will hold the data.
    let taskList = taskArray;

    // This will store the tasks in the array.
    const setTaskList = () => {
        
        // taskArray.forEach(task => taskList.push(task));
    }
    
    // This will allow to get all the data from the storage.
    const getTaskList = () => {
        
        return taskList;
    }
    
    return {taskList, getTaskList, setTaskList};
}


/**
 * This function will handle the change of data in the display.
 */

export const taskManagerDisplay = () => {

    /**
     * This function will display the tasks of a particular category.
     * It will take the task's list as an argument display the list.
     * @param {array} title - The list of the tasks to be displayed.
     */
    
    const displayTaskList = (title, taskList) => {
        const taskListTitle = document.querySelector('.task-header');
        taskListTitle.innerHTML = `${title}`;
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
            <span>
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

    return {displayTaskList};
}