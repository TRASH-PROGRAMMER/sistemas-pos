import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Provedor } from "../../../supplier/domain/entities/provedor"
import { Empleado } from "../../../employee/domain/entities/empleado"
import { DetalleCompra } from "./detalle_compra"

/* La clase `Compra` representa una entidad de compra con propiedades como id, fecha, total, proveedor,
empleado, precio de compra, subtotal y detalle de compra. */
@Entity()
export class Compra {
    @PrimaryGeneratedColumn("uuid")
    id!: string
    
    @Column()
    fecha!: Date
    
    @Column()
    total!: number
    
    @ManyToOne(()=>Provedor, (provedor)=>provedor.compras,{ 
        nullable: false,
        onDelete: "CASCADE" })
    @JoinColumn({name:"id_proveedor"})
    provedor!: Provedor
    
    @ManyToOne(()=>Empleado, (empleado)=>empleado.compras,{ 
        nullable: false,
        onDelete: "CASCADE" })
    @JoinColumn({name:"id_empleado"})
    empleado!: Empleado
    
    @Column()
    precio_compra!: number
    
    @Column()
    subtotal!: number
    
    @OneToMany(()=>DetalleCompra, (detalleCompra)=>detalleCompra.compra)
    detalle_compra!: DetalleCompra[]
}
