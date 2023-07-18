module.exports = class MagicObject {
    constructor(func) {

        const pathArrayHolderName = '_'.repeat(20);

        const handler = {
            get: (o, prop) => {
                if (prop === pathArrayHolderName) return o[pathArrayHolderName];

                let proxy;

                if (func.constructor.name === 'AsyncFunction') {
                    proxy = new Proxy(async (...args) => {
                        return await func(proxy[pathArrayHolderName], args);
                    }, handler);
                } else {
                    proxy = new Proxy((...args) => {
                        return func(proxy[pathArrayHolderName], args);
                    }, handler);
                }

                proxy[pathArrayHolderName] = o[pathArrayHolderName] ? o[pathArrayHolderName] : [];
                proxy[pathArrayHolderName].push(prop);

                return proxy;
            },
        }

        return new Proxy({}, handler);
    }
}