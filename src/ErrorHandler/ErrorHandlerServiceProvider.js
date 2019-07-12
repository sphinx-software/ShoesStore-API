import Ouch from "ouch";
import {ServiceProvider, HttpKernel} from "@fusion.io/framework";
import {Config, Logger} from "@fusion.io/framework/Contracts";

export default class ErrorHandlerServiceProvider extends ServiceProvider {
    register() {
        this.container.singleton("Ouch", () => {
            return (new Ouch()).pushHandler(new Ouch.handlers.PrettyPageHandler('orange', null, 'sublime'));
        })
    }

    boot() {
        const kernel = this.container.make(HttpKernel);
        const config = this.container.make(Config);
        const ouch   = this.container.make("Ouch");
        const logger = this.container.make(Logger);

        kernel.on('error', (error, context) => {

            // Log the error
            logger.error(error.stack);

            if (config.get('debug')) {
                ouch.handleException(error, context.req, context.res);
            } else {
                // TODO render the error page content
            }
        });
    }
}
