import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { IInvestor } from '~/common/interfaces/investor';
import { UserEntity } from "./user.entity";

@Entity({
  name: 'investor',
})
export class InvestorEntity implements IInvestor{

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @OneToOne(() => UserEntity, (user: UserEntity) => user.investor)
    @JoinColumn({ name: 'userId' })
    user!: UserEntity
    
    @Column()
    userId!: string

    @Column()
    avatar!: string;

    @Column()
    username!: string;

    @Column()
    followersCount!: number;

    @Column()
    followingCount!: number;

    @Column({
        length: 250
    })
    interest!: string;

    @Column({
        length: 250
    })
    investment!: string;

    @Column({
        length: 250
    })
    publication!: string;

    @Column()
    city!: string;

    @Column()
    phoneNumber!: string;

    @Column()
    paymentMethods!: string;

    @Column()
    zipcode!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

}


