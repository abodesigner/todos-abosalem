export interface ITask {
    id:number,
    text: string,
    isDone: boolean
}

export interface Props {
    task: ITask,
    completeTask(deleteTask: string): void;
}