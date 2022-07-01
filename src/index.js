import _ from "lodash";
import './style.css';
import { todoAppTemplate } from "./DOM-template";
import { todoTasks } from "./dom";

const todoApp = (function() {
        
    // TODO App template.
    document.body.innerHTML = `${todoAppTemplate().headerContainer.outerHTML}
    ${todoAppTemplate().mainContainer.outerHTML}
    ${todoAppTemplate().footerContainer.outerHTML}`;

    // TODO tasks
    const main = document.querySelector('main');
    const taskList = todoTasks().homeTaskContainer
    main.appendChild(taskList);

    console.log(taskList);
})();

