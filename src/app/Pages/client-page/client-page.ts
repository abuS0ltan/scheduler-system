import { ClientService } from './../../services/client';
import { Client } from './../../models/client.model';
import { Component } from '@angular/core';
import { DataTable } from '../../sheard/data-table/data-table.js';
import { FormData } from '../../sheard/form-data/form-data';
import { Loader } from "../../sheard/loader/loader";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-client-page',
  imports: [DataTable, FormData, Loader,CommonModule],
  templateUrl: './client-page.html',
  styleUrl: './client-page.scss',
})
export class ClientPage {
  clientInstance = new Client();
  clientWithoutId: any;
  data: Client[] = [];
  loading: boolean = true;
  constructor(private clientService: ClientService) {
    const newClient = new Client();
    const { id, ...clientWithoutId } = newClient;
    this.clientWithoutId = clientWithoutId;
  }
  ngOnInit() {
    this.getAllClients();
  }
getAllClients() {
  this.loading = true;
  this.clientService.getAllClients().subscribe({
    next: (data: any[]) => {
      this.loading = false;
console.log(this.loading)
      console.log('Fetched Clients:', data);
      this.data = data;
    },
    error: (err) => {
      console.error('Error fetching clients:', err);
      this.loading = false; 
    }
  });
}
  handelDelete(id: number) {
    console.log('Delete ID:', id);
  }
  handelAdd(client: any) {
    console.log('Added Client:', client);
  }
}
