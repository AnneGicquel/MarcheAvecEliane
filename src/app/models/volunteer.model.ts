export interface Volunteer {
    id: string; 
    firstName: string; 
    lastName: string; 
    addressStreet: string; 
    addressCity: string; 
    zipCode: string; 
    mobileNumber: string; 
    landlineNumber?: string; 
    emailVolunteer: string; 
    password: string; 
    dateOfBirth?: Date; 
    entryDate: Date; 
  }