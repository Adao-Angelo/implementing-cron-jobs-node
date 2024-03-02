import cron from "node-cron";

export function start() {
  cron.schedule("5 * * * * *", () => {
    console.info({ message: "load" });
  });
}
