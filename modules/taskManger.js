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
    getTask(){
        return this.tasks
    }
}
export class TaskFilter {
static taskId(id){
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    return tasks.filter((elem)=>{
        return elem.id===id?elem:console.log('task not found')
    })
}
static taskIdIndex(id){
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    return tasks.findIndex((elem)=>{
        return elem.id===id?elem:console.log('task not found')
    })
}
}
export class TaskDelete {
static taskdel(id){
    const filteredTask=TaskFilter.taskIdIndex(id)
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.splice(filteredTask,1)
}

}
