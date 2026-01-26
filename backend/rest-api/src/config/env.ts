import 'dotenv/config' // Import the dotenv package
// Define and export configuration variables
const ENV = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: process.env.DB_PORT || 5434,
    DB_USER: process.env.DB_USER || "postgres",
    DB_PASSWORD: process.env.DB_PASSWORD || "123456",
    DB_NAME: process.env.DB_NAME || "Ex-markert",
    REDIS_HOST: process.env.REDIS_HOST || "localhost",
    REDIS_PORT: process.env.REDIS_PORT || 6379

}

export default ENV

