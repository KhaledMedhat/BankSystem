import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styleUrls: ['./transactiondetails.component.css'],
})
export class TransactiondetailsComponent implements OnInit {
  show_form: boolean = true;
  submitted_data: any = {};

  constructor() {}

  ngOnInit(): void {}

  submit_form($event) {
    this.show_form = false;
    this.submitted_data = $event;
  }
}
