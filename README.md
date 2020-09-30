# Spartan Logger
This logger is built for minimalists.

[![Actions Status](https://github.com/anirudh-janga/minimalist-logger/workflows/CI/badge.svg)](https://github.com/anirudh-janga/minimalist-logger/actions)

# Features
 - Works great with React/Angular/Vue projects. 
 - Works with any Javascript or Typescript applications.
 - Only 645 Bytes (0 dependencies, minified & gzipped)

1. Switch to different logging levels - INFO, DEBUG, WARN, SILENT
2. Turn off all logs for production builds using SILENT level

# Usage

## Creating a new logger

```
import { createLogger } from "spartan-logger";

logger = createLogger();
```

## Logger Levels
```
DEBUG < INFO < WARN < ERROR < SILENT
```

## Use the logger to log with various levels

The default logger level is `INFO`

```
logger.debug("This is a DEBUG message");
logger.info("Hello, World!");
logger.error("This is an error message");
```

### Change to SILENT when in production

```
import { createLogger, LogLevel } from "spartan-logger";

const logger = createLogger();

if (process.env.NODE_ENV === 'production') {
    logger.setLevel(LogLevel.SILENT);
}
```

