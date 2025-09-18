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
static taskId(id){

    
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
    const deletedtask= tasks.splice(filteredTask,1)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    localStorage.setItem('deletedtask',JSON.stringify(deletedtask))||[]
}

}
export class TaskComplete {
    static complete(id){
    const filteredTask=TaskFilter.taskIdIndex(id)
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    const task=tasks[filteredTask]     
    task.complete=true
    TaskDelete.taskdel(id)
    localStorage.setItem('completedtask',JSON.stringify(task))||[]
    }
}
export class TaskStat{
    static completedStat(){
        const completedtasks=JSON.parse(localStorage.getItem('completedtask'))||[]
        return completedtasks.length
    }
    static pendingStat(){
        const pendingStats=JSON.parse(localStorage.getItem('tasks'))||[]
        return pendingStats.length
    }
}
