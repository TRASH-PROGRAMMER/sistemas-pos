import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { Compra } from "./compra"
import { Product } from "../../../product/domain/entities/product"

/* La clase `DetalleCompra` representa una entidad de detalle de compra con propiedades como id, 
compra asociada, producto, precio de compra y subtotal.*/
@Entity()
export class DetalleCompra {
    @PrimaryGeneratedColumn("uuid")
    id!: string
    
    @ManyToOne(()=>Compra, (compra)=>compra.detalle_compra,{ 
        nullable: false,
        onDelete: "CASCADE" })
    @JoinColumn({name:"id_compra"})
    compra!: Compra
    
    @ManyToOne(()=>Product, (producto)=>producto.detalle_compra,{ 
        nullable: false,
        onDelete: "CASCADE" })
    @JoinColumn({name:"id_producto"})
    producto!: Product
    
    @Column()
    precio_compra!: number
    
    @Column()
    subtotal!: number
}