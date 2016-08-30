const express = require('express');
const app = express();

app.listen(3001, function() {
  console.log('listening on 3000')
  console.log(__dirname + '/public')
 
})

app.get('/', (request, response) => {
    console.log(__dirname)
    response.sendFile(__dirname + '/index.html')
})

app.use(express.static(__dirname + '/public'));

