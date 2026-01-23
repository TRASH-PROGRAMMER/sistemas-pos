import express from 'express'
import cors from 'cors'
import './config/db'

interface DataItem {
    [key: string]: any
}

const app = express()
app.use(cors())
app.use(express.json())

let guardar_datos: DataItem[] = []
app.get('/', (_req, res) => {
    res.status(200).send('Hello World!de la api de Ex-markert')
})
 app.post('/data', (req, res) => {
     const receivedData = req.body
     console.log('Received data:', receivedData)
     guardar_datos.push(receivedData)
     res.status(200).json({ message: 'Data  sentsuccessfully', data: receivedData })
 })
 app.get('/data', (_req, res) => {
   res.status(200).json({ message: 'Data  received successfully', data: guardar_datos })
         })
     
export default app
