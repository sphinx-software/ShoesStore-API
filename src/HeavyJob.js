import {job} from "@fusion.io/framework";

@job(v => '', () => new HeavyJob())
export default class HeavyJob {
    async execute() {
        console.log('This is a very heavy job');
    }
}
