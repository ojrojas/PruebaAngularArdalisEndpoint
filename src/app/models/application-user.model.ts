import { BaseEntity } from './base-entity.model';
import { TypeIdentification } from './typeidentification.model';

export interface ApplicationUser extends BaseEntity {
  createdBy: string;
  createdOn: Date;
  email: string;
  id: string;
  identification: string;
  typeIdentification: TypeIdentification;
  typeIdentificationId: string;
  lastName: string;
  middleName: string;
  modifiedBy: string;
  modifiedOn: Date;
  name: string;
  password: string;
  state: boolean;
  surName: string;
}
