const categoryDetail = ((category) => {
    console.log('You made it to the category Detail page');

    const main = document.querySelector('main');

    // add category header
    const categoryHeader = document.createElement('div');
    categoryHeader.classList.add('categoryHeader');

    const categoryHeaderH2 = document.createElement('h2');
    categoryHeaderH2.textContent = category.title;

    const headerOptionIconDiv = document.createElement('div');
    headerOptionIconDiv.classList.add('headerOptionIconDiv');
    headerOptionIconDiv.innerHTML = '<svg width="2rem" height="2rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8C4 9.10457 3.10457 10 2 10C0.895431 10 0 9.10457 0 8C0 6.89543 0.895431 6 2 6C3.10457 6 4 6.89543 4 8Z" fill="#fff"/><path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" fill="#fff"/><path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z" fill="#fff"/></svg>'

    categoryHeader.append(categoryHeaderH2);
    categoryHeader.append(headerOptionIconDiv);
    main.append(categoryHeader);
});

export {categoryDetail};