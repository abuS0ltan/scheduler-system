export class Appointment {
    id!: number;
    title!: string;
    description?: string;
    appointment_date!: Date;   
    location?: string;
    customer_id!: number;
    [key: string]: any;
}
