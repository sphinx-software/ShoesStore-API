import {Authenticator} from "@fusion.io/authenticate";
import {container} from "@fusion.io/framework";

export default gateway => {
    return (context, next) => {
        return container.make(Authenticator).guard(gateway)(context, next);
    };
}
