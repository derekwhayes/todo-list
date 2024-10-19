import "../styles/style.css";
import { categories } from "./categories.js";
import { tasks } from "./tasks.js";

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

const createSampleData = (() => {
    // sample data
    const sampleTask = new Task('Sample Task', 'Sample Description', '10-31-2024', 'low', 'Get it done.');
    const sampleTask2 = new Task('Second Task', 'This is a second task', '11-03-2024', 'medium', 'For real.');
    const sampleTask3 = new Task('Third Sample', 'This again?', '12-12-2024', 'low', "That's enough, I think.");

    const taskData = [];
    taskData.push(sampleTask);
    taskData.push(sampleTask2);
    taskData.push(sampleTask3);

    const sampleCategory = new Category('Sample Category', 'Sample Description', 'notes for me', taskData);

    const categoryData = [];
    categoryData.push(sampleCategory);

    return {
        taskData,
        categoryData
    }
})();

// NAV BAR ---------------------
const homeBtn = document.querySelector('h1');
homeBtn.addEventListener('click', () => {
    
    categories();
    console.log('goto category list page');
});


const runCategoryPage = () => {
    const categoriesInstance = categories();
    const categoryListItems = categoriesInstance.addCategoryData(createSampleData.categoryData);

    categoriesInstance.fabDiv.addEventListener('click', () => {
        console.log('goto empty category detail page');
    });

    categoryListItems.forEach((category) => {
        category.addEventListener('click', (e) => {
            console.log(`goto ${e.target} detail page`);
        });
    });
}

// TASKS ------------------------
const runTaskPage = () => {
    const tasksInstance = tasks();
    const taskListItems = tasksInstance.addTaskData(createSampleData.taskData);

    tasksInstance.fabDiv.addEventListener('click', () => {
        console.log('goto empty task detail page')
    });

    taskListItems.forEach((task) => {
        task.addEventListener('click', (e) => {
            console.log(`goto ${e.target} detail page`);
        });
    });
}

runCategoryPage();