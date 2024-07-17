import { Volunteer } from "./volunteer.model";

export interface AuthResponse {
    token: string;
    user: Volunteer; 
  }