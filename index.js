var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var request = require('request')

app.use(bodyParser.json())

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
      
      sendTextMessage(sender, 'Text received, echo: ' + text.substring(0, 2))
    }
  }
  res.sendStatus(200)
})

var token = 'EAAWk6sNrfjcBALNrPM8ZBZAadvzid2v0Kv7mZCRvMOsPdKJUcTerfpafbk6ATYazkOJ3Q8WZCbjDyw3b7KlPGrgpjj1clGNNu3QjhIlNhYXLWiZB1gFXbzwOJtpBB5N3xZAmZBJisZBhrPr5lXRaIwrPByBpeLPGR9klzrQJHXJlCAZDZD'

function sendTextMessage (sender, text) {
  var messageData = {
    text: text
  }
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token: token},
    method: 'POST',
    json: {
      recipient: {id: sender},
      message: messageData,
    }
  }, function (error, response, body) {
    if (error) {
      console.log('Error sending message: ', error)
    } else if (response.body.error) {
      console.log('Error: ', response.body.error)
    }
  })
}



app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!')
})
