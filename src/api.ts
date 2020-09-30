import { Logger } from "./logger";
import { LogLevel } from "./levels";
import { LogMode } from "./logMode";

export const createLogger = () => new Logger(LogLevel.INFO, LogMode.WEB);
export const createNodeLogger = () => new Logger(LogLevel.INFO, LogMode.SERVER);
