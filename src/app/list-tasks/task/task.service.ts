export type Task = {
    title: string;
    status: boolean;
    id: number
}

export class TaskService{
    listTask: Task[] = [
        {
            title: 'Estudar Angular',
            status: true,
            id: 1
        },
        {
            title: 'Postar Todo List no Github',
            status: true,
            id: 2
        },
        {
            title: 'Estudar Nativescript',
            status: false,
            id: 3
        }
    ]

    addTask(task: Task){
        this.listTask.push(task)
    }

    generateId(){
        return this.listTask.length >= 1 ? this.listTask[this.listTask.length -1].id + 1 : 1
    }

    removeTask(task: Task){
        let i = 0
        for(let taskItem of this.listTask){
            if(taskItem.id == task.id){
                this.listTask.splice(i, 1)
                break
            }
            i++
        }
    }

}