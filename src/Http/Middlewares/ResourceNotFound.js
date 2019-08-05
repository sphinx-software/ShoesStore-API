import {hal, HalTemplate} from "@fusion.io/framework";

@hal(({url}) => url)
export default class ResourceNotFound extends HalTemplate{

    render() {
        this.state("messeage", "Resource Not Found");
    }
}