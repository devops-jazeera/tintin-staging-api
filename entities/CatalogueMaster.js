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
var ColorMaster_1 = require("./ColorMaster");
var typeorm_1 = require("typeorm");
var Vendor_1 = require("./Vendor");
var CatalogueMaster = /** @class */ (function () {
    function CatalogueMaster() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], CatalogueMaster.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], CatalogueMaster.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], CatalogueMaster.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], CatalogueMaster.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "compcode" }),
        __metadata("design:type", String)
    ], CatalogueMaster.prototype, "compCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_by" }),
        __metadata("design:type", String)
    ], CatalogueMaster.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_on" }),
        __metadata("design:type", Date)
    ], CatalogueMaster.prototype, "createdOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], CatalogueMaster.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], CatalogueMaster.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "code" }),
        __metadata("design:type", String)
    ], CatalogueMaster.prototype, "code", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "compcode" }),
        typeorm_1.OneToOne(function (type) { return Vendor_1.Vendor; }, function (vendor) { return vendor.id; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], CatalogueMaster.prototype, "vendor", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ColorMaster_1.ColorMaster; }, function (color) { return color.catalogue; }),
        __metadata("design:type", Array)
    ], CatalogueMaster.prototype, "colors", void 0);
    CatalogueMaster = __decorate([
        typeorm_1.Entity("catalogue_master")
    ], CatalogueMaster);
    return CatalogueMaster;
}());
exports.CatalogueMaster = CatalogueMaster;
