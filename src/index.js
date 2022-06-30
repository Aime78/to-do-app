import _, { isString } from "lodash";
import './style.css';

import { taskManager, taskManagerDisplay } from "./data-manipulation";
import { customProject, homeCategory, notesFunction, todayCategory, todoAppTemplate, weekCategory } from "./dom-manipulation";


const todoApp = (function() {
        

    // TODO App template.
    document.body.innerHTML = `${todoAppTemplate().headerContainer.outerHTML}
    ${todoAppTemplate().mainContainer.outerHTML}
    ${todoAppTemplate().footerContainer.outerHTML}`;

    // After loading display all the tasks in home
    const taskList = document.querySelector('.task-list-container');
    taskList.innerHTML = homeCategory().tasksTodisplay.outerHTML;

    /**
     * Add an eventListener to each category, then call the corresponding function.
     * This apply for the home, today, week, and notes.
     */

    const projectCategory = Array.from(document.querySelectorAll('aside > h2'));
    projectCategory.forEach(category => category.addEventListener('click', () => {
        

        // Change the tasks according to the category.
        if (category.innerHTML === 'Home') {
            const home = homeCategory();
            console.log(home.homeSection)
            // taskList.innerHTML = homeCategory().tasksTodisplay.outerHTML;
        }
        else if (category.innerHTML === 'Today') {
            taskList.innerHTML = todayCategory().tasksTodisplay.outerHTML;
        }
        else if (category.innerHTML === 'Week') {
            taskList.innerHTML = weekCategory().tasksTodisplay.outerHTML;
        }
        else if (category.innerHTML === 'notes') {
            const mainSection = document.querySelector('.task-category');
            mainSection.classList.remove('task-category');

            const notes = notesFunction();
            mainSection.innerHTML = notes.noteSection.outerHTML;
            // taskList.innerHTML = notes.noteSection.outerHTML;
            console.log(mainSection);
        }
    }));

    // This is functionality of the subcategory project.
    const projectSubcategory = Array.from(document.querySelectorAll('h3'));
    projectSubcategory.forEach(subcategory => subcategory.addEventListener('click', () => {
        
        const projectName = subcategory.innerHTML;
        const projectTasks = customProject().Projects[projectName];

        const tasksTodisplay = taskManagerDisplay().displayTaskList(projectName, projectTasks);
        taskList.innerHTML = tasksTodisplay.outerHTML;
        

    }));

})();