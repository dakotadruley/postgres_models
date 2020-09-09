const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));


// app.post()
// app.get()
// app.put()
// app.delete()

module.exports = app;
