import { EstateModel } from '../models';
import { IEstate } from '~/common/interfaces';

class EstateRepository {
  public getAll():Promise<IEstate[]>{
    return EstateModel.findAll()
  }
  public getById(id:string):Promise<IEstate | null>{
    return EstateModel.findByPk(id)
  }
  public createEstate(estate:IEstate):Promise<IEstate>{
    return EstateModel.create(estate)
  }
  public async updateById(id:string, data:IEstate):Promise<IEstate[]>{
    const result = await EstateModel.update(data, {
      where: { id },
      returning: true
    });
    return result[1];
  }
  public deleteById(id:string):Promise<number>{
    return EstateModel.destroy({
      where: { id }
    });
  }
}

export { EstateRepository };
