import "../styles/style.css";
import { categories } from "./categories.js";
import { tasks } from "./tasks.js";
import { editCategory } from "./editCategory.js";
import { editTask } from "./editTask.js";

class Task {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

class Category {
    constructor(title, description, notes, tasks) {
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.tasks = tasks;
    }
}

const categoryData = [];
const createSampleData = (() => {
    // sample data
    const sampleTask = new Task('Sample Task', 'Sample Description', new Date("2024-10-31"), 'low', 'Get it done.');
    const sampleTask2 = new Task('Second Task', 'This is a second task', new Date('2024-11-03'), 'medium', 'For real.');
    const sampleTask3 = new Task('Third Sample', 'This again?', new Date('2025-12-12'), 'low', "That's enough, I think.");

    const taskData = [];
    taskData.push(sampleTask);
    taskData.push(sampleTask2);
    taskData.push(sampleTask3);

    const sampleCategory = new Category('Sample Category', 'Sample Description', 'notes for me', taskData);

    categoryData.push(sampleCategory);

    return {
        taskData,
        categoryData
    }
})();

const dateFormatter = (date) => {
    let formattedDate;
    console.log(date.getYear())
    console.log(new Date().getFullYear())
    if (date.getFullYear() === new Date().getFullYear()) {
        formattedDate = new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric'}).format(date);
    }
    else {
        formattedDate = new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric', year: 'numeric'}).format(date);
    }
    return formattedDate.toString();
}

// NAV BAR ---------------------
const homeBtn = document.querySelector('h1');
homeBtn.addEventListener('click', () => {
    main.innerHTML = '';
    runCategoryPage(categoryData);
    console.log('goto category list page');
});

const main = document.querySelector('main');

const runCategoryPage = (catData) => {
    const categoriesInstance = categories();
    const categoryListItems = categoriesInstance.addCategoryData(catData);

    // TASKS ------------------------
    // putting these listeners here made since at the time! TODO: move it to apporpriate pages
    categoriesInstance.fabDiv.addEventListener('click', () => {
        main.innerHTML = '';
        editCategory();
    });

    categoryListItems.forEach((category) => {
        category.addEventListener('click', (e) => {
            console.log(`goto ${e.target} task list page`);

            const index = Array.prototype.indexOf.call(categoryListItems, category);
            runTaskPage(categoryData[index]);
            
            
        });
    });
}

const runTaskPage = (category) => {
    main.innerHTML = '';
    const tasksInstance = tasks(category);
    const taskListItems = tasksInstance.addTaskData(category.tasks);

    tasksInstance.fabDiv.addEventListener('click', () => {
        main.innerHTML = '';
        editTask();
    });
}

runCategoryPage(categoryData);

export {dateFormatter, Task, Category, runCategoryPage, categoryData};