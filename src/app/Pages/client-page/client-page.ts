import { ClientService } from './../../services/client';
import { Client } from './../../models/client.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataTable } from '../../sheard/data-table/data-table.js';
import { FormData } from '../../sheard/form-data/form-data';
import { Loader } from "../../sheard/loader/loader";
import { CommonModule } from '@angular/common';
import { UpdateModal } from "../../sheard/update-modal/update-modal";

@Component({
  selector: 'app-client-page',
  imports: [DataTable, FormData, Loader, CommonModule, UpdateModal],
  templateUrl: './client-page.html',
  styleUrl: './client-page.scss',
})
export class ClientPage{
  clientInstance = new Client();
  clientWithoutId: any;
  data: Client[] = [];
  loading: boolean = true;
  updateModalOpen: boolean = false;
  updateClientInstance: Client = new Client();
  constructor(private clientService: ClientService,private cdr: ChangeDetectorRef) {
    const newClient = new Client();
    const { id, ...clientWithoutId } = newClient;
    this.clientWithoutId = clientWithoutId;
  }
  ngOnInit() {

  this.getAllClients();          

  }
getAllClients() {
  this.clientService.getAllClients().subscribe({
    next: (data: any[]) => {
      this.loading = false;
      this.data = data;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Error fetching clients:', err);
      this.loading = false; 
    }
  });
}
  handelDelete(id: number) {
    this.clientService.deleteClient(id).subscribe({
      next:(response)=>{
        this.getAllClients(); 
      },
      error: (error) => {
        console.error('Error deleting client:', error);
      }
    })
  }
  handelAdd(client: any) {
    this.clientService.addClient(client).subscribe({
      next:(response)=>{
        console.log('Client added successfully:', response);
        this.getAllClients(); // Refresh the client list after adding a new client
      },
      error: (error) => {
        console.error('Error adding client:', error);
    }},
    )
    
  }
  handelUpdate(client:Client){
    this.updateClientInstance = client;
    this.updateModalOpen = true;
  }
}
