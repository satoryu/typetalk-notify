const nock = require('nock')
const notifyToTypeTalkTopic = require('../src/typetalk_notifier')

nock.disableNetConnect()

test('sends typetalk topic API', async () => {
  const topicId = '1997'
  const message = 'Put your kitsune up'
  const token = 'OH!MAJINAI'
  const scope = nock('https://typetalk.com', {
    reqheaders: {
      'Content-Type': 'application/json',
      'X-TYPETALK-TOKEN': token
    }
  }).post(`/api/v1/topics/${topicId}`, { message: message })
  .reply(() => {
    scope.done()
    return [200, 'Success']
  })

  await notifyToTypeTalkTopic(topicId, message, token)

  expect(scope.isDone()).toBeTruthy()
})
