import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  history: any[] = [];

  constructor(private apiService: ApiserviceService) {}

  ngOnInit(): void {
    this.apiService.getHistoryData().subscribe((data) => {
      this.history = data;
    });
  }
}
