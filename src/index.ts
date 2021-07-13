import Invoice  from "./invoice";
import Account from "./account";
import Customer from "./customer";

(<HTMLElement>document.getElementById('btn')).addEventListener('click', () => {
    let custname = (<HTMLFormElement>document.getElementById('name')).value;
    let custid = (<HTMLFormElement>document.getElementById('customer-id')).value;
    let custdiscount = (<HTMLFormElement>document.getElementById('cust-discount')).value;
    let invoiceid = (<HTMLFormElement>document.getElementById('invoice-id')).value;
    let amount = (<HTMLFormElement>document.getElementById('amount')).value;
    let accountid = (<HTMLFormElement>document.getElementById('account-id')).value;
    let balance = (<HTMLFormElement>document.getElementById('balance')).value;
    let withdraw = (<HTMLFormElement>document.getElementById('withdraw')).value;
    let deposit = (<HTMLFormElement>document.getElementById('deposit')).value;
    let customer = new Customer(custname,custid,custdiscount);
    let invoice = new Invoice(invoiceid,customer,amount);
    let account = new Account(accountid,customer,balance);
    account.deposit(deposit);
    account.withdraw(withdraw);
    var result = account.getBalance();
    let dr = (<HTMLSelectElement>document.getElementById('res'));
    let res = document.createElement('p');
    res.innerText = String(result);
    

    dr.appendChild(res);



    

    (<HTMLFormElement>document.getElementById('form')).reset();
});

