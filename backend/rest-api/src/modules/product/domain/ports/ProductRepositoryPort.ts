import { Product } from "../entities/product"

/**
* Interfaz de puerto para las operaciones del repositorio de productos.
* Esta interfaz define el contrato para las operaciones de acceso a los datos del producto,
* siguiendo el patrón de arquitectura hexagonal. Las implementaciones de este puerto
* deben gestionar la lógica de la capa de persistencia para las entidades del producto.
 * 
 * @interface ProductRepositoryPort
 */
export interface ProductRepositoryPort {
    findAll(): Promise<Product[]>
    findById(id: string): Promise<Product>
    save(product: Product): Promise<Product>
    update(product: Product): Promise<Product>
    delete(product: Product): Promise<Product>
}
