import {Form as FusionForm}    from "@fusion.io/framework"
import ValidationErrorResource from "./ValidationErrorResource";

export default class Form extends FusionForm {

    /**
     * @abstract
     */
    getName() {
       throw new Error("This method must be implemented by sub class");
    }

    async handle(context, next) {
        this.assign(context.request.body);
        const result = await this.validate();

        if (result.valid()) {
            context[this.getName()] = this.value();
            return await next();
        } else {
            context.status = 400;
            return await context.render(ValidationErrorResource, {result, url: context.path});
        }
    }
}
