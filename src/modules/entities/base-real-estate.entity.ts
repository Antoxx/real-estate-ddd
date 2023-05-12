import { AccountEntity } from './account.entity';

enum RealEstateStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  PAUSED = 'paused',
  SOLD = 'sold',
}

export interface BaseRealEstate {
  owner: AccountEntity;
  price: number;
  status: RealEstateStatus;
}

export abstract class BaseRealEstateEntity {
  protected abstract readonly type: Symbol;
  // private readonly owner: AccountEntity;
  // private readonly price: number;
  // private status: RealEstateStatus;

  constructor(private readonly config: BaseRealEstate) {}

  getType() {
    return this.type;
  }

  getOwner() {
    return this.config.owner;
  }

  getPrice() {
    return this.config.price;
  }

  getStatus() {
    return this.config.status;
  }

  activate() {
    this.config.status = RealEstateStatus.ACTIVE;
  }

  pause() {
    this.config.status = RealEstateStatus.PAUSED;
  }

  sell() {
    this.config.status = RealEstateStatus.SOLD;
  }
}
