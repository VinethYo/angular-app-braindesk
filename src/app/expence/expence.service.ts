import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenceService {
 private apiUrl = "https://5fd86b697e05f000170d2796.mockapi.io/expense"

  constructor(private httpClient: HttpClient) { }
  
  addExpense(data: any) {
    return this.httpClient.post(this.apiUrl, data)
  }
  getExpense() {
    return this.httpClient.get(this.apiUrl)
  }
  editExpense(id: any) {
    return this.httpClient.get(this.apiUrl + '/' + id)
  }
  updateExpense(id: any, data: any) {
    return this.httpClient.put(this.apiUrl + '/' + id, data)
  }
  deleteExpense(id: any) {
    return this.httpClient.delete(this.apiUrl + '/' + id)
  }
}

