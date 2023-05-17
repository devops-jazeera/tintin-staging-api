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
exports.ColorMasterCopy = void 0;
var typeorm_1 = require("typeorm");
var CatalogueMaster_1 = require("./CatalogueMaster");
var Vendor_1 = require("./Vendor");
var ColorMasterCopy = /** @class */ (function () {
    function ColorMasterCopy() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], ColorMasterCopy.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name_en" }),
        __metadata("design:type", String)
    ], ColorMasterCopy.prototype, "name_en", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name_ar" }),
        __metadata("design:type", String)
    ], ColorMasterCopy.prototype, "name_ar", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "code" }),
        __metadata("design:type", String)
    ], ColorMasterCopy.prototype, "code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "hex" }),
        __metadata("design:type", String)
    ], ColorMasterCopy.prototype, "hex", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "red" }),
        __metadata("design:type", Number)
    ], ColorMasterCopy.prototype, "red", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "green" }),
        __metadata("design:type", Number)
    ], ColorMasterCopy.prototype, "green", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "blue" }),
        __metadata("design:type", Number)
    ], ColorMasterCopy.prototype, "blue", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "hue" }),
        __metadata("design:type", Number)
    ], ColorMasterCopy.prototype, "hue", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "saturation" }),
        __metadata("design:type", Number)
    ], ColorMasterCopy.prototype, "saturation", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "value" }),
        __metadata("design:type", Number)
    ], ColorMasterCopy.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "img_id" }),
        __metadata("design:type", Number)
    ], ColorMasterCopy.prototype, "img_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "productcode" }),
        __metadata("design:type", String)
    ], ColorMasterCopy.prototype, "productcode", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "system_code" }),
        __metadata("design:type", String)
    ], ColorMasterCopy.prototype, "system_code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "active" }),
        __metadata("design:type", Boolean)
    ], ColorMasterCopy.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_by" }),
        __metadata("design:type", String)
    ], ColorMasterCopy.prototype, "updated_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], ColorMasterCopy.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "inserted_by" }),
        __metadata("design:type", String)
    ], ColorMasterCopy.prototype, "inserted_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], ColorMasterCopy.prototype, "inserted_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "deleted_at" }),
        __metadata("design:type", Date)
    ], ColorMasterCopy.prototype, "deleted_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "catalogue_id" }),
        __metadata("design:type", String)
    ], ColorMasterCopy.prototype, "catalogue_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "vid" }),
        __metadata("design:type", String)
    ], ColorMasterCopy.prototype, "vid", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: "catalogue_id" }),
        (0, typeorm_1.ManyToOne)(function (type) { return CatalogueMaster_1.CatalogueMaster; }, function (catalogueMaster) { return catalogueMaster.id; }),
        __metadata("design:type", CatalogueMaster_1.CatalogueMaster)
    ], ColorMasterCopy.prototype, "catalogue", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: "vid" }),
        (0, typeorm_1.OneToOne)(function (type) { return Vendor_1.Vendor; }, function (vendor) { return vendor.id; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], ColorMasterCopy.prototype, "vendor", void 0);
    ColorMasterCopy = __decorate([
        (0, typeorm_1.Entity)("colors")
    ], ColorMasterCopy);
    return ColorMasterCopy;
}());
exports.ColorMasterCopy = ColorMasterCopy;
