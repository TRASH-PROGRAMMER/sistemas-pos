import { DataSource } from "typeorm"
import 'dotenv/config'
import ENV from "./env"

const AppDataSource = new DataSource({
    type: "postgres",
    host: ENV.DB_HOST || "localhost",
    port: parseInt(ENV.DB_PORT || "5434"),
    username: ENV.DB_USER || "postgres",
    password: ENV.DB_PASSWORD || "123456",
    database: ENV.DB_NAME || "Ex-markert",
    synchronize: true,
    logging: true
})

const initializeDataSource = async () => {
    try {
        await AppDataSource.initialize()
        console.log("Data Source has been initialized!")
    } catch (error) {
        console.error("Error during Data Source initialization", error)
    }
}

initializeDataSource()

export { AppDataSource }