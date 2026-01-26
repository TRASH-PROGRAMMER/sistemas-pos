import { createClient } from "redis"
import ENV from "./env"
// Configurar el cliente de Redis
const client = createClient({
    url: `redis://${ENV.REDIS_HOST}:${ENV.REDIS_PORT}`
})
// Inicializar el cliente de Redis
const initializeRedis = async () => {
    try {
        await client.connect()
        console.log("Redis client has been initialized!")
    } catch (error) {
        console.error("Error during Redis client initialization", error)
    }
}
initializeRedis()
// Export the Redis client
export  const publishMessage = async (channel: string, message: string) => {    
    await client.publish(channel, message)
    console.log(`Message published to channel ${channel}: ${message}`)
}

