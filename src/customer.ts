export default class Customer{
    id:number;
    name:string;
    discount:number;
    constructor(id:number,name:string,discount:number){
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    getId():number{
        return this.id;
    }
    getName():string{
        return this.name;
    }
    getDiscount():number{
        return this.discount;
    }
    setDiscount(discount:number):void{
        this.discount=discount
    }
    toString():string{
        return `${this.name}(${this.id})` ;  }

}