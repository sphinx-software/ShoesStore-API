import {get, singleton} from "@fusion.io/framework";
import HeavyJob from "../../HeavyJob";

@singleton()
export default class HelloWorldController {

    @get('/')
    index(context) {
        return context.render('welcome');
    }

    @get('/heavey')
    async heavyJob(context) {

        await new HeavyJob().dispatch();

        context.body = {
            message:"done"
        }
    }
}
