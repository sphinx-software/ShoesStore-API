import { Model }      from "objection";
import { inject }     from "@fusion.io/framework";
import { Hasher }     from "@fusion.io/framework/Contracts"

export default class Credential extends Model {
    static get tableName() {
        return "credentials";
    }

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
