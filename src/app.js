import {container, HttpKernel} from "@fusion.io/framework";
import bootstrap from "./bootstrap";
import {Config, Event} from "@fusion.io/framework/Contracts";
import {EventEmitter} from "events";
import runCliOutput from "./bin/cli";

const event = new EventEmitter();

container.value(Event, event);

// runCliOutput(event);

event.emit('fusion.server.starting');

export default bootstrap(event).then(() => {
    return container.make(HttpKernel);
});
