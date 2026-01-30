import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { Venta } from "./venta"
import { Product } from "../../../product/domain/entities/product"
/* La clase `DetalleVenta` representa una entidad de detalle de venta con propiedades como id, 
venta asociada, producto, cantidad, precio unitario y subtotal.*/
@Entity()
export class DetalleVenta {
    @PrimaryGeneratedColumn("uuid")
    id!: string
    
    @ManyToOne(()=>Venta, (venta)=>venta.detalle_venta,{ 
        nullable: false,
        onDelete: "CASCADE" })
    @JoinColumn({name:"id_venta"})
    venta!: Venta
    
    @ManyToOne(()=>Product, (producto)=>producto.detalle_venta,{ 
        nullable: false,
        onDelete: "CASCADE" })
    @JoinColumn({name:"id_producto"})
    producto!: Product
    
    @Column()
    cantidad!: number
    
    @Column()
    precio_unitario!: number
    
    @Column()
    subtotal!: number
}