const EventEmitter = require("events"); /*Classes should be call with upppercase each word as this variable*/

const url = "http://mylogger.io.log/";

class Logger extends EventEmitter
{
    log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "https://" });
    }
}

module.exports = Logger;
/*The previous line can be call for just one function like module.exports = log;*/
