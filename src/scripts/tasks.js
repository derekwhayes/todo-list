const tasks = (() => {
    
    const addFabBtn = (() => {
        const main = document.querySelector('main');

        const fabDiv = document.createElement('div');
        fabDiv.classList.add('fabDiv');
        fabDiv.innerHTML = '<svg class="fabBtn" width="6rem" height="6rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="1" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#606C38"/><path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#FEFAE0"/></svg>';

        main.append(fabDiv);   
    })();
    
})();

export {tasks};