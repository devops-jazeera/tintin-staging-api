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
var Profile_1 = require("./Profile");
var Branch_1 = require("./Branch");
var Address_1 = require("./Address");
var Vendor = /** @class */ (function () {
    function Vendor() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "title" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({ name: "logo" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "logo", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], Vendor.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "name_ar", void 0);
    __decorate([
        typeorm_1.Column({ name: "address_id" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "address_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], Vendor.prototype, "inserted_at", void 0);
    __decorate([
        typeorm_1.Column({ name: "email" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ name: "mobile" }),
        __metadata("design:type", String)
    ], Vendor.prototype, "mobile", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: 'id' }),
        typeorm_1.OneToMany(function (type) { return Profile_1.Profile; }, function (profile) { return profile.vendors; }, {
            cascade: true,
        }),
        __metadata("design:type", Profile_1.Profile)
    ], Vendor.prototype, "profile", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "address_id" }),
        typeorm_1.ManyToOne(function (type) { return Address_1.Address; }, {
            cascade: true,
        }),
        __metadata("design:type", Address_1.Address)
    ], Vendor.prototype, "address", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "branch_id" }),
        typeorm_1.ManyToOne(function (type) { return Branch_1.Branch; }),
        __metadata("design:type", Branch_1.Branch)
    ], Vendor.prototype, "branch", void 0);
    Vendor = __decorate([
        typeorm_1.Entity("vendor")
    ], Vendor);
    return Vendor;
}());
exports.Vendor = Vendor;
