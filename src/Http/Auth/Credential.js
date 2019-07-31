import {Model}        from "@fusion.io/objection-binding";
import { inject }     from "@fusion.io/framework";
import { Hasher }     from "@fusion.io/framework/Contracts"
import softDelete from "@fusion.io/objection-binding/abilities/softDelete";
import hasTimestamps from "@fusion.io/objection-binding/abilities/hasTimestamps";

@softDelete()
@hasTimestamps()
export default class Credential extends Model {


    @inject(Hasher)
    async verify(password, hasher) {
       return await hasher.verify(password, this.password);
    }

    @inject(Hasher)
    async verifyToken(privateKey, hasher) {
        let [publicKey, hashedPrivateKey] = this.apiToken.split('.');

        console.log(publicKey, await hasher.verify(privateKey, hashedPrivateKey));

        return await hasher.verify(privateKey, hashedPrivateKey);
    }
}
