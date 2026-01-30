
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Venta } from "../../../sales/domain/entities/venta"
import { Usuario } from "./usuario"
import { Compra } from "../../../purchase/domain/entities/compra"

/* La clase `Empleado` representa una entidad con propiedades para detalles del empleado como nombre, 
nombre de usuario, contraseña, rol, estado y 
relaciones con ventas, compras y usuarios. */
@Entity()
export class Empleado {
    @PrimaryGeneratedColumn("uuid")
    id!: string
    
    @Column()
    nombre!: string
    
    @Column()
    usuario!: string
    
    @Column()
    contraseña!: string
    
    @Column()
    rol!: string
    
    @Column()
    estado!: string
    
    @OneToMany(()=>Venta, (venta)=>venta.empleado)
    ventas!: Venta[]
    
    @OneToMany(()=>Compra, (compra)=>compra.empleado)
    compras!: Compra[]
    
    @OneToMany(()=>Usuario, (usuario)=>usuario.empleado)
    usuarios!: Usuario[]
}