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
var CountryMaster_1 = require("./CountryMaster");
var AreaMaster_1 = require("./AreaMaster");
var Dealer_1 = require("./Dealer");
var DatabaseMaster_1 = require("./DatabaseMaster");
var Technician_1 = require("./Technician");
var TintingMachine = /** @class */ (function () {
    function TintingMachine() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "type" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({ name: "serial_number" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "serialNumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "mfg_date" }),
        __metadata("design:type", Date)
    ], TintingMachine.prototype, "mfgDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "service_occurance" }),
        __metadata("design:type", Number)
    ], TintingMachine.prototype, "serviceOccurance", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendor_id" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "vendor_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], TintingMachine.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], TintingMachine.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "systemCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "dealerid" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "dealerId", void 0);
    __decorate([
        typeorm_1.Column({ name: "technician_id" }),
        __metadata("design:type", String)
    ], TintingMachine.prototype, "technicianId", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "dealerid" }),
        typeorm_1.ManyToOne(function (type) { return Dealer_1.Dealer; }),
        __metadata("design:type", Dealer_1.Dealer)
    ], TintingMachine.prototype, "dealer", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "system_code" }),
        typeorm_1.ManyToOne(function (type) { return DatabaseMaster_1.DatabaseMaster; }),
        __metadata("design:type", DatabaseMaster_1.DatabaseMaster)
    ], TintingMachine.prototype, "database", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "technician_id" }),
        typeorm_1.ManyToOne(function (type) { return Technician_1.Technician; }),
        __metadata("design:type", Technician_1.Technician)
    ], TintingMachine.prototype, "technician", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "vendor_id" }),
        typeorm_1.ManyToOne(function (type) { return Vendor_1.Vendor; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], TintingMachine.prototype, "vendor", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "address_id" }),
        typeorm_1.ManyToOne(function (type) { return Address_1.Address; }, { cascade: true }),
        __metadata("design:type", Address_1.Address)
    ], TintingMachine.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_id" }),
        __metadata("design:type", Number)
    ], TintingMachine.prototype, "countryId", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "country_id" }),
        typeorm_1.OneToOne(function (type) { return CountryMaster_1.CountryMaster; }, function (cou) { return cou.id; }),
        __metadata("design:type", CountryMaster_1.CountryMaster)
    ], TintingMachine.prototype, "countryMaster", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "country_id" }),
        typeorm_1.ManyToOne(function (type) { return AreaMaster_1.AreaMaster; }, function (area) { return area.countryId; }),
        __metadata("design:type", AreaMaster_1.AreaMaster)
    ], TintingMachine.prototype, "areaMaster", void 0);
    __decorate([
        typeorm_1.Column({ name: "region_id" }),
        __metadata("design:type", Number)
    ], TintingMachine.prototype, "regionId", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "region_id" }),
        typeorm_1.ManyToOne(function (type) { return AreaMaster_1.AreaMaster; }, function (cm) { return cm.id; }),
        __metadata("design:type", AreaMaster_1.AreaMaster)
    ], TintingMachine.prototype, "regionMaster", void 0);
    __decorate([
        typeorm_1.Column({ name: "city_id" }),
        __metadata("design:type", Number)
    ], TintingMachine.prototype, "cityId", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "city_id" }),
        typeorm_1.ManyToOne(function (type) { return AreaMaster_1.AreaMaster; }, function (cm) { return cm.id; }),
        __metadata("design:type", AreaMaster_1.AreaMaster)
    ], TintingMachine.prototype, "cityMaster", void 0);
    __decorate([
        typeorm_1.Column({ name: "district_id" }),
        __metadata("design:type", Number)
    ], TintingMachine.prototype, "districtId", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "district_id" }),
        typeorm_1.ManyToOne(function (type) { return AreaMaster_1.AreaMaster; }, function (cm) { return cm.id; }),
        __metadata("design:type", AreaMaster_1.AreaMaster)
    ], TintingMachine.prototype, "districtMaster", void 0);
    TintingMachine = __decorate([
        typeorm_1.Entity("tinting_machine")
    ], TintingMachine);
    return TintingMachine;
}());
exports.TintingMachine = TintingMachine;
