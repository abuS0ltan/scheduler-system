import { Component } from '@angular/core';
import { FormData } from "../../sheard/form-data/form-data";
import { DataTable } from "../../sheard/data-table/data-table";

@Component({
  selector: 'app-appointment-page',
  imports: [FormData, DataTable],
  templateUrl: './appointment-page.html',
  styleUrl: './appointment-page.scss'
})
export class AppointmentPage {

}
