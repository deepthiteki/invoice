"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = __importDefault(require("./customer"));
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(id, customer, balance) {
        var _this = _super.call(this, customer.id, customer.name, customer.discount) || this;
        _this.id = id;
        _this.account_id = 0;
        _this.balance = 0.0;
        return _this;
    }
    Account.prototype.getid = function () {
        return this.account_id;
    };
    Account.prototype.getCustomer = function () {
        return this.toString();
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    Account.prototype.toString = function () {
        return this.name + "(" + this.account_id + " balance=$" + this.balance + ")";
    };
    Account.prototype.getCustomerName = function () {
        return this.name;
    };
    Account.prototype.deposit = function (amount) {
        this.balance = this.balance + amount;
    };
    Account.prototype.withdraw = function (amount) {
        this.balance = this.balance - amount;
    };
    return Account;
}(customer_1.default));
exports.default = Account;
