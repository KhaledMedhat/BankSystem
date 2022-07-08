import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<[]>('http://localhost:3000/users');
  }

  updateSenderBalance(senderId: string, amount: any, senderBalance: any) {
    const body = {
      balance: parseInt(senderBalance) - parseInt(amount),
    };
    let url = 'http://localhost:3000/users/' + senderId;

    return this.http.patch(url, body);
  }

  updateReceiverBalance(receiverId: string, amount: any, receiverBalance: any) {
    const body = {
      balance: parseInt(receiverBalance) + parseInt(amount),
    };
    let url = 'http://localhost:3000/users/' + receiverId;

    return this.http.patch(url, body);
  }

  postHistory(
    senderName: string,
    receiverName: string,
    amount: any,
    senderAccountNo: string,
    receiverAccountNo: string,
    senderBalance: any,
    receiverBalance: any,
    updatedSender: any,
    updatedReceiver: any,
    senderEmail: any,
    receiverEmail: any
  ) {
    const body = {
      senderBalance,
      receiverBalance,
      senderName,
      receiverName,
      amount,
      senderAccountNo,
      receiverAccountNo,
      updatedReceiver,
      updatedSender,
      senderEmail,
      receiverEmail,
    };
    return this.http.post<any>('http://localhost:3001/history', body);
  }

  getHistoryData() {
    return this.http.get<any>('http://localhost:3001/history');
  }
}
