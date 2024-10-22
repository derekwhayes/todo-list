import { editTask } from "./editTask";
import { dateFormatter, runTaskPage, saveData } from "./index.js";

const taskDetail = (task, category) => {
    
    const main = document.querySelector('main');

    const loadPage = (() => {

        // add task header
        const taskHeader = document.createElement('div');
        taskHeader.classList.add('detailHeader');

        const taskHeaderH2 = document.createElement('h2');
        taskHeaderH2.textContent = task.title;

        const icons = document.createElement('div');
        icons.classList.add('detailIcons');

        const headerEditIconDiv = document.createElement('span');
        headerEditIconDiv.classList.add('headerEditIconDiv');
        headerEditIconDiv.innerHTML = '<svg width="2rem" height="2rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L16 3L9 10H6V7L13 0Z" fill="#fff"/><path d="M1 1V15H15V9H13V13H3V3H7V1H1Z" fill="#fff"/></svg>'

        const headerDeleteIconDiv = document.createElement('span');
        headerDeleteIconDiv.classList.add('headerDeleteIconDiv');
        headerDeleteIconDiv.innerHTML = '<svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        
        icons.append(headerEditIconDiv);
        icons.append(headerDeleteIconDiv);
        taskHeader.append(taskHeaderH2);
        taskHeader.append(icons);
        main.append(taskHeader);
        // task header end

        // task details
        const detailContainer = document.createElement('div');
        detailContainer.classList.add('detailContainer');

        const descriptionDiv = document.createElement('div');
        const descriptionHeader = document.createElement('h3');
        descriptionHeader.innerText = 'Description'
        const descriptionPara = document.createElement('p');
        descriptionPara.innerText = task.description;

        const dateDiv = document.createElement('div');
        const dateHeader = document.createElement('h3');
        dateHeader.innerText = 'Due Date'
        const datePara = document.createElement('p');
        datePara.innerText = dateFormatter(task.dueDate);

        const priorityDiv = document.createElement('div');
        const priorityHeader = document.createElement('h3');
        priorityHeader.innerText = 'Priority'
        const priorityPara = document.createElement('p');
        priorityPara.innerText = task.priority;

        const notesDiv = document.createElement('div');
        const notesHeader = document.createElement('h3');
        notesHeader.innerText = 'Notes'
        const notesPara = document.createElement('p');
        notesPara.innerText = task.notes;

        descriptionDiv.append(descriptionHeader);
        descriptionDiv.append(descriptionPara);
        dateDiv.append(dateHeader);
        dateDiv.append(datePara);
        priorityDiv.append(priorityHeader);
        priorityDiv.append(priorityPara);
        notesDiv.append(notesHeader);
        notesDiv.append(notesPara);
        detailContainer.append(descriptionDiv);
        detailContainer.append(dateDiv);
        detailContainer.append(priorityDiv);
        detailContainer.append(notesDiv);
        main.append(detailContainer);

        return {
            headerEditIconDiv,
            headerDeleteIconDiv
        }
    })();

    loadPage.headerEditIconDiv.addEventListener('click', () => {
        main.innerHTML = '';
        editTask(task);
    });

    loadPage.headerDeleteIconDiv.addEventListener('click', () => {
        const index = category.tasks.findIndex((item) => item.title === task.title);
        category.tasks.splice(index, 1);
        saveData();
        runTaskPage(category);
    })
}

export {taskDetail};