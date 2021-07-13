import Customer from "./customer";
import customer from "./customer";
export default class Account extends Customer{
    account_id:number;
    balance:number;
    constructor(id:number,customer:Customer,balance:number){
        super(customer.id,customer.name,customer.discount);
        this.id = id;
        this.account_id=0;

        this.balance = 0.0
    }
    getid():number{
        return this.account_id;
    }
    getCustomer():string{
        return this.toString();
    }
    getBalance():number{
        return this.balance;
    }
    setBalance(balance:number):void{
        this.balance = balance;
    }
    toString():string{
        return `${this.name}(${this.account_id} balance=$${this.balance})`;
    }
    getCustomerName():string{
        return this.name;
    }
    deposit(amount:number):void{
        this.balance = this.balance+amount;
    }
    withdraw(amount:number):void{
        this.balance = this.balance-amount;
    }

}