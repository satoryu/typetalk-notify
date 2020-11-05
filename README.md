# Typetalk notify

![CI](https://github.com/satoryu/typetalk-notify/workflows/CI/badge.svg?branch=master)

This action is for notifying any events like opening new issue on a github repository to Typetalk topic.

## Inputs

### `token`

**required** API token for Typetalk API. The following document describes a way to get a token.

- [Authentication & Authorization | Typetalk Developer API | Nulab](https://developer.nulab.com/docs/typetalk/auth/#tttoken_create)

### `topic_id`

**required** Id of a topic to be notified.

### `message`

**required** message to be sent to the topic specified by `topic_id`.

## Example

```yaml
name: Release announce

on:
  release:
    types: [published]

jobs:
  steps:
    - uses: satoryu/typetalk-notify@v0.0.3
      with:
        token: ${{ secrets.TYPETALK_TOKEN }}
        topic_id: 165952  # Replace your topic's id
        message: "${{ github.repository }} ${{ github.ref }} has been released :tada: :white_flower:"
```
