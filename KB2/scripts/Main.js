import { system } from "@minecraft/server";
import "./waypoints";
import "./edit";

system.events.beforeWatchdogTerminate.subscribe(data => {
  data.cancel = true;
});