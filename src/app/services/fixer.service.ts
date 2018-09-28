import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface IFixer {
  success: Boolean,
  rates: {
    USD: Number
  }
};

@Injectable({
  providedIn: 'root'
})
export class FixerService {

  constructor(private http: HttpClient) { }

  getExchangeRates():Observable<IFixer> {
    return this.http.get<IFixer>('http://data.fixer.io/api/latest?access_key=9e1910b221f5db999a84e0c82d049cf0&symbols=USD&format=1');
  }

  getExchangeRateUSD() {
    const scope = this;

    return new Promise((resolve, reject) => {
      scope.getExchangeRates().subscribe(
        data => {
          if (data.success) {
            resolve(data.rates.USD);
          } else {
            reject(data);
          }
        },
        err => reject(err)
      )
    });
  }
}
