import { createLogger, LogLevel } from "../";

describe("Logger Tests", () => {
    it("Should create Logger successfuly with DEBUG level", () => {
        const logger = createLogger();
        expect(logger.getLevel()).toBe(LogLevel.DEBUG);
    });

    it("Should change the logger level", () => {
        const logger = createLogger();
        logger.setLevel(LogLevel.INFO);
        logger.info("Hello world!");
        expect(logger.getLevel()).toBe(LogLevel.INFO);
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
        logger.info("This should not be printed");
        expect(consoleOutput).toBe([]);
    });
});
