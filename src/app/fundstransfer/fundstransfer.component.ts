import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { model } from '../model/model';

@Component({
  selector: 'app-fundstransfer',
  templateUrl: './fundstransfer.component.html',
  styleUrls: ['./fundstransfer.component.css'],
})
export class FundstransferComponent implements OnInit {
  users: model[] = [];
  sender: any;
  receiver: any;
  amount: any;
  is_valid: boolean = false;
  is_valid2: boolean = false;
  senderBalance: any;
  receiverBalance: any;
  senderEmail: any;
  receiverEmail: any;
  senderName: any;
  receiverName: any;
  senderId: any;
  receiverId: any;
  updatedSender: any;
  updatedReceiver: any;
  update: any;

  constructor(private apiService: ApiserviceService) {}

  @Output() event_submite_form = new EventEmitter<any>();

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onSubmit() {
    this.getSenderBalanceUpdate();
  }

  getSenderBalanceUpdate() {
    this.apiService
      .updateSenderBalance(this.senderId, this.amount, this.senderBalance)
      .subscribe(
        (data) => {
          this.update = data;
          this.updatedSender = this.update.balance;

          this.getReceiverBalanceUpdate();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getReceiverBalanceUpdate() {
    this.apiService
      .updateReceiverBalance(this.receiverId, this.amount, this.receiverBalance)
      .subscribe(
        (data) => {
          this.update = data;
          this.updatedReceiver = this.update.balance;

          let form_info = {
            sender: this.sender,
            receiver: this.receiver,
            senderBalance: this.senderBalance,
            receiverBalance: this.receiverBalance,
            senderEmail: this.senderEmail,
            receiverEmail: this.receiverEmail,
            senderName: this.senderName,
            receiverName: this.receiverName,
            amount: this.amount,
            senderId: this.senderId,
            receiverId: this.receiverId,
            updatedSender: this.updatedSender,
            updatedReceiver: this.updatedReceiver,
          };
          this.event_submite_form.emit(form_info);
          this.history();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  validateSender($event: any) {
    this.check_validationSender();
  }

  check_validationSender() {
    for (const [key, value] of Object.entries(this.users)) {
      let sender = [];
      sender.push(
        value.accountNo,
        value.balance,
        value.name,
        value.email,
        value.id
      );

      if (sender.includes(this.sender)) {
        this.senderBalance = value.balance;
        this.senderEmail = value.email;
        this.senderName = value.name;
        this.senderId = value.id;

        this.is_valid = true;
        break;
      } else {
        this.is_valid = false;
      }
    }
  }
  validateReceiver($event: any) {
    this.check_validationReceiver();
  }

  check_validationReceiver() {
    for (const [key, value] of Object.entries(this.users)) {
      let receiver = [];
      receiver.push(
        value.accountNo,
        value.balance,
        value.name,
        value.email,
        value.id
      );
      if (receiver.includes(this.receiver)) {
        this.receiverBalance = value.balance;
        this.receiverEmail = value.email;
        this.receiverName = value.name;
        this.receiverId = value.id;
        this.is_valid2 = true;
        break;
      } else {
        this.is_valid2 = false;
      }
    }
  }
  history() {
    this.apiService
      .postHistory(
        this.senderName,
        this.receiverName,
        this.amount,
        this.sender,
        this.receiver,
        this.senderBalance,
        this.receiverBalance,
        this.updatedSender,
        this.updatedReceiver,
        this.senderEmail,
        this.receiverEmail
      )
      .subscribe((data) => {
        data;
      });
  }
}
