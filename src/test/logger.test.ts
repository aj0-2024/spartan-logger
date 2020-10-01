import { createLogger, createNodeLogger, LogLevel } from "../";

describe("Logger Levels Tests", () => {
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
    it("Should not be log after SILENT", () => {
        const logger = createLogger();
        logger.setLevel(LogLevel.SILENT);

        // redirect console.log
        const mockLog = jest.fn(console.log);
        console.log = mockLog;

        logger.info("This should not be printed");
        expect(mockLog.mock.calls.length).toBe(0);
    });
});

describe("Should create a node logger", () => {
    it("Node logger should not print style", () => {
        const logger = createNodeLogger();
        const mockLog = jest.fn(console.log);
        console.log = mockLog;

        logger.info("Hello World!");
        expect(mockLog.mock.calls[0]).toEqual(["[INFO]", "", "Hello World!"]);
    });
});
