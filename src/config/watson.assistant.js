const { getConfig } = require('./index')
const Joi = require('joi')

const schema = Joi.object().keys({
  username: Joi.string().disallow(['<assistant_username>']),
  password: Joi.string().disallow(['<assistant_password>']),
  workspace_id: Joi.string.disallow(['<workspace_id>']),
}).unknown().required()

const { error, value: envVars } = Joi.validate(process.env, schema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = getConfig({
  development: {
    username: envVars.ASSISTANT_USERNAME,
    password: envVars.ASSISTANT_PASSWORD,
    workspace_id: envVars.WORKSPACE_ID,
  },
  production: {
    username: envVars.ASSISTANT_USERNAME,
    password: envVars.ASSISTANT_PASSWORD,
    workspace_id: envVars.WORKSPACE_ID,
  },
  test: {
    username: envVars.ASSISTANT_USERNAME,
    password: envVars.ASSISTANT_PASSWORD,
    workspace_id: envVars.WORKSPACE_ID,
  },
})

module.exports = config
