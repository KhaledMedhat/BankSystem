export class model {
  name: string;
  accountNo: number;
  id: number;
  email: string;
  balance: number;

  constructor(
    name: string,
    accountNo: number,
    id: number,
    email: string,
    balance: number
  ) {
    this.name = name;
    this.accountNo = accountNo;
    this.id = id;
    this.email = email;
    this.balance = balance;
  }
}
