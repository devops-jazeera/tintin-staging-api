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
var Vendor_1 = require("./Vendor");
var typeorm_1 = require("typeorm");
var SizeMaster = /** @class */ (function () {
    function SizeMaster() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], SizeMaster.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_en" }),
        __metadata("design:type", String)
    ], SizeMaster.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "code" }),
        __metadata("design:type", String)
    ], SizeMaster.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], SizeMaster.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "unit" }),
        __metadata("design:type", String)
    ], SizeMaster.prototype, "unit", void 0);
    __decorate([
        typeorm_1.Column({ name: "volume" }),
        __metadata("design:type", Number)
    ], SizeMaster.prototype, "volume", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", String)
    ], SizeMaster.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], SizeMaster.prototype, "systemCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], SizeMaster.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], SizeMaster.prototype, "insertedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], SizeMaster.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], SizeMaster.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_at" }),
        __metadata("design:type", Date)
    ], SizeMaster.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "vid" }),
        typeorm_1.OneToOne(function (type) { return Vendor_1.Vendor; }, function (vendor) { return vendor.id; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], SizeMaster.prototype, "vendor", void 0);
    SizeMaster = __decorate([
        typeorm_1.Entity("sizes")
    ], SizeMaster);
    return SizeMaster;
}());
exports.SizeMaster = SizeMaster;
