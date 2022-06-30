
/**
 * This is the file where all the changes in the dom will be handled.
 */

import _ from "lodash";
import { taskManager, taskManagerDisplay } from "./data-manipulation"; 

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
    <h2>Today</h2>
    <h2>Week</h2>
    <h2>Projects</h2>
    <div class="subproject">
        <ul>
            <li><h3>workout</h3></li>
            <li><h3>coding</h3></li>
        </ul>
    </div>
    <h2>notes</h2>

    <div>
        <svg style="width:60px;height:60px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
        </svg>
    </div>
    `
    // Create the main container.
    const mainContainer = document.createElement('main');
    mainContainer.innerHTML = `<!--****************************** THE MAIN CONTAINER OF THE APP ***********************************-->
    `
    // Create the task container.
    const taskContainer = document.createElement('section');
    taskContainer.classList.add('task-category');
    taskContainer.innerHTML = `<!--****************************** THE TASK SECTION OF THE APP ***********************************-->
    
            <div class="task-header-container">
                <h2 class="task-header">Home</h2>
                <h2 class="task-header">Due Date</h2>
            </div>
            <div class="task-list-container"></div>
    `
    mainContainer.innerHTML = `${asideContainer.outerHTML}`;

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
    return {headerContainer, mainContainer, footerContainer, taskContainer, noteContainer};
}


/**
 * Create each category and the corresponding operations.
 */

// This is the function of the home category.
export const homeCategory = () => {

    // Set the list of the tasks.
    const tasks = [
        { title: 'eat', description: 'eat some food', priority: 'high' },
        { title: 'sleep', description: 'sleep for a while', priority: 'low' },
        { title: 'code', description: 'code for a while', priority: 'medium' },
        { title: 'play', description: 'play with your friends', priority: 'high' },
    ];

    const homeProjectObject = taskManager(tasks);
    const homeProjectObjectTasks = homeProjectObject.getTaskList();
    const tasksTitle = 'Home';
    // Pass it as argument in the function that will display the tasks.
    const homeSection = todoAppTemplate().mainContainer;
    homeSection.innerHTML = `${homeSection.asideContainer}`
    const tasksTodisplay = taskManagerDisplay().displayTaskList(tasksTitle, homeProjectObjectTasks);

    // Modify the title of the project
    // const projectTitle = document.querySelector('.task-header-container > h2');
    // projectTitle.innerHTML = 'Home';

    return {tasksTodisplay, homeSection}

}

// This is the function of the today category.
export const todayCategory = () => {

    // Set the list of the tasks.
    const tasks = [
        { title: 'read', description: 'read a book', priority: 'high' },
        { title: 'walk', description: 'walk for a while', priority: 'low' },
        { title: 'relax', description: 'relax for a while', priority: 'medium' },
        { title: 'dance', description: 'dance with your friends', priority: 'high' },
    ];

    const todayProjectObject = taskManager(tasks);
    const todayProjectObjectTasks = todayProjectObject.getTaskList();
    const tasksTitle = 'Today';

    // Pass it as argument in the function that will display the tasks.
    const tasksTodisplay = taskManagerDisplay().displayTaskList(tasksTitle, todayProjectObjectTasks);

    // Modify the title of the project
    const projectTitle = document.querySelector('.task-header-container > h2');

    return {tasksTodisplay};
}

// This is the function of the week category.
export const weekCategory = () => {

    // Set the list of the tasks.
    const tasks = [
        { title: 'work', description: 'work for a while', priority: 'high' },
        { title: 'study', description: 'study for a while', priority: 'low' },
        { title: 'relax', description: 'relax for a while', priority: 'medium' },
        { title: 'play', description: 'play with your friends', priority: 'high' },
    ];

    const weekProjectObject = taskManager(tasks);
    const weekProjectObjectTasks = weekProjectObject.getTaskList();
    const tasksTitle = 'Week';

    // Pass it as argument in the function that will display the tasks.
    
    const tasksTodisplay = taskManagerDisplay().displayTaskList(tasksTitle, weekProjectObjectTasks);

    // Modify the title of the project
    const projectTitle = document.querySelector('.task-header-container > h2');

    return {tasksTodisplay};
}

// This is the custom project with its subcategory.
export const customProject = () => {

    // Set projects
    const Projects = {
         workout: [
            { title: 'gym', description: 'hit the gym every morning', priority: 'high' },
            { title: 'eat healthier', description: 'no junk food', priority: 'low' },
        ],
        coding: [
            {title: 'reading', description: 'read every day for 30 min', priority: 'medium' },
            {title: 'date', description: 'date girls or will become a loser', priority: 'medium'}
        ]
    }

    // // projectsubcategory
    // const projectSubcategory = function(name, project) {
    //     // Set the list of the tasks.


    //     const projectSub = {
    //         name: name,
    //         tasks: taskManager(project)
    //     }        
    //     return projectSub;
    // }
    
    // Task to display
    
   

    return { Projects };

}

// This is notes category
export const notesFunction = () => {

    // Set notes
    const notesList = [
        {title: 'My Date', details: 'Last night I had a date with a beautiful girl.'},
        {title: 'Meeting', detaisl: 'The meeting was very good, we had an amazing conversation.'}
    ]

    // Display notes 
    const noteSection = todoAppTemplate().noteContainer;
    noteSection.style.display = 'block';

    return {notesList, noteSection}
}