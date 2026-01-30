import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Compra } from "./compra"

@Entity()
export class Provedor {
    @PrimaryGeneratedColumn("uuid")
    id!: string
    
    @Column()
    nombre!: string
    
    @Column()
    telefono!: string
    
    @Column()
    correo!: string
    
    @Column()
    direccion!: string
    
    @OneToMany(() => Compra, (compra) => compra.provedor)
    compras!: Compra[]
}