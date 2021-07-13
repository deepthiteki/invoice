import Customer from "./customer";

export default class Invoice extends Customer{
    id:number;
    amount:number;

    constructor(id:number,customer:Customer,amount:number){
        super(customer.id,customer.name,customer.discount);
        this.id=id;
        this.amount = amount;
    }
    getID():number{
        return this.id;
    }
    getCustomer():string{
        return this.toString();

    }
    getAmount():number{
        return this.amount;
    }
    setAmount(amount:number){
        this.amount = amount;
    }
    getCustomerName():string{
        return this.name;
    }
    getAmountAfterDiscount():number{
        return (this.amount-this.discount);
    }

}
