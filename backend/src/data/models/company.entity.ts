import { Entity, OneToOne } from "typeorm";
import { ICompany } from '~/common/interfaces';
import { EstateEntity } from './estate.entity';

@Entity({
    name: 'company',
})
export class CompanyEntity implements ICompany {

    @OneToOne(() => EstateEntity, (estate: EstateEntity) => estate.company)
    estate!: EstateEntity;
}
