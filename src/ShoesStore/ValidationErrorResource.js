import {HalTemplate, hal} from "@fusion.io/framework";

@hal(({url}) => url)
export default class ValidationErrorResource extends HalTemplate {

    /**
     *
     * @param {ValidationResult} result
     */
    render({result}) {
        this
            .state('valid', result.valid())
            .state('result', result.toJson())
            .state('invalidReasons', result.reasons())
            .state('invalids', result.translate())
        ;
    }
}
