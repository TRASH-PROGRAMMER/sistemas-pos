import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
// Define a class for the Product entity
@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id!: string
    @Column()
    name!: string
    @Column()
    description!: string
    @Column()
    price!: number
    @CreateDateColumn()
    createdAt!: Date
    @UpdateDateColumn()
    updatedAt!: Date
}

