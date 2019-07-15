export default class ModelNotFound extends Error {
    get status () {
        return 404;
    }

    get message() {
        return "Model not found error"
    }
}
