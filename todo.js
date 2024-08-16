const body = document.querySelector('body');
const mainTodo = document.querySelector(".main-todo");
const dialog = document.querySelector(".add-task-dialog");
const addBtn = document.querySelector("#add");
const cancelBtn = document.querySelector("#cancel");
const checkBox = document.querySelector('.checkbox');

addBtn.addEventListener("click", () => {
    if (typeof dialog.showModal === "function") {
        // Now dialog always acts like a native <dialog>.
        dialog.showModal();
        body.style.overflow = 'hidden';

    } else {
        alert("The <dialog> API is not supported by this browser.");
    }
});


// Functionality for adding different tasks / todo
const addTask = document.querySelector('.add-task');
addTask.addEventListener('click', ()=> {
    // Creating the main todo container
    const todo = document.createElement('div');
    todo.style.width = '45%';
    todo.style.height = '45%';
    todo.style.borderRadius = '10px';
    todo.style.backgroundColor = '#fff9de';

    // Creating a heading tag for title:
    const inputTitle = document.querySelector('#title');

    const title = document.createElement('h4');
    title.innerText = inputTitle.value;
    inputTitle.value = '';


    // Creating a paragraph tag for description:
    const inputDescription = document.querySelector("#description");
    const description = document.createElement('p');
    description.innerText = inputDescription.value;
    description.style.color = '#69665c';
    inputDescription.value = '';


    // Appending them one by one
    mainTodo.appendChild(todo);
    todo.appendChild(title);
    todo.appendChild(description);
    dialog.close();
    body.style.overflow = 'visible';
    
})






// Functionality of Hide Done Tasks ( NOT DONE )
check.addEventListener("click", ()=> {
    if (check.classList.contains('fa-regular', 'fa-square')){
        check.classList.add('fa-regular', 'fa-square-check');
    }
}) 


// Cancel option inside the dialog box (DONE)
cancelBtn.addEventListener('click', ()=> {
    dialog.close();
    body.style.overflow = 'visible';
})