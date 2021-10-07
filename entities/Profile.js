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
var Profile = /** @class */ (function () {
    function Profile() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Profile.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Profile.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_code" }),
        __metadata("design:type", String)
    ], Profile.prototype, "countryCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "mobile" }),
        __metadata("design:type", String)
    ], Profile.prototype, "mobile", void 0);
    __decorate([
        typeorm_1.Column({ name: "email" }),
        __metadata("design:type", String)
    ], Profile.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ name: "password" }),
        __metadata("design:type", String)
    ], Profile.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({ name: "token" }),
        __metadata("design:type", String)
    ], Profile.prototype, "token", void 0);
    __decorate([
        typeorm_1.Column({ name: "role" }),
        __metadata("design:type", String)
    ], Profile.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column({ name: "status" }),
        __metadata("design:type", String)
    ], Profile.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], Profile.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", String)
    ], Profile.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_by" }),
        __metadata("design:type", String)
    ], Profile.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_on" }),
        __metadata("design:type", Date)
    ], Profile.prototype, "createdOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], Profile.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], Profile.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], Profile.prototype, "systemCode", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "vid" }),
        typeorm_1.ManyToOne(function (type) { return Vendor_1.Vendor; }, function (vendor) { return vendor.id; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], Profile.prototype, "vendors", void 0);
    Profile = __decorate([
        typeorm_1.Entity("profile")
    ], Profile);
    return Profile;
}());
exports.Profile = Profile;
