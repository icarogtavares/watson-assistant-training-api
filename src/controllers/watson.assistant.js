const getConfig = require('../config/watson.assistant')
const assistant = require('../bin/watson.assistant')
const { updateMessage } = require('../services/watson.assistant')

const config = getConfig()

const message = (req, res) => {
  const workspace = config.workspace_id
  const payload = {
    workspace_id: workspace,
    context: req.body.context || {},
    input: req.body.input || {},
  }

  return assistant.message(payload, (err, data) => {
    if (err) {
      return res.status(err.code || 500).json(err)
    }
    return res.json(updateMessage(payload, data))
  })
}

module.exports = {
  message,
}
