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

const createSampleData = (() => {
    // sample data
    const sampleTask = new Task('Sample Task', 'Sample Description', '10-31-2024', 'low', 'Get it done.');
    const sampleTask2 = new Task('Second Task', 'This is a second task', '11-03-2024', 'medium', 'For real.');
    const sampleTask3 = new Task('Third Sample', 'This again?', '12-12-2024', 'low', "That's enough, I think.");

    const taskData = [];
    taskData.push(sampleTask);
    taskData.push(sampleTask2);
    taskData.push(sampleTask3);

    return {
        taskData
    }
})();

const tasksInstance = tasks();
const taskListItems = tasksInstance.addTaskData(createSampleData.taskData);



const fabBtnPressed = () => {
    console.log('fabBtn pressed');
}

tasksInstance.fabDiv.addEventListener('click', fabBtnPressed);

taskListItems.forEach((task) => {
    task.addEventListener('click', (e) => {
        console.log(`${e.target} clicked!`);
    });
});

const homeBtn = document.querySelector('h1');
homeBtn.addEventListener('click', () => {
    console.log('Home clicked');
});

const menuBtn = document.querySelector('.menuBtn');
menuBtn.addEventListener('click', () => {
    console.log('Menu clicked');
});