import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Venta } from "../../../sales/domain/entities/venta"
/* La clase "cliente" representa una entidad con propiedades para la información de un cliente y 
una relación de uno a muchos con la entidad "Venta". */
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