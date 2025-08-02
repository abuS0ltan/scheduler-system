import { Component } from '@angular/core';
import { FormData } from "../../sheard/form-data/form-data";
import { DataTable } from "../../sheard/data-table/data-table";
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-appointment-page',
  imports: [FormData, DataTable],
  templateUrl: './appointment-page.html',
  styleUrl: './appointment-page.scss'
})
export class AppointmentPage {
  appointmentInstance = new Appointment();
  appointmentWithoutId: any;
  data: Appointment[] = [];
  constructor() {
    const newAppointment = new Appointment();
    const { id, ... appointmentWithoutId} = newAppointment;
    this.appointmentWithoutId = appointmentWithoutId;
  }
    handelDelete(id: number) {
    console.log('Delete ID:', id);
  }
  handelAdd(appointment1: any) {
    console.log('Added appointment:', appointment1);
  }
}
