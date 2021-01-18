import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewIncomeService {
 private apiUrl = "https://5fd86b697e05f000170d2796.mockapi.io/income/"

  constructor(private httpClient: HttpClient) { }

  addIncome(data: any) {
    return this.httpClient.post(this.apiUrl, data)
  }
  getIncome() {
    return this.httpClient.get(this.apiUrl)
  }
  editIncome(id: any) {
    return this.httpClient.get(this.apiUrl + '/' + id)
  }
  updateIncome(id: any, data: any) {
    return this.httpClient.put(this.apiUrl + '/' + id, data)
  }
  deleteIncome(id: any) {
    return this.httpClient.delete(this.apiUrl + '/' + id)
  }
}
