const watson = require('watson-developer-cloud')
const getConfig = require('../config/watson.assistant')
let config = getConfig();

var assistant = new watson.AssistantV1({
  username: config.username || '<username>',
  password: config.password || '<password>',
  version: '2018-06-13'
});

module.exports = assistant
