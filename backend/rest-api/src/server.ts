
import app from './app'

const port = process.env.PORT || 3000

console.log('Starting server...')

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(`Visit http://localhost:${port}`)
})