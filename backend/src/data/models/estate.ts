import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

import { IEstate } from '~/common/interfaces';
import { ModelName } from '~/common/enums'

interface EstateInstance extends IEstate, Model {}

const createEstateModel = (orm:Sequelize): ModelCtor<EstateInstance> => {
    const Estate = orm.define<EstateInstance>(ModelName.ESTATE, {
      companyId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      estateName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      estateLogo: {
        allowNull: false,
        type: DataTypes.STRING
      },
      numberOfFlats: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      numberOfBuildings: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      constructionDetails: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      amountOfMoney: {
        allowNull: false,
        type: DataTypes.REAL
      },
      location: {
        allowNull: false,
        type: DataTypes.STRING
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING
      },
      fundingState: {
        allowNull: false,
        type: DataTypes.REAL
      },
      annualReturn: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      duration: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      distribution: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      profit: {
        allowNull: false,
        type: DataTypes.REAL
      },
      favorite: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
        tableName: 'estate'
    });
  
    return Estate;
};

export default createEstateModel;