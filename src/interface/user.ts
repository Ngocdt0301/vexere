export interface IUser {
    email: string;
    password: string;
    confirmPassword: string;
    id?: string | number;
    firstName: string;
    lastName: string;
    phoneNumber: string | number;
    companyName: string
}