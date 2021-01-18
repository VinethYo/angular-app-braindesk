import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private apiUrl = "https://5fd86b697e05f000170d2796.mockapi.io/income/"
  private apiUrl1 = "https://5fd86b697e05f000170d2796.mockapi.io/expense/"

  constructor(private httpClient: HttpClient) { }

  getIncome() {
    return this.httpClient.get(this.apiUrl)
  }
  getExpense() {
    return this.httpClient.get(this.apiUrl1)
  }
}
