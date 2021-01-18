import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private apiLink ='https://5fd86b697e05f000170d2796.mockapi.io/signup/'

  constructor(private httpClient: HttpClient) { }

  addUser(data:any){
   return this.httpClient.post(this.apiLink ,data)
  }
}
