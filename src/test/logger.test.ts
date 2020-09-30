import { createLogger, createNodeLogger, LogLevel } from "../";

describe("Logger Tests", () => {
    it("Should create Logger successfuly with INFO level", () => {
        const logger = createLogger();
        expect(logger.getLevel()).toBe(LogLevel.INFO);
    });

    it("Should change the logger level", () => {
        const logger = createLogger();
        logger.setLevel(LogLevel.WARN);
        logger.info("Hello world!");
        expect(logger.getLevel()).toBe(LogLevel.WARN);
    });
});

describe("Should not log after setting SILENT", () => {
    const logger = createLogger();

    // Redirect console.log
    let consoleOutput: string[] = [];
    const mockedLog = (output: string) => consoleOutput.push(output);
    console.log = mockedLog;

    it("Should not be log after SILENT", () => {
        // Try and see if there is console output
        logger.setLevel(LogLevel.SILENT);
        consoleOutput = [];
        logger.info("This should not be printed");
        expect(consoleOutput.length).toBe(0);
    });
});

describe("Should create a node logger", () => {
    const logger = createNodeLogger();

    // Redirect console.log
    let consoleOutput: string[] = [];
    const mockedLog = (output: string) => consoleOutput.push(output);

    it("Node logger should not print style", () => {
        console.log = mockedLog;

        logger.info("Hello World!");
        // TODO: expect(consoleOutput[0]).toBe("[INFO] Hello World!");
    });
});
