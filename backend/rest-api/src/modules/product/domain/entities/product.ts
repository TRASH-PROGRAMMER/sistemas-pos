import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { DetalleVenta } from "./detalle_venta"
import { DetalleCompra } from "./detalle_compra"

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id!: string
    
    @Column()
    nombre!: string
    
    @Column()
    descripcion!: string
    
    @Column()
    precio!: number
    
    @Column({ default: 0 })
    stock!: number
    
    @Column({ default: "Sin categoría" })
    categoria!: string
    
    @CreateDateColumn()
    createdAt!: Date
    
    @UpdateDateColumn()
    updatedAt!: Date
    
    @OneToMany(()=>DetalleVenta, (detalle_venta)=>detalle_venta.producto)
    detalle_venta!: DetalleVenta[]
    
    @OneToMany(()=>DetalleCompra, (detalle_compra)=>detalle_compra.producto)
    detalle_compra!: DetalleCompra[]
}
