import { api } from "./modules/api.js";
import { TaskAdder,TaskFilter,TaskDelete } from "./modules/taskManger.js";
const taskEl=document.getElementById('taskText')
const taskLists=document.getElementById('taskContainer')
const taskDesEl=document.getElementById("taskDescription")
const taskCatEl=document.getElementById('category')
const submitBtn=document.getElementById('submit')
submitBtn.addEventListener('click',function submit(){
    //localStorage.clear() 
    const task=taskEl.value
    const description=taskDesEl.value
    const category=taskCatEl.value
    const newTask=new TaskAdder()
    newTask.addTask(task,description,category)
    
    taskLists.removeChild(taskLists.firstChild)
})
function taskContainer() {
    const frag= document.createDocumentFragment()
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach(element => {
    const li=document.createElement('li');
    const divTask=document.createElement('div');
        divTask.innerText=element.task
        divTask.classList.add('task')
    const divDes=document.createElement('div');
        divDes.innerText=element.description
        divDes.classList.add('description')
    const divCate=document.createElement('div');
        divCate.innerText=element.category
        divCate.classList.add('category')
    const divContainer=document.createElement('div');
        divContainer.classList.add('divContainer')
        divContainer.appendChild(divTask)
        divContainer.appendChild(divDes)
        divContainer.appendChild(divCate)
        li.appendChild(divContainer)
        frag.appendChild(li)
    });
   return taskLists.appendChild(frag)
}
taskContainer()
//removeEventListener('click',submit())

