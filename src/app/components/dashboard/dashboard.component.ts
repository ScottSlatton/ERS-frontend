import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.user = this.loginService.getUser();
  }

}
