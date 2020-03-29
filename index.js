const core = require('@actions/core')
const https = require('https')

const typetalkTalken = core.getInput('token')
const topicId = core.getInput('topic_id')
const message = core.getInput('message')

const options = {
  hostname: 'typetalk.com',
  path: `/api/v1/topics/${topicId}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-TYPETALK-TOKEN': typetalkTalken
  }
}

try {
  let req = https.request(options, function(res) {
    res.on('data', function(chunk) {
      core.debug(chunk)
      core.setOutput('output', chunk)
    })
  })

  req.write(JSON.stringify({ message }))
  req.end()
} catch(err) {
  core.setFailed(error.message)
}
