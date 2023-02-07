let input = document.querySelector(".user-input");
let addBtn = document.querySelector(".add");
let taskSection = document.querySelector(".tasks-section");

input.addEventListener('keyup', () => {
    if (input.value.trim () != 0){
        addBtn.classList.add('active')
    } else {
        add.classList.remove('active')
    }
})

addBtn.addEventListener('click', () =>{
    if(input.value.trim () != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('tasks');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="task-button">
            <i class="fa-sharp fa-solid fa-pen"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>`
        taskSection.appendChild(newItem);
        input.value = ' ';
    }else {
        alert('Please enter a task');
    }
})

taskSection.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
}})

taskSection.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-sharp')){
        e.target.parentElement.parentElement.classList.toggle('completion');
    }})
    