import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Provedor } from "./provedor"
import { Empleado } from "./empleado"
import { DetalleCompra } from "./detalle_compra"

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
