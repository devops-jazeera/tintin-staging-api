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
var DatabaseMaster_1 = require("./DatabaseMaster");
var typeorm_1 = require("typeorm");
var ColorMaster_1 = require("./ColorMaster");
var BasesMaster_1 = require("./BasesMaster");
var Dealer_1 = require("./Dealer");
var DispenseLog = /** @class */ (function () {
    function DispenseLog() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_code" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "productCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "base_code" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "baseCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "color_code" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "colorCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceid" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "invoiceid", void 0);
    __decorate([
        typeorm_1.Column({ name: "size_code" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "sizeCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "base_price" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "basePrice", void 0);
    __decorate([
        typeorm_1.Column({ name: "colarant_price" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "colarantPrice", void 0);
    __decorate([
        typeorm_1.Column({ name: "quantity" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.Column({ name: "c1" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c1", void 0);
    __decorate([
        typeorm_1.Column({ name: "q1" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q1", void 0);
    __decorate([
        typeorm_1.Column({ name: "c2" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c2", void 0);
    __decorate([
        typeorm_1.Column({ name: "q2" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q2", void 0);
    __decorate([
        typeorm_1.Column({ name: "c3" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c3", void 0);
    __decorate([
        typeorm_1.Column({ name: "q3" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q3", void 0);
    __decorate([
        typeorm_1.Column({ name: "c4" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c4", void 0);
    __decorate([
        typeorm_1.Column({ name: "q4" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q4", void 0);
    __decorate([
        typeorm_1.Column({ name: "c5" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c5", void 0);
    __decorate([
        typeorm_1.Column({ name: "q5" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q5", void 0);
    __decorate([
        typeorm_1.Column({ name: "c6" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "c6", void 0);
    __decorate([
        typeorm_1.Column({ name: "q6" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q6", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "systemCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "comapny_code" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "comapnyCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "volume" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "volume", void 0);
    __decorate([
        typeorm_1.Column({ name: "unit" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "unit", void 0);
    __decorate([
        typeorm_1.Column({ name: "grand_total" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "grandTotal", void 0);
    __decorate([
        typeorm_1.Column({ name: "remarks" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "remarks", void 0);
    __decorate([
        typeorm_1.Column({ name: "store_id" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "storeId", void 0);
    __decorate([
        typeorm_1.Column({ name: "dealer_id" }),
        __metadata("design:type", String)
    ], DispenseLog.prototype, "dealerId", void 0);
    __decorate([
        typeorm_1.Column({ name: "c7" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "q7", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_at" }),
        __metadata("design:type", Date)
    ], DispenseLog.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "syncstatus" }),
        __metadata("design:type", Number)
    ], DispenseLog.prototype, "syncstatus", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "color_code", referencedColumnName: "code" }),
        typeorm_1.ManyToOne(function (type) { return ColorMaster_1.ColorMaster; }, function (color) { return color.code; }),
        __metadata("design:type", ColorMaster_1.ColorMaster)
    ], DispenseLog.prototype, "color", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "base_code", referencedColumnName: "code" }),
        typeorm_1.ManyToOne(function (type) { return BasesMaster_1.BasesMaster; }, function (base) { return base.code; }),
        __metadata("design:type", BasesMaster_1.BasesMaster)
    ], DispenseLog.prototype, "base", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "system_code", referencedColumnName: "systemCode" }),
        typeorm_1.ManyToOne(function (type) { return DatabaseMaster_1.DatabaseMaster; }, function (db) { return db.systemCode; }),
        __metadata("design:type", DatabaseMaster_1.DatabaseMaster)
    ], DispenseLog.prototype, "dbMaster", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "dealer_id", referencedColumnName: "id" }),
        typeorm_1.ManyToOne(function (type) { return Dealer_1.Dealer; }, function (db) { return db.id; }),
        __metadata("design:type", Dealer_1.Dealer)
    ], DispenseLog.prototype, "dealer", void 0);
    DispenseLog = __decorate([
        typeorm_1.Entity("dispense_log")
    ], DispenseLog);
    return DispenseLog;
}());
exports.DispenseLog = DispenseLog;
