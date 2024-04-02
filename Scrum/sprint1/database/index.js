const express = require('express')

const app = express()
const port = 8000

const {getAllUsers} = require('./db')

app.use(express.json())

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', async (req, res) => {
    console.log("entro aqui")
    try {
      const messages = await getAllUsers()
      res.status(200).json(messages)
    } catch (error) {
      res.status(500).json({ message: 'error retrieving the characters' })
    }
})