import { Activity } from "./Activity";

export type UserRole = "USER" | "ADMIN";

export interface User{
    username:string;
    role:UserRole;
    activities: Activity[];
    password:string;
    
}