import {inject}     from "@fusion.io/framework";
import {Hasher}     from "@fusion.io/framework/Contracts"
import Credential   from "../../Http/Auth/Credential";

export default class CredentialSeeder {

    @inject(Hasher)
    async seed(hasher) {
        await Credential.query().truncate();
        const testAccount = [{
            username: 'admin',
            password: await hasher.hash('123'),
            role:'admin'
        },{
            username: 'user',
            password: await hasher.hash('123'),
            role:'user'
        },{
            username: 'superadmin',
            password: await hasher.hash('123'),
            role:'superadmin'
        }
        ];

        await Credential.query().insert(testAccount);
    }
}
