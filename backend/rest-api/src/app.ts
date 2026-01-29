import express from 'express'
import cors from 'cors'
import './config/db'
import { AppDataSource } from './config/db'
import { Product } from './modules/product/domain/entities/product'
// Initialize Express app
const app = express()
app.use(cors())
// Middleware to parse JSON bodies
app.use(express.json())

app.get('/', (_req, res) => {
    res.status(200).send('Hello World!de la api de Ex-markert')
})
// Endpoint to create a product via POST
 app.post('/product', async (req, res) => {
     try {
         const productRepository = AppDataSource.getRepository(Product)
         const newProduct = productRepository.create(req.body)
         const savedProduct = await productRepository.save(newProduct)
         
         res.status(201).json({ message: 'Data sent successfully', data: savedProduct })
     } catch (error) {
         res.status(500).json({ message: 'Error saving data', error })
     }
 })
 // Endpoint to receive data via GET
 app.get('/product', async (_req, res) => {
     try {
         const productRepository = AppDataSource.getRepository(Product)
         const products = await productRepository.find()
         res.status(200).json({ message: 'Data received successfully', data: products })
     } catch (error) {
         res.status(500).json({ message: 'Error retrieving data', error })
     }
 })
 // Endpoint to get a product by ID
 app.get('/product/:id', async (req, res) => {
     try {
         const productRepository = AppDataSource.getRepository(Product)
         const product = await productRepository.findOneBy({ id: req.params.id })
         
         if (!product) {
             return res.status(404).json({ message: 'Product not found' })
         }
         
         res.status(200).json({ message: 'Product found', data: product })
     } catch (error) {
         res.status(500).json({ message: 'Error retrieving product', error })
     }
 })
// Endpoint to update a product by ID
 app.put('/product/:id', async (req, res) => {
     try { 
         const productRepository = AppDataSource.getRepository(Product)
         const product = await productRepository.findOneBy({ id: req.params.id })
         
         if (!product) {
             return res.status(404).json({ message: 'Product not found' })
         }
         
         product.name = req.body.name
         product.description = req.body.description
         product.price = req.body.price
         
         await productRepository.save(product)
         
         res.status(200).json({ message: 'Product updated successfully', data: product })
     } catch (error) {
         res.status(500).json({ message: 'Error updating product', error })
     }
 })
    
// Start the server
export default app
