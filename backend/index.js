const connectToMongo = require("./db");
const express = require('express')
const cors= require('cors')

connectToMongo();
const app = express()
const port = 8000
app.use(cors());

app.use(express.json());
// Available Routs
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`EtherNotes Backend listening on port http://localhost:${port}/`)
})
