import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  private apiLink ='https://5fd86b697e05f000170d2796.mockapi.io/signup/'

  constructor(private httpClient: HttpClient) {   }
  
  getUser(){
    return this.httpClient.get(this.apiLink)
   }
}
