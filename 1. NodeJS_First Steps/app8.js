const EventEmitter = require('events'); /*Classes should be call with upppercase each word as this variable*/

const Logger = require('./logger');
const logger = new Logger

logger.on("messageLogged", (arg) => {
  console.log("Listener Called", arg);
});


logger.log('message');
