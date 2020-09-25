import { createLogger, DEBUG } from "src/api";

describe("Basic Tests", () => {
    it("Should create Logger successfuly with DEBUG level", () => {
        const logger = createLogger();
        expect(logger.getLevel()).toBe(DEBUG);
    });
});
