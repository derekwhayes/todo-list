const editCategory = (category) => {
    
    const loadPage = (() => {
        const main = document.querySelector('main');

        const form = document.createElement('form');
        main.append(form);

        const titleDiv = document.createElement('div');
        form.append(titleDiv);

        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'categoryTitle');
        titleLabel.innerText = 'Title'
        titleDiv.append(titleLabel);

        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.name = 'title';
        titleInput.id = 'categoryTitle'
        titleDiv.append(titleInput);

        const descriptionDiv = document.createElement('div');
        form.append(descriptionDiv);

        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'categoryDescription');
        descriptionLabel.innerText = 'Description';
        descriptionDiv.append(descriptionLabel);

        const descriptionInput = document.createElement('textarea');
        descriptionInput.name = 'description';
        descriptionInput.id = 'categoryDescription';
        descriptionDiv.append(descriptionInput);

        const notesDiv = document.createElement('div');
        form.append(notesDiv);

        const notesLabel = document.createElement('label');
        notesLabel.setAttribute('for', 'categoryNotes');
        notesLabel.innerText = 'Notes';
        notesDiv.append(notesLabel);

        const notesInput = document.createElement('textarea');
        notesInput.name = 'notes';
        notesInput.id = 'categoryNotes';
        notesDiv.append(notesInput);

        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.innerText = 'Submit';
        form.append(submitButton);
    })();
    
    
    
    
    
    
    if (category) {
        // populate fields
    }
};

export {editCategory};