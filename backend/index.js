const connectToMongo = require("./db");
const express = require('express')

connectToMongo();
const app = express()
const port = 3000

app.use(express.json());
// Available Routs
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes.js'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/`)
})
