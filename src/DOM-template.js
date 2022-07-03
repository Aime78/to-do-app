
/**
 * This is the file where the DOM template will reside.
 * Due to how the template can become long, 
 * we decided to set it in its own file.
 */
import _ from "lodash";

/**
 * Create a TODO App template that displays all the categories.
 */

 export const todoAppTemplate = () => {

    // Create the header container.
    const headerContainer = document.createElement('header');
    headerContainer.innerHTML = `<!--********************************* THE HEADER OF THE APP *************************************-->
    <h1>Todo List</h1>
    `
    // Create the aside container.
    const asideContainer = document.createElement('aside');
    asideContainer.innerHTML = `<!--****************************** THE SIDEBAR OF THE APP ***********************************-->
    <h2>Home</h2>

    `
    // Create the main container.
    const mainContainer = document.createElement('main');
    mainContainer.innerHTML = `<!--****************************** THE MAIN CONTAINER OF THE APP ***********************************-->
    `
    // Create the task container.
    const taskContainer = document.createElement('section');
    taskContainer.classList.add('task-category');
    taskContainer.innerHTML = `<!--****************************** THE TASK SECTION OF THE APP ***********************************-->
    `
    const taskHeader = document.createElement('div');
    taskHeader.classList.add('task-header-container');
    taskHeader.innerHTML = `
    <h2 class="task-header">Home</h2>
    <h2 class="task-header">Due Date</h2>`
            
    
    mainContainer.innerHTML = `${asideContainer.outerHTML}`;

    // Create the task list 
    const taskList = document.createElement('div');
    taskList.classList.add('task-list-container');

    // Add task icon
    const addTaskIcon = document.createElement('div');
    addTaskIcon.classList.add('add-task-container');
    addTaskIcon.innerHTML = `
    <span>
        <svg style="width:22px;height:22px" viewBox="0 0 24 24" class="add-icon">
            <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
        </svg>
    </span>
    <span>
        Add Task
    </span>
    `
    // Add task and edit menu
    const addTaskMenu = document.createElement('div');
    addTaskMenu.classList.add('add-task');
    addTaskMenu.innerHTML = `
    <div class="task-input">
            <input type="text" placeholder="Title" required autofocus="on" class="title">
            <textarea name="" id="" cols="30" rows="3" placeholder="Details" class="text-area"></textarea>
        </div>
        <div class="task-details">
            <label for="due-date" class="due-date">Due Date:</label>
            <input type="date" class="due-date date-input"> <br>

            <div>
                <label for="priority" id="priority-label">Priority:</label>
                <button class="priority low">low</button>
                <button class="priority medium">medium</button>
                <button class="priority high">high</button>
            </div>
            <span style="color: red" class="field-message">Please submit all the fields<span>
        </div>
        <input type="submit" value="submit" class="submit">
        <button class="cancel">cancel</button>
    </div>
    `

    // Create the note container.
    const noteContainer = document.createElement('section');
    noteContainer.classList.add('note-category');
    noteContainer.innerHTML = `<!--****************************** THE NOTE CATEGORY OF THE APP ***********************************-->
    <div class="all-notes">
        <div class="col col-1">
            <div class="note">
                <div class="delete-note"><span>x</span></div>
                <div contenteditable="true" class="note-title"></div>
                <div contenteditable="true" spellcheck="false" class="note-text" ></div>
            </div>
            <div class="note">
                    <div class="delete-note"><span>x</span></div>
                    <div contenteditable="true" class="note-title"></div>
                    <div contenteditable="true" spellcheck="false" class="note-text" ></div>
            </div>
        </div>
        <div class="col col-2">
            <div class="note">
                <div class="delete-note"><span>x</span></div>
                <div contenteditable="true" class="note-title"></div>
                <div contenteditable="true" spellcheck="false" class="note-text" ></div>
            </div>
            </div>
            <div class="col col-3">
            <div class="note">
                <div class="delete-note"><span>x</span></div>
                <div contenteditable="true" class="note-title"></div>
                <div contenteditable="true" spellcheck="false" class="note-text" ></div>
            </div>
        </div>
    </div>
    `
    // Create the footer container.
    const footerContainer = document.createElement('footer');
    footerContainer.innerHTML = `<!--****************************** THE FOOTER OF THE APP ***********************************-->
    Copyright &copy; Rukundoaime 2022
    `
    return { headerContainer, mainContainer, 
        footerContainer, asideContainer, taskContainer, taskHeader,
        addTaskIcon, addTaskMenu,taskList, noteContainer};
}