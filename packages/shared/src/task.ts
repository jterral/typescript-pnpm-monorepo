import { ITask } from "./contracts/task";

export class Task implements ITask {
  execute(taskName: string) {
    console.log(`Executing task: ${taskName}`);
  }
}
