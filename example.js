const spartanLogger = require("./dist");

const webLogger = spartanLogger.createLogger();
const nodeLogger = spartanLogger.createNodeLogger();

webLogger.info("Hello World!");
nodeLogger.info("Hello from Node");
