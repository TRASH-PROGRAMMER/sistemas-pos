import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { Empleado } from "./empleado"

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn("uuid")
    id!: string
    
    @Column()
    nombre_de_usuario!: string
    
    @Column()
    contraseña_hash!: string
    
    @Column()
    id_empleado!: string
    
    @Column()
    ultimo_login!: Date
    
    @ManyToOne(()=>Empleado, (empleado)=>empleado.usuarios,{ 
        nullable: false,
        onDelete: "CASCADE" })
    @JoinColumn({name:"id_empleado"})
    empleado!: Empleado
}