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

        const addTask = document.querySelector(".add-task");
        addTask.addEventListener("click", ()=> {
            addFunction();
        })

    } else {
        alert("The <dialog> API is not supported by this browser.");
    }
});

function addFunction() {
    alert("Task added")
}







// checkBox.addEventListener("click", ()=> {
//     const check = document.querySelector('#check');
    
//     check.addEventListener("click", ()=> {
//         if (check.classList.contains('fa-regular', 'fa-square')){
//             check.classList.add('fa-regular', 'fa-square-check');
//         }

//     }) 
    
    
// });


// Functionality of Hide Done Tasks ( NOT DONE )
check.addEventListener("click", ()=> {
    if (check.classList.contains('fa-regular', 'fa-square')){
        check.classList.add('fa-regular', 'fa-square-check');
    }
}) 


// Cancel option inside the dialog box
cancelBtn.addEventListener('click', ()=> {
    dialog.close();
    body.style.overflow = 'visible';
})