import { Task } from "./index.js";
import { runTaskPage, saveData } from "./index.js"
import { taskDetail } from "./taskDetail";

const editTask = (task, category) => {
    
    const main = document.querySelector('main');
    const loadPage = (() => {

        const form = document.createElement('form');
        main.append(form);

        const titleDiv = document.createElement('div');
        form.append(titleDiv);

        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'taskTitle');
        titleLabel.innerText = 'Title'
        titleDiv.append(titleLabel);

        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.name = 'title';
        titleInput.id = 'taskTitle';
        titleInput.setAttribute('required', 'true');
        titleInput.setAttribute('maxlength', '25')
        titleDiv.append(titleInput);

        const descriptionDiv = document.createElement('div');
        form.append(descriptionDiv);

        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'taskDescription');
        descriptionLabel.innerText = 'Description';
        descriptionDiv.append(descriptionLabel);

        const descriptionInput = document.createElement('textarea');
        descriptionInput.name = 'description';
        descriptionInput.id = 'taskDescription';
        descriptionDiv.append(descriptionInput);

        const dueDateDiv = document.createElement('div');
        form.append(dueDateDiv);

        const dueDateLabel = document.createElement('label');
        dueDateLabel.setAttribute('for', 'dueDate');
        dueDateLabel.innerText = 'Due Date';
        dueDateDiv.append(dueDateLabel);

        const dueDateInput = document.createElement('input');
        dueDateInput.id = 'dueDate';
        dueDateInput.name = 'dueDate';
        dueDateInput.type = 'date';
        dueDateInput.setAttribute('required', 'true');
        dueDateDiv.append(dueDateInput);

        const priorityDiv = document.createElement('div');
        form.append(priorityDiv);

        const priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.innerText = 'Priority';
        priorityDiv.append(priorityLabel);

        const priorityInput = document.createElement('select');
        priorityInput.id = 'priority';
        priorityInput.name = 'priority';
        priorityDiv.append(priorityInput);

        const highOption = document.createElement('option');
        highOption.value = 'high';
        highOption.innerText = 'High';
        priorityInput.append(highOption);

        const mediumOption = document.createElement('option');
        mediumOption.value = 'medium';
        mediumOption.selected = 'true';
        mediumOption.innerText = 'Medium';
        priorityInput.append(mediumOption);

        const lowOption = document.createElement('option');
        lowOption.value = 'low';
        lowOption.innerText = 'Low';
        priorityInput.append(lowOption);

        const notesDiv = document.createElement('div');
        form.append(notesDiv);

        const notesLabel = document.createElement('label');
        notesLabel.setAttribute('for', 'taskNotes');
        notesLabel.innerText = 'Notes';
        notesDiv.append(notesLabel);

        const notesInput = document.createElement('textarea');
        notesInput.name = 'notes';
        notesInput.id = 'taskNotes';
        notesDiv.append(notesInput);

        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.innerText = 'Save';
        form.append(submitButton);
        
        if (task) {
            titleInput.value = task.title;
            descriptionInput.value = task.description;
            dueDateInput.valueAsDate = task.dueDate;
            priorityInput.value = task.priority; 
            notesInput.value = task.notes;
        }

        return {
            form,
            submitButton,
            titleInput,
            descriptionInput,
            dueDateInput,
            priorityInput,
            notesInput
        }
    })();

    let isNewTask = false;
    const updateTask = () => {
        task.title = loadPage.titleInput.value;
        task.description = loadPage.descriptionInput.value;
        task.dueDate = new Date(loadPage.dueDateInput.value);
        task.priority = loadPage.priorityInput.value;
        task.notes = loadPage.notesInput.value;
        if (isNewTask) {
            category.tasks.push(task);
            saveData();
            runTaskPage(category);
        }
        else {
            saveData();
            main.innerHTML = '';
            taskDetail(task);
        }
    }

    loadPage.submitButton.addEventListener('click', (e) => {
        isNewTask = false;
        e.preventDefault();
        if (!loadPage.form.checkValidity()) {
            loadPage.form.reportValidity();
            return;
        }
        if (!task) {
            task = new Task('', '', '', '', '');
            isNewTask = true;
        }
        updateTask();
    })
}

export {editTask};