import "../styles/style.css";
import tasks from "./tasks.js";

class Task {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

// sample data
const sampleTask = new Task('Sample Task', 'Sample Description', '10-31-2024', 'low', 'Get it done.');
const sampleTask2 = new Task('Second Task', 'This is a second task', '11-03-2024', 'medium', 'For real.');
const sampleTask3 = new Task('Third Sample', 'This again?', '12-12-2024', 'low', "That's enough, I think.");

const taskData = [];
taskData.push(sampleTask);
taskData.push(sampleTask2);
taskData.push(sampleTask3);

tasks.addTaskData(taskData);