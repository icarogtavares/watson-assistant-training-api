const { getConfig } = require('./index')

const config = getConfig({
    development: {
        username: process.env.ASSISTANT_USERNAME || '<assistant_username>',
        password: process.env.ASSISTANT_PASSWORD || '<assistant_password>',
        workspace_id: process.env.WORKSPACE_ID || '<workspace_id>'
    },
    production: {
        username: process.env.ASSISTANT_USERNAME || '<assistant_username>',
        password: process.env.ASSISTANT_PASSWORD || '<assistant_password>',
        workspace_id: process.env.WORKSPACE_ID || '<workspace_id>'
    },
    test: {
        username: process.env.ASSISTANT_USERNAME || '<assistant_username>',
        password: process.env.ASSISTANT_PASSWORD || '<assistant_password>',
        workspace_id: process.env.WORKSPACE_ID || '<workspace_id>'
    }
})

module.exports = config
