import {ServiceProvider, QueueRegistry} from "@fusion.io/framework";
import HeavyJob from "./HeavyJob";
export default class AppServiceProvider extends ServiceProvider {

    register() {

    }

    boot() {
        const registry = this.container.make(QueueRegistry);

        registry
            .register(HeavyJob)
        ;
    }
}
