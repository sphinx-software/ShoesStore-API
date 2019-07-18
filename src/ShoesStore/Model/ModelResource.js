import {hal, HalTemplate} from "@fusion.io/framework";

@hal((model) => '/api/v1/models/' + model.id)

export default class ModelResource extends HalTemplate{

    render(model) {
        this.state("model", model.toJSON());
    }
}
