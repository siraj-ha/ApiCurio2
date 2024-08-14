
import { CommandDetail } from "src/command-detail/entities/command-detail.entity";
import { Commande } from "src/commande/entities/commande.entity";
import { ProductDetail } from "src/details/entities/detail.entity";
import { Price } from "src/price/entities/price.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tva {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( 'text',{name:"name", nullable:true})
    name: string;
    @Column('text',{name:"description",nullable:true})
    description: string;
    @Column('text',{name:"value",nullable:true})
    value: number;
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
    //relation
    @ManyToOne(() => Price, (price: Price) => price.id)
    @JoinColumn({ name: "priceId" })
    priceId: number | null;
     
    @ManyToMany(() => ProductDetail, (productDetail: ProductDetail) => productDetail.unitsId,{cascade:true})

    // @OneToMany(() => CommandDetail, (commandDetail: CommandDetail) => commandDetail.tvaId,{cascade:true})
    // commandDetail: CommandDetail[];

@BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}
}

