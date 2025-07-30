import { Component } from '@angular/core';
import { DataTable } from '../../sheard/data-table/data-table.js';
import { FormData } from "../../sheard/form-data/form-data";
import { Client } from '../../models/client.model.js';
@Component({
  selector: 'app-client-page',
  imports: [DataTable, FormData],
  templateUrl: './client-page.html',
  styleUrl: './client-page.scss'
})
export class ClientPage {
  clientInstance=new Client()
   data:Client[]=[
    {
      id:1,
      name:"ahmad",
      phone:"0595112975"
    },
    {
      id:2,
      name:"ali",
      phone:"05999999999"
    }
   ]
}
