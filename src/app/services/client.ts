import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = '/scheduler/customers';
  private token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaG1lZCIsIlRlbmFudC1VUkwiOiJzY2hlZHVsZXIiLCJleHAiOjE3NTQwMzY3OTYsIlJPTEVfU1VQRVJfQURNSU4iOnRydWUsImlhdCI6MTc1Mzk1MDM5NiwidXNlc19zZWNvbmRfdmVyaWZpY2F0aW9uIjpmYWxzZX0.XEZysYbfPezyBwkBvzlnUvrSaG8B1EJChHDhiNcsy1P_M_CCFHt9zQ84nkQsRKlkancc2QsNRKNQ3t-00QQz9g';
  constructor(private http: HttpClient) {}
  getAllClients(): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Tenant-Url': 'scheduler',
    });
    return this.http.get<any[]>(this.apiUrl + '/all', { headers });
  }
}
