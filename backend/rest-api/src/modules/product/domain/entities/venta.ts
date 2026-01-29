import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { cliente } from "./cliente"
import { Empleado } from "./empleado"

@Entity()
export class Venta {
    @PrimaryGeneratedColumn("uuid")
    id!: string
    @Column()
    fecha!: Date
    @Column()
    numero_de_venta!: number
    @Column()
    total!: number
    @Column()
    tipo_de_pago!: string
    // Relaciones de las tablas de producto y cliente 
    @ManyToOne(()=>cliente, (cliente)=>cliente.venta,{ 
        nullable: false,
        onDelete: "CASCADE" })
    @JoinColumn({name:"cliente_id"})
    cliente!: cliente
    
    @ManyToOne(()=>Empleado, (empleado)=>empleado.venta,{ 
        nullable: false,
        onDelete: "CASCADE" })
    @JoinColumn({name:"empleado_id"})
    empleado!: Empleado
}