import { Task } from "./task.js";
export class TaskAdder{
    constructor() {
        this.tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    }
    addTask(task,description,category){
        const newTask= new Task(task,description,category)
        this.tasks.push(newTask);
        this.#saveTask()
    }
    #saveTask(){
        localStorage.setItem("tasks",JSON.stringify(this.tasks));
    }
    static getTask(){
        return this.tasks
    }
}
export class TaskFilter {
static filtered(id){
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    const filteredTask=tasks.filter(elem=>{elem.id===id})
    if (filteredTask == -1) {
        console.log('task not found')
    }
    return filteredTask
}
static taskIdIndex(id){
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    const index=tasks.findIndex((elem)=>elem.id===id)
    if (index == -1){
        console.log('task not found')
    }
    return index
}
}
export class TaskDelete {
static taskdel(id){
    const filteredTask=TaskFilter.taskIdIndex(id)
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    const deleteTask= tasks.splice(filteredTask,1)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    const deletedTasks=JSON.parse(localStorage.getItem("deletedTask")) || [];
    deletedTasks.push(deleteTask)
    localStorage.setItem('deletedTask',JSON.stringify(deletedTasks))
}

}
export class TaskComplete {
    static complete(id){
    const filteredTask=TaskFilter.taskIdIndex(id)
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    const task=tasks[filteredTask] 
    console.log(filteredTask)    
    task.complete=true
    TaskDelete.taskdel(id)
    const completedTasks=JSON.parse(localStorage.getItem('completedTasks'))||[]
    completedTasks.push(task)
    localStorage.setItem('completedTasks',JSON.stringify(completedTasks))
    }
}
export class TaskStat{
    static completedStat(){
        const completedtasks=JSON.parse(localStorage.getItem('completedTasks'))||[]
        return completedtasks.length
    }
    static pendingStat(){
        const pendingStats=JSON.parse(localStorage.getItem('tasks'))||[]
        return pendingStats.length
    }
}
