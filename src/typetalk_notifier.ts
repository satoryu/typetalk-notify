const tiny = require('tiny-json-http')

export default function(topicId, message, token) {
  const options = {
      url: `https://typetalk.com/api/v1/topics/${topicId}`,
      headers: {
        'Content-Type': 'application/json',
        'X-TYPETALK-TOKEN': token
      },
      data: { message }
  }

  return tiny.post(options)
}
