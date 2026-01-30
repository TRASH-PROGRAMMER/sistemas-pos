
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Venta } from "./venta"
import { Usuario } from "./usuario"
import { Compra } from "./compra"

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