import { LogLevel } from "./levels";

export class Logger {
    private logLevel: LogLevel;

    constructor(logLevel: LogLevel) {
        this.logLevel = logLevel;
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
                  name: "INFO",
                  method: console.log,
                  background: "#FB8C00",
              })
            : this.doNothing;
    }

    public get error() {
        return this.logLevel <= LogLevel.ERROR
            ? this.bindToFunc({
                  name: "ERROR",
                  method: console.log,
                  background: "red",
              })
            : this.doNothing;
    }

    public get assert() {
        return this.bindToFunc({
            name: "ASSERT",
            method: console.assert,
            background: "red",
        });
    }

    private bindToFunc(config: {
        name: string;
        method: any;
        background: string;
    }) {
        return Function.prototype.bind.call(
            config.method,
            console,
            `%c${config.name}%c`,
            `font-size:10px;background:${config.background};color:white;padding:3px 6px`
        );
    }
}
