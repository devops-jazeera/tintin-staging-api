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
var ProductAttribute = /** @class */ (function () {
    function ProductAttribute() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_en" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "nameEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "description_en" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "descriptionEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "description_ar" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "descriptionAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendor_id" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "vendor_id", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "vid" }),
        typeorm_1.ManyToOne(function (type) { return Vendor_1.Vendor; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], ProductAttribute.prototype, "vendor", void 0);
    __decorate([
        typeorm_1.Column({ name: "body", type: "json" }),
        __metadata("design:type", Object)
    ], ProductAttribute.prototype, "body", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_code" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "productCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "systemCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], ProductAttribute.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_id" }),
        __metadata("design:type", Number)
    ], ProductAttribute.prototype, "productId", void 0);
    __decorate([
        typeorm_1.Column({ name: "company_code" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "companyCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "mainphoto_description_en" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "mainPhotoDecsEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "mainphoto_description_ar" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "mainPhotoDescAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "title_en" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "titleEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "title_ar" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "titleAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], ProductAttribute.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], ProductAttribute.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], ProductAttribute.prototype, "insertedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_at" }),
        __metadata("design:type", Date)
    ], ProductAttribute.prototype, "deletedAt", void 0);
    ProductAttribute = __decorate([
        typeorm_1.Entity("product_attributes")
    ], ProductAttribute);
    return ProductAttribute;
}());
exports.ProductAttribute = ProductAttribute;
