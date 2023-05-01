import { AddResultType, DeleteResultType, SelectResultType, UpdateResultType } from '@/util/types';
import IClientService from './interface/IClientService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';
import { InsertResultType } from '../util/types';

export default class AbstractService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.unitOfWork = unitOfWork ?? NullUnitOfWork.Singleton;
  }
  // endregion

  // region Public Properties

  public get unitOfWork(): IUnitOfWork {
    return this._unitOfWork;
  }

  public set unitOfWork(value: IUnitOfWork) {
    this._unitOfWork = value;
  }

  // endregion

  // region Private Properties

  private _unitOfWork: IUnitOfWork = NullUnitOfWork.Singleton;

  // endregion
}
