const addBtn=document.getElementById('add_btn');
const formInput=document.getElementById('form_input');
const error=document.getElementById('error');
const priorityValue=document.getElementById('priority');
let count=0;
let taskArr=JSON.parse(localStorage.getItem("key"));
console.log(taskArr);
if(!taskArr){
    taskArr=[];
}



function addTodo(e){
    e.preventDefault();
    console.log(formInput.value)
   if(formInput.value==""){
    console.log("hello")
     error.innerText="*please enter your task";
     setTimeout(()=>{
        error.innerText="";
     },2000)
   }else if(formInput.value!==""){
    const todoObj={
        id:count++,
        task:formInput.value,
        priority:priorityValue.value
    }

    taskArr.push(todoObj);
    localStorage.setItem("key", JSON.stringify(taskArr));
     createList(todoObj)
   }
}

addBtn.addEventListener('click', addTodo)