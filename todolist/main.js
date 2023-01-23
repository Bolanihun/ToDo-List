const addBtn = document.querySelector('.add-btn')
const todoList = document.querySelector('#display-list')
const errorMsg = document.querySelector('.error-msg')
const inputList = document.querySelector('#name')
let myList =  []
// const InputStorage = JSON.parse(localStorage.getItem('myList'))
addBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log('click')
    if(inputList.value === ''){
       errorMsg.textContent = 'Empty Field!'
    }
    else{   
        myList.push(inputList.value)
        //set value back to empty string
        inputList.value = ''
        localStorage.setItem("myList", JSON.stringify(myList))
        createList(myList) 
        //console.log(localStorage.getItem(myList))
    }
})
function createList(newlist){
  let listDisplay = ""
  for(let i = 0; i < newlist.length; i++){
    listDisplay += `
    <li class="list-tag">${newlist[i]}  
      <input class='completed' type='checkbox' >
    </li>`
  }
   todoList.innerHTML = listDisplay
   let tasklist = document.getElementsByClassName('.completed')

   console.log(tasklist)
  // for(let i = 0; i < tasklist.length; i++){
    
      //tasklist.addEventListener("change", function(){
      //   if(this.checked){
      //     // this.parentNode.remove()
      //     console.log("okay")

      //   }
      //   else{
      //     console.log("okay 5")
      //   }
      // })
    
 // }
}