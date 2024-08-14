
import { Commande } from "src/commande/entities/commande.entity";
import { ProductDetail } from "src/details/entities/detail.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Accessoire {
    @PrimaryGeneratedColumn()
    id: number;
    @Column( 'text',{name:"name", nullable:true})
    name: string;
    @Column('text',{name:"description",nullable:true})
    description: string;
    @Column('text',{name:"status",nullable:true})
    status: boolean;
    // @Column('text',{name:"Compatibilité",nullable:true})
    // Compatibilité: string;
    @Column('text',{name:"materiaux",nullable:true})
    materiaux: string;
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

     @ManyToMany(() => ProductDetail, (productDetail: ProductDetail) => productDetail.accessoireId,{cascade:true})
     productDetail: ProductDetail[];
      
    //  @OneToMany(() => Commande, (commande: Commande) => commande.accessoireId,{cascade:true})
    //  commande: Commande[]; 
     
@BeforeInsert()
CreateATDate(): void{
this.createAt=new Date()
}
@BeforeUpdate()
updateATDate() :void{
    this.updateAt= new Date()
}
}
