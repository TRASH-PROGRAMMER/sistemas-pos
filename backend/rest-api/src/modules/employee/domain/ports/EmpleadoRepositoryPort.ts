import { Empleado } from "../entities/empleado"

/**
 * Interfaz de puerto para las operaciones del repositorio de empleados.
 * Esta interfaz define el contrato para las operaciones de acceso a los datos del empleado,
 * siguiendo el patrón de arquitectura hexagonal. Las implementaciones de este puerto
 * deben gestionar la lógica de la capa de persistencia para las entidades del empleado.
 * 
 * @interface EmpleadoRepositoryPort
 */
export interface EmpleadoRepositoryPort {
    findAll(): Promise<Empleado[]>
    findById(id: string): Promise<Empleado | null>
    save(empleado: Empleado): Promise<Empleado>
    update(empleado: Empleado): Promise<Empleado>
    delete(empleado: Empleado): Promise<Empleado>
}