# Spartan Logger
This logger is built for minimalists.

[![Actions Status](https://github.com/anirudh-janga/minimalist-logger/workflows/CI/badge.svg)](https://github.com/anirudh-janga/minimalist-logger/actions)

# Features
Works great with React/Angular projects

1. Switch to different logging levels - INFO, DEBUG, WARN, SILENT
2. Turn off all logs for production builds using SILENT level

# Usage

`
import { createLogger } from "spartan-logger";

logger = createLogger();

logger.debug("This is a DEBUG message");
logger.info("Hello, World!");
logger.error("This is an error message");
`

