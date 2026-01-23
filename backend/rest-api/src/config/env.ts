import 'dotenv/config' 
const ENV = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: process.env.DB_PORT || "5434",
    DB_USER: process.env.DB_USER || "postgres",
    DB_PASSWORD: process.env.DB_PASSWORD || "123456",
    DB_NAME: process.env.DB_NAME || "Ex-markert"
}

export default ENV

