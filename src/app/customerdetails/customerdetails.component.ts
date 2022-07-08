import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { model } from '../model/model';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css'],
})
export class CustomerdetailsComponent implements OnInit {
  users: model[] = [];

  constructor(private apiService: ApiserviceService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
