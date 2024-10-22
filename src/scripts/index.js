import "../styles/style.css";
import { categories } from "./categories.js";
import { tasks } from "./tasks.js";
import { editCategory } from "./editCategory.js";
import { editTask } from "./editTask.js";
import { taskDetail } from "./taskDetail.js";
import { categoryDetail } from "./categoryDetail.js";

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

let categoryData = [];
const createSampleData = () => {
    // sample data
    // task objects contain task details
    const sampleTask = new Task('Clean Dishes', 'Clean and dry dirty dishes.', new Date("2024-10-31"), 'low', 'Do it before the pile gets too big!');
    const sampleTask2 = new Task('Laundry', 'Wash clothes.', new Date('2024-11-03'), 'medium', "They're getting smelly.");
    const sampleTask3 = new Task('Replace Roof', 'Buy and install a new roof.', new Date('2025-12-12'), 'high', "Need shelter!!!");

    // tasks are saved in taskData array
    const taskData = [];
    taskData.push(sampleTask);
    taskData.push(sampleTask2);
    taskData.push(sampleTask3);

    // category object containes category details as well as taskData array
    const sampleCategory = new Category('General Todos', 'General tasks.', '', taskData);

    categoryData.push(sampleCategory);

    return {
        taskData,
        categoryData
    }
};

const saveData = () => {
    console.log('data saved');
    localStorage.setItem('categoryData', JSON.stringify(categoryData));
};

const loadData = () => {
    console.log('data loaded');
    const storedData = localStorage.getItem('categoryData');
    categoryData = JSON.parse(storedData);
    categoryData.forEach((category) => {
        const tasks = category.tasks;
        tasks.forEach((task) => {
            task.dueDate = new Date(task.dueDate);
        });
    });
};

const dateFormatter = (date) => {
    
    let formattedDate;
    
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
    history.pushState({page: 'categories'}, '', '/todo-list/categories');
    main.innerHTML = '';
    runCategoryPage(categoryData);
    console.log('goto category list page');
});

const main = document.querySelector('main');

const runCategoryPage = (catData) => {
    
    main.innerHTML = '';
    const categoriesInstance = categories();
    const categoryListItems = categoriesInstance.addCategoryData(catData);

    // TASKS ------------------------
    // putting these listeners here made since at the time! TODO: move it to apporpriate pages
    categoriesInstance.fabDiv.addEventListener('click', () => {
        history.pushState({page: 'editCategory', category: ''}, '', '/todo-list/edit-category');
        main.innerHTML = '';
        editCategory();
    });

    categoryListItems.forEach((category) => {
        category.addEventListener('click', (e) => {
            const index = Array.prototype.indexOf.call(categoryListItems, category);
            history.pushState({page: 'tasks', category: categoryData[index]}, '', '/todo-list/tasks');
            runTaskPage(categoryData[index]);
            
            
        });
    });
}

const runTaskPage = (category) => {
    main.innerHTML = '';
    const tasksInstance = tasks(category);
    const taskListItems = tasksInstance.addTaskData(category.tasks);

    tasksInstance.fabDiv.addEventListener('click', () => {
        history.pushState({page: 'editTask', task: '', category: category}, '', '/todo-list/edit-task');
        main.innerHTML = '';
        editTask('', category);
    });
}

// check if there is saved data
if (!localStorage.getItem("categoryData")) {
    createSampleData();
    saveData();
}
else {
    loadData();
}


// handle the back button
window.addEventListener('popstate', (e) => {
    const state = e.state;

    if (state) {
        if (state.page === 'categories') {
            runCategoryPage(categoryData);
        }
        else if (state.page === 'editCategory') {
            main.innerHTML = '';
            editCategory(state.category);
        }
        else if (state.page === 'tasks') {
            runTaskPage(state.category);
        }
        else if (state.page === 'editTask') {
            main.innerHTML = '';
            editTask(state.task, state.category);
        }
        else if (state.page === 'taskDetail') {
            main.innerHTML = '';
            taskDetail(state.task, state.category);
        }
        else if (state.page === 'categoryDetail') {
            main.innerHTML = '';
            categoryDetail(state.category);
        }
    }
    else {
        runCategoryPage(categoryData);
    }
});

history.replaceState({page: 'categories'}, '', '/todo-list/categories');

runCategoryPage(categoryData);


export {dateFormatter, Task, Category, runCategoryPage, categoryData, runTaskPage, saveData};