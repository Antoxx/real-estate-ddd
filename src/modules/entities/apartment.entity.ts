import { BaseRealEstate, BaseRealEstateEntity } from './base-real-estate.entity';

export const APARTMENT_TYPE = Symbol('apartment_type');

export interface Apartment extends BaseRealEstate {
  rooms: number;
}

export class ApartmentEntity extends BaseRealEstateEntity {
  protected type = APARTMENT_TYPE;

  constructor(config: Apartment) {
    super(config);
  }

  static of(apartment: Apartment) {
    return new ApartmentEntity(apartment);
  }
}
