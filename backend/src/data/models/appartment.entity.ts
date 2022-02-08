import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { IAppartment } from '~/common/interfaces/appartment';
import { EstateEntity } from "./estate.entity";

@Entity({
  name: 'appartment',
})
export class AppartmentEntity implements IAppartment{

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @OneToOne(() => EstateEntity, (estate: EstateEntity) => estate.appartment)
    @JoinColumn({ name: 'userId' })
    estate!: EstateEntity
    
    @Column()
    userId!: string

    @Column()
    nameOfBuilding!: string;

    @Column()
    numberOfRooms!: number;

    @Column()
    numberOfBathrooms!: number;

    @Column()
    typeOfParking!: string;

    @Column()
    price!: number;
    
    @Column()
    priceForM2!: number;
    
    @Column({
      length: 50
    })
    location!: string;
    
    @Column({
      length: 50
    })
    appartmentClass!: string;
    
    @Column()
    floors!: number;

    @Column({
        length: 50
    })
    appartmentState!: string;
    
    @Column({
        length: 50
    })
    currency!: string;
    
    @Column()
    yearOfOperation!: number;
    
    @Column({
        length: 50
    })
    salesStatus!: string;
    
    @Column({
        length: 50
    })
    investmentType!: string;

    @Column()
    lending!: boolean;

    @Column()
    installments!: boolean;

    @Column()
    images!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

}
