import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  
  @Entity({name: 'client'})
  export class Client {
    @PrimaryGeneratedColumn({name:'id_client', type: "integer"})
    idClient!: number;
  
    @Column({name:'name', type:"varchar"})
    name!: string;
  
    @Column({name:'number', type:"varchar"})
    number!: string;

    @Column({name:'email', type:"varchar"})
    email!: string;

    @Column({name:'status', type:"integer"})
    status!: number;

    @CreateDateColumn()
    createdAt!: Date;
    
    @UpdateDateColumn()
    updatedAt!: Date;
  }