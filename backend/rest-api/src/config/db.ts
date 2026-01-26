import { DataSource } from "typeorm"
import 'dotenv/config'
import ENV from "./env"//importar la configuracion de env
// Configurar la fuente de datos
const AppDataSource = new DataSource({
    type: "postgres",
    host: ENV.DB_HOST || "localhost",
    port: Number(ENV.DB_PORT) || 5434,
    username: ENV.DB_USER || "postgres",
    password: ENV.DB_PASSWORD || "123456",
    database: ENV.DB_NAME || "Ex-markert",
    synchronize: true,
    logging: true,
    entities: ["src/modules/**/domain/*product.ts"],

})
// Inicializar la fuente de datos
const initializeDataSource = async () => {
    try {
        await AppDataSource.initialize()
        console.log("Data Source has been initialized!")
    } catch (error) {
        console.error("Error during Data Source initialization", error)
    }
}
//inicializar la fuente de datos
initializeDataSource()
// Export the data source
export { AppDataSource }