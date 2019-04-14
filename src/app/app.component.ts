import { Component } from '@angular/core';
import { ErrorService, Error } from './core/services/error.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'blueprint';
  public errors: Observable<Error>;

  constructor(private error: ErrorService) {
    this.errors = this.error.getAllErrors();
  }
}
