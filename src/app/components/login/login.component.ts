import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

   

  }

  onSubmit(){
    let newUser = new User(this.username, this.password);

    this.loginService.fetchUser(newUser).subscribe(response =>
       {this.loginService.setUser(response); 
        console.log(response); 
        newUser = response;
        console.log(newUser);

        if(newUser.role){
          this.router.navigate(['/dashboard']);
        }
      })
    }

    

}
