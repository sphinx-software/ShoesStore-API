import {HalTemplate, hal} from "@fusion.io/framework";

@hal(() => '/stores/shoe-stores')
export default class ShoeStore extends HalTemplate {
    render() {
        this.state('name', 'ShoeStores');
    }
}
