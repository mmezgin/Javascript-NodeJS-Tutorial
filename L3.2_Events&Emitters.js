const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('sayHi', (name) => {
    console.log(`hi ${name}`);
});
let name = "mert";
eventEmitter.emit('sayHi', name);

eventEmitter.once('sayOnce', () => {
    console.log("Wellcome !");
});
eventEmitter.emit('sayOnce'); //triggers only one time.
eventEmitter.emit('sayOnce');
eventEmitter.emit('sayOnce');
eventEmitter.emit('sayOnce');