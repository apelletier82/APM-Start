import { Injectable, InjectableProvider } from '@angular/core';
import { IProduct } from './productInterface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { InstantiateExpr } from '@angular/compiler';

@Injectable({
    providedIn:"root"
})

export class ProdcutService {

  private productUrl = "api/products/products.json";

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log("All:" + JSON.stringify(data))), 
        catchError(this.handleError));
  }

  getProduct(id: number): Observable<IProduct> {
      return;
  }

  private handleError(err: HttpErrorResponse) {
      let errorMessage = "";
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occured: ${err.error.message}`;        
      }
      else {       
        errorMessage = `Server returned: ${err.status} - ${err.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  }
}