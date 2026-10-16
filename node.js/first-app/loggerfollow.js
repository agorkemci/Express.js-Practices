
const Logger = require("./logger");

const logger = new Logger();

logger.on("connection", function(args) {
    console.log("connection established!", args);
});

logger.log("görkem logging oldu.");
