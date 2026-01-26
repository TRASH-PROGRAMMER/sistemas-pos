
import app from './app'
const port = process.env.PORT || 3000 // 3000 es el puerto por defecto
// mostrar mensaje de inicio
console.log('Starting server...')
//iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(`Visit http://localhost:${port}`)
})