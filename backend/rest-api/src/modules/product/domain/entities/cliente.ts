import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Venta } from "./venta"
@Entity()
export class cliente {
    @PrimaryGeneratedColumn("uuid")
    id!: string
    @Column()
    nombre!: string
    @Column()
    apellido!: string
    @Column()
    cedula!: string
    @Column()
    telefono!: number
    @Column()
    correo!: string
    @Column()
    estado!: string

    @OneToMany(()=>Venta, (venta)=>venta.cliente)
    venta!: Venta[]
}