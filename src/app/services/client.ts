import { Client } from './../models/client.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = '/scheduler/customers';
  private token ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaG1lZCIsIlRlbmFudC1VUkwiOiJzY2hlZHVsZXIiLCJleHAiOjE3NTQyNTA5MDksIlJPTEVfU1VQRVJfQURNSU4iOnRydWUsImlhdCI6MTc1NDE2NDUwOSwidXNlc19zZWNvbmRfdmVyaWZpY2F0aW9uIjpmYWxzZX0.bPHfYSPrMo_2r8vLifkkd4MWcPghu87EgOHltT85ZF1b2YIJI7zMBX576z1JP3ls3wkH4PLhCfoclzkRlRpMnQ'
  headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Tenant-Url': 'scheduler',
    });
  constructor(private http: HttpClient) {}
  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/all', { headers:this.headers });
  }

  addClient(Client: Client): Observable<any> {
      return this.http.post<any>(this.apiUrl , Client, { headers:this.headers });
  }
  deleteClient(id:number):Observable<any>{
    return this.http.delete<any>(this.apiUrl+`/${id}`,{headers:this.headers});
  }
    
  }

