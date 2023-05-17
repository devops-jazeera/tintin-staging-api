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
exports.Technician = void 0;
var typeorm_1 = require("typeorm");
var Vendor_1 = require("./Vendor");
var Address_1 = require("./Address");
var AreaMaster_1 = require("./AreaMaster");
var AccessData_1 = require("./AccessData");
var Technician = /** @class */ (function () {
    function Technician() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], Technician.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name" }),
        __metadata("design:type", String)
    ], Technician.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name_ar" }),
        __metadata("design:type", String)
    ], Technician.prototype, "name_ar", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "country_code" }),
        __metadata("design:type", String)
    ], Technician.prototype, "country_code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "mobile" }),
        __metadata("design:type", String)
    ], Technician.prototype, "mobile", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "email" }),
        __metadata("design:type", String)
    ], Technician.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "password" }),
        __metadata("design:type", String)
    ], Technician.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "vendor_id" }),
        __metadata("design:type", String)
    ], Technician.prototype, "vendor_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "vid" }),
        __metadata("design:type", String)
    ], Technician.prototype, "vid", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "active" }),
        __metadata("design:type", Boolean)
    ], Technician.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_by" }),
        __metadata("design:type", String)
    ], Technician.prototype, "updated_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], Technician.prototype, "updated_on", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: "address_id" }),
        (0, typeorm_1.ManyToOne)(function (type) { return Address_1.Address; }),
        __metadata("design:type", Address_1.Address)
    ], Technician.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: "country_code", referencedColumnName: "code" }),
        (0, typeorm_1.ManyToOne)(function (type) { return AccessData_1.AccessData; }, function (accessData) { return accessData.code; }),
        __metadata("design:type", AccessData_1.AccessData)
    ], Technician.prototype, "countryMaster", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: "region_id" }),
        (0, typeorm_1.ManyToOne)(function (type) { return AreaMaster_1.AreaMaster; })
        /* @JoinColumn([
            { name: "region_id", referencedColumnName: "id" },
            { name: "city_id", referencedColumnName: "id" },
            { name: "district_id", referencedColumnName: "id" },
          ]) */
        ,
        __metadata("design:type", AreaMaster_1.AreaMaster)
    ], Technician.prototype, "areaMaster", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "city_id" }),
        __metadata("design:type", Number)
    ], Technician.prototype, "city_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "district_id" }),
        __metadata("design:type", Number)
    ], Technician.prototype, "district_id", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: "vendor_id" }),
        (0, typeorm_1.OneToOne)(function (type) { return Vendor_1.Vendor; }, function (vendor) { return vendor.id; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], Technician.prototype, "vendor", void 0);
    Technician = __decorate([
        (0, typeorm_1.Entity)("technician")
    ], Technician);
    return Technician;
}());
exports.Technician = Technician;
