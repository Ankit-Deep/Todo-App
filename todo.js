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

// Choosing tags in the dialog box or while creating a todo task
const individualCatagoryTag = document.querySelectorAll(".individual-catagory-tag");
individualCatagoryTag.forEach( tag => {
    tag.addEventListener("click",()=> {
        tag.style.backgroundColor = 'rgba(186, 186, 186, 0.285)';
    })
})

// Functionality for adding different tasks / todo
const addTask = document.querySelector('.add-task');
addTask.addEventListener('click', ()=> {
    // Accessing both the input tags (Title & Description)
    const inputTitle = document.querySelector('#title');
    const inputDescription = document.querySelector("#description");
    
    if (inputTitle.value === '' && inputDescription.value === '') {
        alert("Please Enter the Title & Description first.");
    } else {
        // Creaing the left div for todo
        const leftDiv = document.createElement('div');
        // leftDiv.style.border = '2px solid black';
        leftDiv.style.width = '80%';
        leftDiv.style.height = '100%';


        // Creating the main todo container
        const todo = document.createElement('div');
        todo.style.position = 'relative';
        todo.style.height = 'fit-content';
        todo.style.display = 'flex';
        todo.style.borderRadius = '15px';
        todo.style.backgroundColor = '#fff9de';
        
        // Creating a heading tag for title:
        const title = document.createElement('h4');
        title.style.fontSize = '1.25vw';
        title.style.marginBottom = '5%';
        title.style.width = 'fit-content';
        title.innerText = inputTitle.value;
        inputTitle.value = '';
        
        // Creating a paragraph tag for description:
        const description = document.createElement('p');
        description.style.width = '80%';
        description.innerText = inputDescription.value;
        description.style.color = '#69665c';
        inputDescription.value = '';

        // Creating right div for edit & delete option and done option
        const rightDiv = document.createElement('div');
        rightDiv.style.width = '20%';
        rightDiv.style.display = 'flex';
        rightDiv.style.flexDirection = 'column';
        rightDiv.style.alignItems = 'end';
        rightDiv.style.justifyContent = 'space-between';

        // Creating three dots to edit or delete
        const deleteTask = document.createElement('i');
        deleteTask.classList.add('fa-solid', 'fa-xmark');
        deleteTask.style.color = 'black';
        deleteTask.style.fontSize = '1.5vw';

        deleteTask.addEventListener('click', (e)=> {
            todo.remove();
        });

        let clickCount = 0;

        // Functionality to done and undo a task
        const doneTask = document.createElement('i');
        doneTask.classList.add('fa-regular','fa-square');
        doneTask.style.color = 'black';
        doneTask.style.fontSize = '1vw';

        doneTask.addEventListener('click', ()=> {
            clickCount++;
            
            if (clickCount%2 !== 0) {
                doneTask.classList.replace('fa-square', 'fa-square-check');
                title.innerHTML = `<del>${title.innerText}</del>`;
                description.innerHTML = `<del>${description.innerText}</del>`;
            } else {
                doneTask.classList.replace('fa-square-check','fa-square');
                title.innerHTML = title.innerText;
                description.innerHTML = description.innerText;
            }
        })

        // Responsiveness of Todo tasks
        if ( mainTodo.clientWidth > mainTodo.clientHeight ) {
            todo.style.width = '48%'
            todo.style.padding = '2%';
        } else {
            todo.style.width = '95%';
            todo.style.margin = '1.5% 2.5%';
            todo.style.padding = '3.5%';
            title.style.fontSize = '5.5vw';
            description.style.fontSize = '3.5vw';
            deleteTask.style.fontSize = '4.5vw';
            doneTask.style.fontSize = '3vw';
            rightDiv.style.marginRight = '2%';
        }

        // Appending them one by one
        mainTodo.appendChild(todo);
        todo.appendChild(leftDiv);
        todo.appendChild(rightDiv);
        leftDiv.appendChild(title);
        leftDiv.appendChild(description);
        rightDiv.appendChild(deleteTask);
        rightDiv.appendChild(doneTask);
        dialog.close();
        body.style.overflow = 'visible';
    }
})



let checkCount = 0;
// Functionality of Hide Done Tasks ( NOT DONE )
check.addEventListener("click", ()=> {
    checkCount++;

    if (checkCount%2 !== 0) {
        check.classList.replace('fa-square', 'fa-square-check')
    } else {
        check.classList.replace('fa-square-check','fa-square');
    }
}) 


// Cancel option inside the dialog box (DONE)
cancelBtn.addEventListener('click', ()=> {
    dialog.close();
    body.style.overflow = 'visible';
})