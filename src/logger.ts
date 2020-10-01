import { LogLevel } from "./levels";
import { LogMode } from "./logMode";

export class Logger {
    private logLevel: LogLevel;
    private mode: LogMode;

    constructor(logLevel: LogLevel, mode: LogMode) {
        this.logLevel = logLevel;
        this.mode = mode;
    }

    public getLevel() {
        return this.logLevel;
    }

    public setLevel(level: LogLevel) {
        this.logLevel = level;
    }

    public doNothing() {
        // do not log
    }

    public get debug() {
        return this.logLevel <= LogLevel.DEBUG
            ? this.bindToFunc({
                  name: "DEBUG",
                  method: console.log,
                  background: "rgba(0,0,0,0.1)",
              })
            : this.doNothing;
    }

    public get info() {
        return this.logLevel <= LogLevel.INFO
            ? this.bindToFunc({
                  name: "INFO",
                  method: console.log,
                  background: "rgba(0,0,0,0.1)",
              })
            : this.doNothing;
    }

    public get warn() {
        return this.logLevel <= LogLevel.WARN
            ? this.bindToFunc({
                  name: "WARN",
                  method: console.warn,
                  background: "#FB8C00",
              })
            : this.doNothing;
    }

    public get error() {
        return this.logLevel <= LogLevel.ERROR
            ? this.bindToFunc({
                  name: "ERROR",
                  method: console.error,
                  background: "red",
              })
            : this.doNothing;
    }

    private bindToFunc(config: {
        name: string;
        method: any;
        background: string;
    }) {
        const methodName =
            this.mode === LogMode.WEB
                ? `%c${config.name}%c`
                : `[${config.name}]`;

        const style =
            this.mode === LogMode.WEB
                ? `font-size:10px;background:${config.background};color:white;padding:3px 6px`
                : ``;

        return Function.prototype.bind.call(
            config.method,
            console,
            methodName,
            style,
            ""
        );
    }
}
