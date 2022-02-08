import { estateRepository } from '~/data/repositories';
import { IEstate} from '~/common/interfaces';

class EstateService {
  public getAllEstates():Promise<IEstate[]>{
    return estateRepository.getAll()
  }
  public getEstateById(id:string):Promise<IEstate | null>{
    return estateRepository.getById(id)
  }
  public createNewEstate(estate:IEstate):Promise<IEstate>{
    return estateRepository.createEstate(estate)
  }
  public async updateEstate(id:string, data:IEstate):Promise<IEstate[]>{
    return estateRepository.updateById(id, data)
  }
  public deleteEstate(id:string):Promise<number>{
    return estateRepository.deleteById(id)
  }
}

export { EstateService };
