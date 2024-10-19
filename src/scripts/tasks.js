import {categoryDetail} from "./categoryDetail.js";
import {taskDetail} from "./taskDetail.js";

const tasks = (category) => {

    const main = document.querySelector('main');
    
    // add FAB
    // only append if it doesn't exist
    let fabDiv = document.querySelector('.fabDiv');
    if (!fabDiv) {
        fabDiv = document.createElement('div');
        fabDiv.classList.add('fabDiv');
        fabDiv.innerHTML = '<svg class="fabBtn taskFab" width="6rem" height="6rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="1" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#606C38"/><path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#FEFAE0"/></svg>';
        main.append(fabDiv);
    }
    
    // add category header
    const categoryHeader = document.createElement('div');
    categoryHeader.classList.add('categoryHeader');

    const categoryHeaderH2 = document.createElement('h2');
    categoryHeaderH2.textContent = category.title;

    const headerOptionIconDiv = document.createElement('div');
    headerOptionIconDiv.classList.add('headerOptionIconDiv');
    headerOptionIconDiv.innerHTML = '<svg width="2rem" height="2rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8C4 9.10457 3.10457 10 2 10C0.895431 10 0 9.10457 0 8C0 6.89543 0.895431 6 2 6C3.10457 6 4 6.89543 4 8Z" fill="#fff"/><path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" fill="#fff"/><path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z" fill="#fff"/></svg>'

    categoryHeader.append(categoryHeaderH2);
    categoryHeader.append(headerOptionIconDiv);
    main.append(categoryHeader);

    // -----

    const addTaskData = (tasks) => {
        const taskList = document.createElement('ul');
        taskList.classList.add('list');
        
        tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.classList.add('taskListItem');
            listItem.classList.add('listItem');

            const titleSpan = document.createElement('span');
            titleSpan.classList.add('titleSpan');
            titleSpan.innerText = task.title;
            
            const dueDateSpan = document.createElement('span');
            dueDateSpan.classList.add('dueDateSpan');
            dueDateSpan.innerText = task.dueDate;
            
            listItem.append(titleSpan);
            listItem.append(dueDateSpan);
            taskList.append(listItem);

            listItem.addEventListener('click', (e) => {
                console.log(`goto ${e.target} detail page`);
                main.innerHTML = '';
                taskDetail(task);
            });
        });

        main.append(taskList);
        const taskListItems = document.querySelectorAll('.taskListItem');
        return taskListItems;
    }
    
    headerOptionIconDiv.addEventListener('click', () => {
        main.innerHTML = '';
        categoryDetail(category);
    });

    return {
        addTaskData,
        fabDiv
    };

};

export {tasks}