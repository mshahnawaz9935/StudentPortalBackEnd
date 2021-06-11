import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  access_token = '';
  UserId = '';
  jobid='';
  candidateid= '';
  Role = '';
  
  loggedIN = false;
      constructor(private http: HttpClient) {
  
          
      }
  }