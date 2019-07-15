import {Logger} from "@fusion.io/framework/Contracts";

export const command = "hello [name]";

export const builder = (metadata) => {
    metadata.positional('name', {
        description: "Your name",
        type: 'string',
        default: 'world'
    });

    metadata.option('l', {
        alias: 'lang',
        description: 'set the language',
        default: 'en'
    })
};

export const description = "Say hello";

export const handler = ({name, lang, container}) => {
    let message = '';
    if ('vi' === lang) {
        message = "xin chao " + name;
    } else {
        message = "hello " + name;
    }

    const logger = container.make(Logger);

    logger.info(message);
};
