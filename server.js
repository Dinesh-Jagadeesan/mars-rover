const express = require('express');
const app = express();

app.use(express.static('./dist/mars-rover'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/mars-rover/'}
  );
  });

app.listen(process.env.PORT || 8080);