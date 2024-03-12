import { ModelBaseClass } from './model-base-class.model';

export class RegistrationContact extends ModelBaseClass {
  gender?: string;
  email?: string;
  password?: string;
  initial?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  companyTitle?: string;
  address1?: string;
  address2?: string;
  city?: string;
  country?: string;
  businessPhoneNumber?: string;
  homePhoneNumber?: string;
  mobileNumber?: string;
  state?: string;
  fax?: string;
  pincode?: string;
  constructor() {
    super();
  }
}

export class RegistrationContactResponse {
  message?: string;
  object?: RegistrationContact;
  success?: boolean;
  title?: string;
  constructor(options: any) {
    Object.assign(this, options);
  }
}
