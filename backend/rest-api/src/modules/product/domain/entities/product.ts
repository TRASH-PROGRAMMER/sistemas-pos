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
    @Column({ default: "Sin categoría" })
    category!: string
    @Column({ default: 0 })
    stock!: number
    @CreateDateColumn()
    createdAt!: Date
    @UpdateDateColumn()
    updatedAt!: Date
}

