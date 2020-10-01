import { Logger } from "./logger";
import { LogLevel } from "./levels";
import { LogMode } from "./logMode";

export interface LoggerConfig {
    level: LogLevel;
    mode: LogMode;
}

const defaultConfig: LoggerConfig = {
    level: LogLevel.INFO,
    mode: LogMode.WEB,
};

const nodeConfig: LoggerConfig = {
    level: LogLevel.INFO,
    mode: LogMode.SERVER,
};

export const createLogger = (config: LoggerConfig = defaultConfig) =>
    new Logger(config.level, config.mode);

export const createNodeLogger = () =>
    new Logger(nodeConfig.level, nodeConfig.mode);
