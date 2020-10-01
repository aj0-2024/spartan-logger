const spartanLogger = require("../dist");

const logger = spartanLogger.createNodeLogger();
logger.setLevel(spartanLogger.LogLevel.DEBUG);

logger.debug("This is a DEBUG message");
logger.info("Hello, World!");
logger.error("This is an error message");
