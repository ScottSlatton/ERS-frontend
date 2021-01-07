import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/common/reimbursement';
import { User } from 'src/app/common/user';
import { LoginService } from 'src/app/services/login.service';
import { ReimbursementService } from 'src/app/services/reimbursement.service';

@Component({
  selector: 'app-reimbursement-list',
  templateUrl: './reimbursement-list.component.html',
  styleUrls: ['./reimbursement-list.component.css']
})
export class ReimbursementListComponent implements OnInit {

  reimbursements: Reimbursement[];

  user: User;

  constructor(private reimbursementService: ReimbursementService, private loginService: LoginService) { }

  ngOnInit(): void {

    this.user = this.loginService.getUser();

    //use reimbursement service to fetch all relevent reimbursements

    this.reimbursementService.fetchReimbursements().subscribe(response => this.reimbursements = response)
  }

  approveReimbursement(reimbursement){

    reimbursement.status = "Approved";
    reimbursement.resolver = this.user;

    this.reimbursementService.updateReimbursement(reimbursement).subscribe(response => console.log(response));

  }

  denyReimbursement(reimbursement){
    reimbursement.status = "Denied";
    reimbursement.resolver = this.user;
    this.reimbursementService.updateReimbursement(reimbursement).subscribe(response => console.log(response));
  }

  resizeImage(el){
    el.addClass("active");
  }
}
