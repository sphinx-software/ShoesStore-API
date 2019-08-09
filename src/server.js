const bootstrap = require('./app').default;

module.exports = (request, response) => {
    bootstrap.then(kernel => {
        kernel.callback()(request, response)
    })
};
