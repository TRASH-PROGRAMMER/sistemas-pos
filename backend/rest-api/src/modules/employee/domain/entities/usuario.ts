import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { Empleado } from "./empleado"

/* La clase `Usuario` representa una entidad de usuario con propiedades como id, 
nombre de usuario, contraseña hash, id de empleado, fecha del último inicio de sesión y 
una relación de muchos a uno con la entidad `Empleado`.. */
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