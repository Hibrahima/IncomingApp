export class Task{
    id: number;
    name: string;
    deadline: string;
    scope: string; // before | during | after
    status: number; // 0 = false = task not completed | 1 = true = task completed , false =
    description: string;
    priority: number; // prority of the task within the scope e.g 1, 2
    requiredness: string; // mandatory (for EU) | optional (for EU)

   /* constructor(name){
        this._name = name;
    }*/

    constructor(){

    }

    public createSimpleTask(name, deadline, scope, status, description, priotity, requiredness){
        let task = new Task();
        task.name = name;
        task.deadline = deadline;
        task.scope = scope;
        task.status = status;
        task.description = description;
        task.priority = priotity;
        task.requiredness = requiredness;

        return task;
    }
    /*constructor(name:string, deadline:string, scope: string, status: boolean, description: string, priority: number, requiredness: string ){
        this.name = name;
        this.deadline = deadline;
        this.scope = scope;
        this.status = status;
        this.description = description;
        this.priority = priority;
        this.requiredness = requiredness;
    }*/


}