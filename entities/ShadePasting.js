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
var ProductMaster_1 = require("./ProductMaster");
var Vendor_1 = require("./Vendor");
var BasesMaster_1 = require("./BasesMaster");
var PigmentSet_1 = require("./PigmentSet");
var ShadePasting = /** @class */ (function () {
    function ShadePasting() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], ShadePasting.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendor_id" }),
        __metadata("design:type", String)
    ], ShadePasting.prototype, "vendorId", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_id" }),
        __metadata("design:type", String)
    ], ShadePasting.prototype, "productId", void 0);
    __decorate([
        typeorm_1.Column({ name: "base_id" }),
        __metadata("design:type", String)
    ], ShadePasting.prototype, "baseId", void 0);
    __decorate([
        typeorm_1.Column({ name: "pigment_set_id" }),
        __metadata("design:type", String)
    ], ShadePasting.prototype, "pgSetId", void 0);
    __decorate([
        typeorm_1.Column({ name: "unit" }),
        __metadata("design:type", Number)
    ], ShadePasting.prototype, "unit", void 0);
    __decorate([
        typeorm_1.Column({ name: "colorant" }),
        __metadata("design:type", String)
    ], ShadePasting.prototype, "colorant", void 0);
    __decorate([
        typeorm_1.Column({ name: "shots" }),
        __metadata("design:type", String)
    ], ShadePasting.prototype, "shots", void 0);
    __decorate([
        typeorm_1.Column({ name: "price" }),
        __metadata("design:type", Number)
    ], ShadePasting.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], ShadePasting.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_on" }),
        __metadata("design:type", Date)
    ], ShadePasting.prototype, "createdOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_by" }),
        __metadata("design:type", String)
    ], ShadePasting.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], ShadePasting.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], ShadePasting.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_on" }),
        __metadata("design:type", Date)
    ], ShadePasting.prototype, "deletedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_by" }),
        __metadata("design:type", String)
    ], ShadePasting.prototype, "deletedBy", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "vendor_id" }),
        typeorm_1.ManyToOne(function (type) { return Vendor_1.Vendor; }),
        __metadata("design:type", Vendor_1.Vendor)
    ], ShadePasting.prototype, "vendor", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "product_id" }),
        typeorm_1.ManyToOne(function (type) { return ProductMaster_1.ProductMaster; }),
        __metadata("design:type", ProductMaster_1.ProductMaster)
    ], ShadePasting.prototype, "product", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "base_id" }),
        typeorm_1.ManyToOne(function (type) { return BasesMaster_1.BasesMaster; }),
        __metadata("design:type", BasesMaster_1.BasesMaster)
    ], ShadePasting.prototype, "base", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "pigment_set_id" }),
        typeorm_1.ManyToOne(function (type) { return PigmentSet_1.PigmentSet; }, function (ps) { return ps.id; }),
        __metadata("design:type", PigmentSet_1.PigmentSet)
    ], ShadePasting.prototype, "pigmentSet", void 0);
    ShadePasting = __decorate([
        typeorm_1.Entity('shade_pasting')
    ], ShadePasting);
    return ShadePasting;
}());
exports.ShadePasting = ShadePasting;
