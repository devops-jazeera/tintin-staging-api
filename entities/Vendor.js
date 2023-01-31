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
exports.Vendor = void 0;
var typeorm_1 = require("typeorm");
var Vendor = /** @class */ (function () {
    function Vendor() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "title" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "logo" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "logo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "active" }),
        __metadata("design:type", Boolean)
    ], Vendor.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name_ar" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "name_ar", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "address_id" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "address_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], Vendor.prototype, "inserted_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], Vendor.prototype, "updated_on", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "email" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "mobile" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "mobile", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "vat" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "vat", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "license_limit" }),
        __metadata("design:type", Number)
    ], Vendor.prototype, "license_limit", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "license_expiry_date" }),
        __metadata("design:type", Date)
    ], Vendor.prototype, "license_expiry_date", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "allow_machine_expiry" }),
        __metadata("design:type", Boolean)
    ], Vendor.prototype, "allow_machine_expiry", void 0);
    Vendor = __decorate([
        (0, typeorm_1.Entity)("vendor")
    ], Vendor);
    return Vendor;
}());
exports.Vendor = Vendor;
