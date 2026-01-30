import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { DetalleVenta } from "../../../sales/domain/entities/detalle_venta"
import { DetalleCompra } from "../../../purchase/domain/entities/detalle_compra"

/* La clase `Producto` define propiedades para una entidad de producto con detalles como nombre, 
descripción, precio, stock, categoría, fecha de creación y 
fecha de actualización, junto con relaciones con las entidades `DetalleVenta` y `DetalleCompra`. */
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
