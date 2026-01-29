
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm"
import { Venta } from "./venta"
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
    @ManyToMany(()=>Venta, (venta)=>venta.empleado)
    venta!: Venta[]
}