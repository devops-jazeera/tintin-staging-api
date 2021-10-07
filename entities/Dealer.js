"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Vendor_1 = require("./Vendor");
var Address_1 = require("./Address");
var Dealer = /** @class */ (function () {
    function Dealer() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "store_id" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "storeId", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_code" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "countryCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "mobile" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "mobile", void 0);
    __decorate([
        typeorm_1.Column({ name: "email" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendor_id" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "vendor_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], Dealer.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], Dealer.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], Dealer.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "vendor_id" }),
        typeorm_1.ManyToOne(function (type) { return Vendor_1.Vendor; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], Dealer.prototype, "vendor", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "address_id" }),
        typeorm_1.ManyToOne(function (type) { return Address_1.Address; }),
        __metadata("design:type", Address_1.Address)
    ], Dealer.prototype, "address", void 0);
    Dealer = __decorate([
        typeorm_1.Entity("dealer")
    ], Dealer);
    return Dealer;
}());
exports.Dealer = Dealer;
