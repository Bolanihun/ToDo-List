const addBtn = document.querySelector('.add-btn')
const todoList = document.querySelector('#display-list')
const errorMsg = document.querySelector('.error-msg')
const inputList = document.querySelector('#name')




addBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log('click')
     
    if(inputList.value === ''){
       errorMsg.textContent = 'Empty Field!'
    }
    else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(inputList.value))
        todoList.appendChild(li)

        //set value back to empty string
        inputList.value = ''
    }


})