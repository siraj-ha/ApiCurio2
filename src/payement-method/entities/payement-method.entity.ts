import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PayementMethod {
     
    @PrimaryGeneratedColumn()
    id: number;
    @Column( 'text',{name:"name", nullable:true})
    name: string;
    @Column('text',{name:"description",nullable:true})
    description: string;
    @Column('text',{name:"payment",nullable:true})
    payment: string;
    @Column('date',{name:"createAt",nullable:true})
    createAt:Date;
    @Column('date',{name:"update",nullable:true})
    updateAt:Date;
    @Column('integer',{name:"createby",nullable:true})
    createBy:number;
    @Column('integer',{name:"updatedBy",nullable:true})
    updatedBy:number;
    @Column('boolean',{name:"active",nullable:true})
    isActive:boolean
    
@BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}

}

