import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from 'src/app/common/user';
import { Reimbursement } from '../common/reimbursement';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  user: User;

  maaan: Reimbursement;

  authorUrl = "http://localhost:8080/ers/api/v1/reimbursements/author/";

  baseUrl = "http://localhost:8080/ers/api/v1/reimbursements/";

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.user = loginService.getUser();

    this.authorUrl += this.user.id;
   }

   createReimbursement(reimbursement, image: any): Observable<Reimbursement> {
    const data = new Blob([JSON.stringify(reimbursement)], {
      type: 'application/json',
    });

    let formData = new FormData();
    formData.append("reimbursement", data);
    formData.append("image", image);


    return this.http.post<Reimbursement>(this.baseUrl, formData, {withCredentials: true});
  }

  updateReimbursement(reimbursement): Observable<Reimbursement> {

    console.log(reimbursement);
    
    return this.http.put<Reimbursement>(this.baseUrl + reimbursement.id, reimbursement, {withCredentials: true});
  }

  fetchReimbursements(): Observable<Reimbursement[]>{

    return this.http.get<Reimbursement[]>(this.authorUrl);
  }
}
