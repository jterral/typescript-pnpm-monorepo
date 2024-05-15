import { Task } from "@monorepo/shared/src/task";
import { CronJob } from "cron";

const job = CronJob.from({
  cronTime: "*/5 * * * * *",
  onTick: async function () {
    console.log(`Execution at ${new Date()}`);
    const task = new Task();
    task.execute("CronJob");
    console.log("");
  },
  start: true,
});

job.start();
