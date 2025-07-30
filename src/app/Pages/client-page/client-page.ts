import { Client } from './../../models/client.model';
import { Component } from '@angular/core';
import { DataTable } from '../../sheard/data-table/data-table.js';
import { FormData } from "../../sheard/form-data/form-data";
@Component({
  selector: 'app-client-page',
  imports: [DataTable, FormData],
  templateUrl: './client-page.html',
  styleUrl: './client-page.scss'
})
export class ClientPage {
  clientInstance=new Client()
  clientWithoutId: any;
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

  constructor() {
    const newClient = new Client();
    const {id,...clientWithoutId} = newClient;
    this.clientWithoutId = clientWithoutId;
  }

    handelDelete(id: number) {
    console.log("Delete ID:", id);
  }
  handelAdd(client: any) {
    console.log("Added Client:", client);
  }
}
