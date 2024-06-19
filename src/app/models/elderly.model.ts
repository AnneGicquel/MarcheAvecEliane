
export interface Elderly {
    id: string; // UUID is string typed in ts
    pseudo: string;
    addressStreet: string;
    addressCity: string;
    zipCode: string;
    addressDetails?: string;
    mobileNumber?: string;
    landlineNumber: string;
    dateOfBirth?: Date;
    entryDate?: Date;
    comments?: string;
  }