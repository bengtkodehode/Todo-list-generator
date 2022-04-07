const input = document.querySelector('input')
const list = document.querySelector('ul')

let taskList = []

// 1. Guard clause making sure that you insert text or numbers in the array.
// 2. input.value="" is used to clear out the input area after a input is submitted.

document.querySelector('button').addEventListener('click', () => {
    if (!input.value) {alert("No text given, please type something."); return}
    
    addToDoItem(input.value)
    input.value = ""
})

// 1. Adding a guard clause to make sure that you can't add empty arrays.
// 2. Also making sure that you can use enter key to submit in the input. 

document.querySelector('input').addEventListener('keydown', (e) => {
    if(e.key === "Enter" && !input.value) { alert('No text given, please type something.')}
    if(e.key === "Enter" && input.value === "") return 
    if(e.key !== "Enter") return
    
    addToDoItem(input.value)
    input.value = ""
})

// 1. Creating the dynamic elements that will appear on webpage(<ul> -> <li> -> <p> + <del-button>).
// 2. The value of the input is stored as string and pushes to the taskList array.

function addToDoItem(text) {
    const li = document.createElement("li")
    const task = document.createElement("p")
    task.textContent = text
    li.append(task)
    list.appendChild(li)
    taskList.push(input.value)
    deleteButton(li)
}

// 1. Creating the delete button.
// 2. Adding text to button. 
// 3. Giving the delete button a class for styling and placement.
// 4. Adding the delete button to the li element.
// 5. Specifing what's going to be removed in the array.
// 6. Using splice on the spesific part of the array.

function deleteButton(li) {
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.classList.add('delete-btn', 'btn')
    li.append(deleteBtn);
    
    deleteBtn.addEventListener('click', () => {
        deleteBtn.parentNode.remove()
        let StringToRemove = deleteBtn.previousSibling.textContent
        let positionOfThatString = taskList.indexOf(StringToRemove)
        taskList.splice(positionOfThatString, 1)
    }) 
}

// 1. Guard claue that check it the array is empty, stoping the the button from making empty arrays.
// 2. Sorting Uppercase and lowercase in taskList with (a, b) => a.localeCompare(b).

document.querySelector('#sortBtn').addEventListener("click", (e) => {
    if(taskList.length > 0 ) {
        taskList.sort((a, b) => a.localeCompare(b))

        taskList.forEach(item => addToDoItem(item)) 
        console.log(taskList)
    }
})

// Depending on what kind of input you give, you can use date methods to order the list rather then using values used in this example.
// If you got the same value you can sort it by date/time code.






    



   









