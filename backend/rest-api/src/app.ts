import express from 'express'
import cors from 'cors'

interface DataItem {
    [key: string]: any
}

const app = express()
app.use(cors())
app.use(express.json())

let guardar_datos: DataItem[] = []
app.get('/', (_req, res) => {
    res.status(200).send('Hello World!de la api')
})
 app.post('/data', (req, res) => {
     const receivedData = req.body
     console.log('Received data:', receivedData)
     guardar_datos.push(receivedData)
     res.status(200).send({ message: 'Data received successfully', data: receivedData })
 })
 app.get('/data', (req, res) => {
   res.status(200).json({ message: 'Data retrieved successfully', data: guardar_datos })
         })
     
export default app
