import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/common/reimbursement';
import { User } from 'src/app/common/user';
import { LoginService } from 'src/app/services/login.service';
import { ReimbursementService } from 'src/app/services/reimbursement.service';

@Component({
  selector: 'app-create-reimbursement-form',
  templateUrl: './create-reimbursement-form.component.html',
  styleUrls: ['./create-reimbursement-form.component.css']
})
export class CreateReimbursementFormComponent implements OnInit {

        amount: number;
        description: string;
        type: string;
        author: User;
        someFile: any;
  


  constructor(private reimbursementService: ReimbursementService, private loginService: LoginService, private router: Router) {
    this.author = this.loginService.getUser();
   }

  ngOnInit(): void {
  }

  onSubmit(){

    let reimbursement = new Reimbursement(this.amount,
                                          this.description,
                                          "Pending",
                                          this.type,
                                          this.author);

    this.reimbursementService.createReimbursement(reimbursement, this.someFile).subscribe(response =>{
      if(response){
        this.router.navigate(['/dashboard']);
      }
    })
  }

  doFile(event: any){
    console.log(event.target.files[0])
    this.someFile = event.target.files[0];
  }

}
