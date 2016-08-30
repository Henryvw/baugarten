const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
  console.log(__dirname)
})

app.get('/', (request, response) => {
    console.log(__dirname)
    response.sendFile(__dirname + '/index.html')
})

