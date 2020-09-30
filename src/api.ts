import { Logger } from "./logger";
import { LogLevel } from "./levels";

export const createLogger = () => new Logger(LogLevel.INFO);
