import {hal, HalTemplate} from "@fusion.io/framework";
import ModelResource from "./ModelResource";

@hal(() => "/api/v1/models")
export default class CollectionModelResource extends HalTemplate{

    render(models) {
        this.state('models', models.map(model => new ModelResource().compile(model)));
    }
}
