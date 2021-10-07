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
var BasesMaster_1 = require("./BasesMaster");
var SizeMaster_1 = require("./SizeMaster");
var ProductMaster_1 = require("./ProductMaster");
var BaseSizes = /** @class */ (function () {
    function BaseSizes() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], BaseSizes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_ap" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "priceap", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_ap2" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "priceap2", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_app" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "priceapp", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_p1" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "pricep1", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_p2" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "pricep2", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_p3" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "pricep3", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_p4" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "pricep4", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_p5" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "pricep5", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_p6" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "pricep6", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_p7" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "pricep7", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_ip" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "priceip", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_ap10m" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "priceap10m", void 0);
    __decorate([
        typeorm_1.Column({ name: "price_ap10per" }),
        __metadata("design:type", Number)
    ], BaseSizes.prototype, "priceap10per", void 0);
    __decorate([
        typeorm_1.Column({ name: "base_id" }),
        __metadata("design:type", String)
    ], BaseSizes.prototype, "baseId", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_id" }),
        __metadata("design:type", String)
    ], BaseSizes.prototype, "productId", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "base_id" }),
        typeorm_1.ManyToOne(function (type) { return BasesMaster_1.BasesMaster; }, function (bm) { return bm.id; }),
        __metadata("design:type", BasesMaster_1.BasesMaster)
    ], BaseSizes.prototype, "base", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "size_id" }),
        typeorm_1.ManyToOne(function (type) { return SizeMaster_1.SizeMaster; }, function (sm) { return sm.id; }),
        __metadata("design:type", SizeMaster_1.SizeMaster)
    ], BaseSizes.prototype, "size", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "product_id" }),
        typeorm_1.ManyToOne(function (type) { return ProductMaster_1.ProductMaster; }, function (pm) { return pm.id; }),
        __metadata("design:type", ProductMaster_1.ProductMaster)
    ], BaseSizes.prototype, "product", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], BaseSizes.prototype, "insertedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], BaseSizes.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_at" }),
        __metadata("design:type", Date)
    ], BaseSizes.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendor_id" }),
        __metadata("design:type", String)
    ], BaseSizes.prototype, "vendorId", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], BaseSizes.prototype, "active", void 0);
    BaseSizes = __decorate([
        typeorm_1.Entity("base_sizes")
    ], BaseSizes);
    return BaseSizes;
}());
exports.BaseSizes = BaseSizes;
