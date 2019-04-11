import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


class Error {
  source: string;
  type: ErrorLevel;
  message: string;
  payload: object;
}

enum ErrorLevel {
  Warning,
  Critical
}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private readonly errorStream = new Subject<Error>();

  constructor() { }

  public pushError(error: Error) {
    this.errorStream.next(error);
  }

  public getAllErrors(): Observable<Error> {
    return this.errorStream.asObservable();
  }
}
