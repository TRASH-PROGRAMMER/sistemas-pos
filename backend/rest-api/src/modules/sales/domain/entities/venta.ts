import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { cliente } from "../../../customer/domain/entities/cliente"
import { Empleado } from "../../../employee/domain/entities/empleado"
import { DetalleVenta } from "./detalle_venta"
/* La clase `Venta` representa una entidad de venta con propiedades como id, fecha, numero de venta, total, tipo de pago, 
relaciones con cliente, empleado y detalle de venta. */
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
    @JoinColumn({name:"id_cliente"})
    cliente!: cliente
    
    @ManyToOne(()=>Empleado, (empleado)=>empleado.ventas,{ 
        nullable: false,
        onDelete: "CASCADE" })
    @JoinColumn({name:"id_empleado"})
    empleado!: Empleado

    @OneToMany(()=>DetalleVenta, (detalle_venta)=>detalle_venta.venta)
    detalle_venta!: DetalleVenta[]
}