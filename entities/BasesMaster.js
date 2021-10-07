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
var BaseSizes_1 = require("./BaseSizes");
var typeorm_1 = require("typeorm");
var Vendor_1 = require("./Vendor");
var ProductMaster_1 = require("./ProductMaster");
var BaseSizeColors_1 = require("./BaseSizeColors");
var BasesMaster = /** @class */ (function () {
    function BasesMaster() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], BasesMaster.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_en" }),
        __metadata("design:type", String)
    ], BasesMaster.prototype, "nameEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], BasesMaster.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "code" }),
        __metadata("design:type", String)
    ], BasesMaster.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_id" }),
        __metadata("design:type", String)
    ], BasesMaster.prototype, "productId", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], BasesMaster.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], BasesMaster.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], BasesMaster.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], BasesMaster.prototype, "insertedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_at" }),
        __metadata("design:type", Date)
    ], BasesMaster.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], BasesMaster.prototype, "systemCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendor_id" }),
        __metadata("design:type", String)
    ], BasesMaster.prototype, "vendorId", void 0);
    __decorate([
        typeorm_1.Column({ name: "price" }),
        __metadata("design:type", Number)
    ], BasesMaster.prototype, "price", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "vendor_id" }),
        typeorm_1.ManyToOne(function (type) { return Vendor_1.Vendor; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], BasesMaster.prototype, "vendor", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "product_id" }),
        typeorm_1.ManyToOne(function (type) { return ProductMaster_1.ProductMaster; }, function (product) { return product.id; }),
        __metadata("design:type", ProductMaster_1.ProductMaster)
    ], BasesMaster.prototype, "product", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return BaseSizes_1.BaseSizes; }, function (base) { return base.base; }),
        __metadata("design:type", Array)
    ], BasesMaster.prototype, "baseSizes", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return BaseSizeColors_1.BaseSizeColors; }, function (base) { return base.base; }),
        __metadata("design:type", Array)
    ], BasesMaster.prototype, "baseSizePrices", void 0);
    BasesMaster = __decorate([
        typeorm_1.Entity("bases")
    ], BasesMaster);
    return BasesMaster;
}());
exports.BasesMaster = BasesMaster;
