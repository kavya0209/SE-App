import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {

  private httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred while fetching the list of employees', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPrediction() {
  
    var modelData = {
      "prediction":"False"
    }
    var url1 = 'https://oahoaa5yg4.execute-api.us-west-1.amazonaws.com/dev/prediction'
    return this.httpClient
      .post(url1, modelData, this.httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }




}
