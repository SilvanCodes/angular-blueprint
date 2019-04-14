import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    console.log('hello from member');
  }

  public logut() {
    this.auth.logout();
  }
}
