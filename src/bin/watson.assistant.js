const watson = require('watson-developer-cloud')

var assistant = new watson.AssistantV1({
    username: process.env.ASSISTANT_USERNAME || '<username>',
    password: process.env.ASSISTANT_PASSWORD || '<password>',
    version: '2018-02-16'
  });

module.exports = assistant
