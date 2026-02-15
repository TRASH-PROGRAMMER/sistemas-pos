import { cliente } from "../entities/cliente"

/**
 * Interfaz de puerto para las operaciones del repositorio de clientes.
 * Esta interfaz define el contrato para las operaciones de acceso a los datos del cliente,
 * siguiendo el patrón de arquitectura hexagonal. Las implementaciones de este puerto
 * deben gestionar la lógica de la capa de persistencia para las entidades del cliente.
 * 
 * @interface ClienteRepositoryPort
 */
export interface ClienteRepositoryPort {
    findAll(): Promise<cliente[]>
    findById(id: string): Promise<cliente | null>
    save(cliente: cliente): Promise<cliente>
    update(cliente: cliente): Promise<cliente>
    delete(cliente: cliente): Promise<cliente>
}