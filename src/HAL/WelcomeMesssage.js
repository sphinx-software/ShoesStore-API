import {HalTemplate, hal} from "@fusion.io/framework";
import ShoeStore from "./ShoeStore";

@hal(({id}) => '/message/' + id)
export default class WelcomeMesssage extends HalTemplate{
    render({message, from}) {
        this
            .state('content', message)
            .state('from', from)
            .relate('store', ShoeStore)
            .embed('mystore', ShoeStore)
        ;
    }
}
