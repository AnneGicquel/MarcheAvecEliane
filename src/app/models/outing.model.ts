import { Elderly } from "./elderly.model";
import { Volunteer } from "./volunteer.model";

export interface Outing {
    id: string; 
    outingDates: Date[]; // Timestamp[] => Date[] in ts
    elderly: Elderly; // many to one
    volunteer?: Volunteer; // many to one
}