import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export enum ErrorLevel {
  Warning,
  Critical
}

export class Error {
  constructor(
    public readonly source: string,
    public readonly message: string,
    public readonly payload?: object,
    public readonly type = ErrorLevel.Warning,
  ) {}
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
