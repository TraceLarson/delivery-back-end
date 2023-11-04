import { ClientType } from '@/util/types';
import AbstractUser from './abstract/AbstractUser';

export default class Client extends AbstractUser implements ClientType {
  // region Constructors

  constructor(){
    super();
  }
}