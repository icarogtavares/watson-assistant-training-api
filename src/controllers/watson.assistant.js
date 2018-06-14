const getConfig = require('../config/watson.assistant')
const assistant = require('../bin/watson.assistant')
const { updateMessage } = require('../services/watson.assistant')
const config = getConfig()

const message = (req, res, next) => {
    var workspace = config.workspace_id
    if (!workspace || workspace === '<workspace-id>') {
      return res.json({
        'output': {
          'text': 'The app has not been configured with a <b>WORKSPACE_ID</b> environment variable. Please refer to the ' + '<a href="https://github.com/watson-developer-cloud/assistant-simple">README</a> documentation on how to set this variable. <br>' + 'Once a workspace has been defined the intents may be imported from ' + '<a href="https://github.com/watson-developer-cloud/assistant-simple/blob/master/training/car_workspace.json">here</a> in order to get a working application.'
        }
      })
    }
    var payload = {
      workspace_id: workspace,
      context: req.body.context || {},
      input: req.body.input || {}
    };

    assistant.message(payload, function(err, data) {
        if (err) {
            //Mudar depois para res.next
            return res.status(err.code || 500).json(err)
        }
        return res.json(updateMessage(payload, data))
    });
}

module.exports = {
    message,
}
