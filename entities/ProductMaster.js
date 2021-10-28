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
var BasesMaster_1 = require("./BasesMaster");
var typeorm_2 = require("typeorm");
var DatabaseMaster_1 = require("./DatabaseMaster");
var ProductMaster = /** @class */ (function () {
    function ProductMaster() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "code" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "productCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_en" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "nameEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendor_id" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "vendorId", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "systemCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "description_short_en" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "descriptionShortEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "description_short_ar" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "descriptionShortAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_details_en" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "productDetailsEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_details_ar" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "productDetailsAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "specs_en" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "specsEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "specs_ar" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "specsAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "can_photo_alt_en" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "canPhotoAltEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "can_photo_alt_ar" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "canPhotoAltAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "main_photo_alt_en" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "mainPhotoAltEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "main_photo_alt_ar" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "mainPhotoAltAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "int_ext" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "intExt", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_type" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "productType", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], ProductMaster.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_by" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "insertedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], ProductMaster.prototype, "insertedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], ProductMaster.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], ProductMaster.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "vendor_id" }),
        typeorm_1.OneToOne(function (type) { return Vendor_1.Vendor; }, function (vendor) { return vendor.id; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], ProductMaster.prototype, "vendor", void 0);
    __decorate([
        typeorm_2.OneToMany(function (type) { return BasesMaster_1.BasesMaster; }, function (base) { return base.product; }),
        __metadata("design:type", Array)
    ], ProductMaster.prototype, "bases", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "system_code", referencedColumnName: "systemCode" }),
        typeorm_1.OneToOne(function (type) { return DatabaseMaster_1.DatabaseMaster; }, function (db) { return db.systemCode; }),
        __metadata("design:type", DatabaseMaster_1.DatabaseMaster)
    ], ProductMaster.prototype, "dataBaseMaster", void 0);
    ProductMaster = __decorate([
        typeorm_1.Entity("products")
    ], ProductMaster);
    return ProductMaster;
}());
exports.ProductMaster = ProductMaster;
