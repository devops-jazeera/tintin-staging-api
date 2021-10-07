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
var CatalogueMaster_1 = require("./CatalogueMaster");
var Vendor_1 = require("./Vendor");
var ColorMaster = /** @class */ (function () {
    function ColorMaster() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], ColorMaster.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_en" }),
        __metadata("design:type", String)
    ], ColorMaster.prototype, "nameEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], ColorMaster.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "code" }),
        __metadata("design:type", String)
    ], ColorMaster.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({ name: "hex" }),
        __metadata("design:type", String)
    ], ColorMaster.prototype, "hex", void 0);
    __decorate([
        typeorm_1.Column({ name: "red" }),
        __metadata("design:type", Number)
    ], ColorMaster.prototype, "red", void 0);
    __decorate([
        typeorm_1.Column({ name: "green" }),
        __metadata("design:type", Number)
    ], ColorMaster.prototype, "green", void 0);
    __decorate([
        typeorm_1.Column({ name: "blue" }),
        __metadata("design:type", Number)
    ], ColorMaster.prototype, "blue", void 0);
    __decorate([
        typeorm_1.Column({ name: "hue" }),
        __metadata("design:type", Number)
    ], ColorMaster.prototype, "hue", void 0);
    __decorate([
        typeorm_1.Column({ name: "saturation" }),
        __metadata("design:type", Number)
    ], ColorMaster.prototype, "saturation", void 0);
    __decorate([
        typeorm_1.Column({ name: "value" }),
        __metadata("design:type", Number)
    ], ColorMaster.prototype, "value", void 0);
    __decorate([
        typeorm_1.Column({ name: "img_id" }),
        __metadata("design:type", Number)
    ], ColorMaster.prototype, "imgId", void 0);
    __decorate([
        typeorm_1.Column({ name: "productcode" }),
        __metadata("design:type", String)
    ], ColorMaster.prototype, "productcode", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], ColorMaster.prototype, "systemCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], ColorMaster.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], ColorMaster.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], ColorMaster.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], ColorMaster.prototype, "insertedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_at" }),
        __metadata("design:type", Date)
    ], ColorMaster.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "catalogue_id" }),
        __metadata("design:type", String)
    ], ColorMaster.prototype, "catalogueId", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", String)
    ], ColorMaster.prototype, "vid", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "catalogue_id" }),
        typeorm_1.ManyToOne(function (type) { return CatalogueMaster_1.CatalogueMaster; }, function (catalogueMaster) { return catalogueMaster.id; }),
        __metadata("design:type", CatalogueMaster_1.CatalogueMaster)
    ], ColorMaster.prototype, "catalogue", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "vid" }),
        typeorm_1.OneToOne(function (type) { return Vendor_1.Vendor; }, function (vendor) { return vendor.id; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], ColorMaster.prototype, "vendor", void 0);
    ColorMaster = __decorate([
        typeorm_1.Entity("colors")
    ], ColorMaster);
    return ColorMaster;
}());
exports.ColorMaster = ColorMaster;
