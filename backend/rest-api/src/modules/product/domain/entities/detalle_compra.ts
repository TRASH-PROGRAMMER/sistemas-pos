import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { Compra } from "./compra"
import { Product } from "./product"

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