import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Compra } from "../../../purchase/domain/entities/compra"
/* La clase `Provedor` representa una entidad con propiedades para la información de un proveedor y 
una relación de uno a muchos con la entidad `Compra`. */
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