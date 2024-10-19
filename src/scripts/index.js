import "../styles/style.css";
import {tasks} from "./tasks.js";

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

    return {
        taskData,
        sampleCategory
    }
})();

// TASK PAGE
const tasksInstance = tasks();
const taskListItems = tasksInstance.addTaskData(createSampleData.taskData);

const fabBtnPressed = (e) => {
    const targetSvg = e.target.closest('svg');
    console.log('fabBtn pressed', targetSvg);

    // see which screen the fab is being clicked on
    if (targetSvg.classList.contains('taskFab')) {
        console.log('yes');
    }
}

tasksInstance.fabDiv.addEventListener('click', fabBtnPressed);

taskListItems.forEach((task) => {
    task.addEventListener('click', (e) => {
        console.log(`${e.target} clicked!`);
    });
});

// NAV BAR
const homeBtn = document.querySelector('h1');
homeBtn.addEventListener('click', () => {
    tasks();
    console.log('home clicked');
});

const menuBtn = document.querySelector('.menuBtn');
menuBtn.addEventListener('click', () => {
    console.log('Menu clicked');
});