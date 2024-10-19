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
    const sampleTask4 = new Task('Sample Task', 'Sample Description', '10-31-2024', 'low', 'Get it done.');
    const sampleTask5 = new Task('Second Task', 'This is a second task', '11-03-2024', 'medium', 'For real.');
    const sampleTask6 = new Task('Third Sample', 'This again?', '12-12-2024', 'low', "That's enough, I think.");
    const sampleTask7 = new Task('Sample Task', 'Sample Description', '10-31-2024', 'low', 'Get it done.');
    const sampleTask8 = new Task('Second Task', 'This is a second task', '11-03-2024', 'medium', 'For real.');
    const sampleTask9 = new Task('Third Sample', 'This again?', '12-12-2024', 'low', "That's enough, I think.");
    const sampleTask10 = new Task('Third Sample', 'This again?', '12-12-2024', 'low', "That's enough, I think.");
    const sampleTask11 = new Task('Sample Task', 'Sample Description', '10-31-2024', 'low', 'Get it done.');
    const sampleTask12 = new Task('Second Task', 'This is a second task', '11-03-2024', 'medium', 'For real.');
    const sampleTask13 = new Task('Third Sample', 'This again?', '12-12-2024', 'low', "That's enough, I think.");

    const taskData = [];
    taskData.push(sampleTask);
    taskData.push(sampleTask2);
    taskData.push(sampleTask3);
    taskData.push(sampleTask4);
    taskData.push(sampleTask5);
    taskData.push(sampleTask6);
    taskData.push(sampleTask7);
    taskData.push(sampleTask8);
    taskData.push(sampleTask9);
    taskData.push(sampleTask10);
    taskData.push(sampleTask11);
    taskData.push(sampleTask12);
    taskData.push(sampleTask13);



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

const main = document.querySelector('main');

const runCategoryPage = () => {
    const categoriesInstance = categories();
    const categoryListItems = categoriesInstance.addCategoryData(createSampleData.categoryData);

    categoriesInstance.fabDiv.addEventListener('click', () => {
        console.log('goto empty category detail page');
    });

    categoryListItems.forEach((category) => {
        category.addEventListener('click', (e) => {
            console.log(`goto ${e.target} task list page`);

            const index = Array.prototype.indexOf.call(categoryListItems, category);
            runTaskPage(createSampleData.categoryData[index]);
            
            
        });
    });
}

// TASKS ------------------------
const runTaskPage = (category) => {
    main.innerHTML = '';
    const tasksInstance = tasks(category);
    const taskListItems = tasksInstance.addTaskData(category.tasks);

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