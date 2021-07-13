"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    Customer.prototype.getId = function () {
        return this.id;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    Customer.prototype.toString = function () {
        return this.name + "(" + this.id + ")";
    };
    return Customer;
}());
exports.default = Customer;
