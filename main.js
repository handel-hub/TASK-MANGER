import { api } from "./modules/api.js";
import { TaskAdder,TaskComplete,TaskStat,TaskFilter } from "./modules/taskManger.js";
const taskEl=document.getElementById('taskText')
const taskLists=document.getElementById('taskContainer')
const taskDesEl=document.getElementById("taskDescription")
const taskCatEl=document.getElementById('category')
const submitBtn=document.getElementById('submit')
submitBtn.addEventListener('click',function submit(){ 
    const task=taskEl.value
    const description=taskDesEl.value
    const category=taskCatEl.value
    const newTask=new TaskAdder()
    newTask.addTask(task,description,category)
    taskLists.removeChild(taskLists.firstChild)
    taskContainer()
})
function taskContainer() {
    taskLists.innerHTML=""
    const frag= document.createDocumentFragment()
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach(element => {
    const li=document.createElement('li');
    const id=document.createElement('div')
        id.innerText=element.id
        id.classList.add('id')
    const divTask=document.createElement('div');
        divTask.innerText=element.task
        divTask.classList.add('task')
    const divDes=document.createElement('div');
        divDes.innerText=element.description
        divDes.classList.add('description')
    const divCate=document.createElement('div');
        divCate.innerText=element.category
        divCate.classList.add('category')
    const btn=document.createElement('button')
        btn.classList.add('completeButton')
        btn.textContent="complete"
    const editBtn=document.createElement('button')
        editBtn.classList.add('editButton')
        editBtn.textContent="edit task"
    const divContainer=document.createElement('div');
        divContainer.classList.add('divContainer')
        divContainer.appendChild(divTask)
        divContainer.appendChild(divDes)
        divContainer.appendChild(divCate)
        divContainer.appendChild(id)
        divContainer.appendChild(btn)
        divContainer.appendChild(editBtn)
        li.appendChild(divContainer)
        frag.appendChild(li)
    });
    return taskLists.appendChild(frag)
}
taskContainer()
export function show() {
    const sep=document.getElementById("seprate")
    const div=document.createElement('div')
    div.setAttribute('id','spinner')
    sep.appendChild(div)
}
export function hide() {
    const div=document.getElementById('spinner')
    div.id=''
}
const completeButton=document.getElementsByClassName('completeButton')
Array.from(completeButton).forEach((elem )=>{
    elem.addEventListener('click',complete) 
})
function complete(e){
    const target=e.target.previousElementSibling
    const id=target.innerText
    console.log(id)
    const b=JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(localStorage)
    console.log(b)
    TaskComplete.complete(id)
    taskStat()
    completeSection()
}
function completeSection(){
    const completedSection=document.getElementById('completedSection')
    const frag=document.createDocumentFragment()
    const completedTask=JSON.parse(localStorage.getItem('completedTasks'))||[]
    completedTask.forEach(elem=>{
        const li=document.createElement('li')
        const task=document.createElement('div')
        task.classList.add('completedTask')
        task.innerText=elem.task
        const description=document.createElement('div')
        description.classList.add('completedDescription')
        description.innerText=elem.description
        const category=document.createElement('div')
        category.classList.add('completedCategory')
        category.innerText=elem.category
        const completeDiv=document.createElement('div')
        completeDiv.classList.add('completeDiv')
        completeDiv.appendChild(task)
        completeDiv.appendChild(description)
        completeDiv.appendChild(category)
        li.appendChild(completeDiv)
        frag.appendChild(li)
        
    })
    console.log(frag)
    return completedSection.appendChild(frag)
}
completeSection()
function taskStat() {
    const frag=document.createDocumentFragment()
    const completeStat=TaskStat.completedStat()
    const pendingStat=TaskStat.pendingStat()
    const statElContainer=document.getElementById('stats')
    const completeEl=document.createElement('div')
    completeEl.innerText=completeStat
    completeEl.id='completeStat'
    const pendingEl=document.createElement('div')
    pendingEl.innerText=pendingStat
    pendingEl.id='pendingStat'
    frag.appendChild(completeEl)
    frag.appendChild(pendingEl)
    statElContainer.appendChild(frag)
}
taskStat()
const editBtn=document.getElementsByClassName('editButton')
Array.from(editBtn).forEach((elem)=>{
    elem.addEventListener('click',editTask)
})
function editTask(e) {
    const parent=e.target.parentElement
    const taskEl=parent.firstElementChild
    const task=taskEl.innerText
    const descriptionEl=taskEl.nextElementSibling
    const description=descriptionEl.innerText
    const categoryEl=descriptionEl.nextElementSibling
    const category=categoryEl
    const filteredTask=TaskFilter.filtered()

}
