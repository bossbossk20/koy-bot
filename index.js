var express = require('express')
var bodyPaser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000))
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === '1234') {
    res.send(req.query['hub.challenge'])
  }
  res.send('Error, wrong validation token')
})

app.post('/webhook/', function (req, res) {
  var messaging_events = req.body.entry[0].messaging
  for (var i = 0; i < messaging_events.length; i++) {
    var event = req.body.entry[0].messaging[i]
    var sender = event.sender.id
    if (event.message && event.message.text) {
      var text = event.message.text
      // Handle a text message from this sender
      console.log(text)
    }
  }
  res.sendStatus(200)
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
