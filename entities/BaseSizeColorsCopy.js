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
var BaseSizeColorsCopy = /** @class */ (function () {
    function BaseSizeColorsCopy() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "color_id", nullable: true }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "color_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_id" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "product_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_code" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "product_code", void 0);
    __decorate([
        typeorm_1.Column({ name: "base_code" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "base_code", void 0);
    __decorate([
        typeorm_1.Column({ name: "base_color" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "base_color", void 0);
    __decorate([
        typeorm_1.Column({ name: "color_code" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "color_code", void 0);
    __decorate([
        typeorm_1.Column({ name: "size_code" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "size_code", void 0);
    __decorate([
        typeorm_1.Column({ name: "base_price" }),
        __metadata("design:type", Number)
    ], BaseSizeColorsCopy.prototype, "base_price", void 0);
    __decorate([
        typeorm_1.Column({ name: "catalogue_code" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "catalogue_code", void 0);
    __decorate([
        typeorm_1.Column({ name: "colarant_price" }),
        __metadata("design:type", Number)
    ], BaseSizeColorsCopy.prototype, "colarant_price", void 0);
    __decorate([
        typeorm_1.Column({ name: "c1" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "c1", void 0);
    __decorate([
        typeorm_1.Column({ name: "q1" }),
        __metadata("design:type", Number)
    ], BaseSizeColorsCopy.prototype, "q1", void 0);
    __decorate([
        typeorm_1.Column({ name: "c2" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "c2", void 0);
    __decorate([
        typeorm_1.Column({ name: "q2" }),
        __metadata("design:type", Number)
    ], BaseSizeColorsCopy.prototype, "q2", void 0);
    __decorate([
        typeorm_1.Column({ name: "c3" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "c3", void 0);
    __decorate([
        typeorm_1.Column({ name: "q3" }),
        __metadata("design:type", Number)
    ], BaseSizeColorsCopy.prototype, "q3", void 0);
    __decorate([
        typeorm_1.Column({ name: "c4" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "c4", void 0);
    __decorate([
        typeorm_1.Column({ name: "q4" }),
        __metadata("design:type", Number)
    ], BaseSizeColorsCopy.prototype, "q4", void 0);
    __decorate([
        typeorm_1.Column({ name: "c5" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "c5", void 0);
    __decorate([
        typeorm_1.Column({ name: "q5" }),
        __metadata("design:type", Number)
    ], BaseSizeColorsCopy.prototype, "q5", void 0);
    __decorate([
        typeorm_1.Column({ name: "c6" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "c6", void 0);
    __decorate([
        typeorm_1.Column({ name: "q6" }),
        __metadata("design:type", Number)
    ], BaseSizeColorsCopy.prototype, "q6", void 0);
    __decorate([
        typeorm_1.Column({ name: "can" }),
        __metadata("design:type", Number)
    ], BaseSizeColorsCopy.prototype, "can", void 0);
    __decorate([
        typeorm_1.Column({ name: "system_code" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "system_code", void 0);
    __decorate([
        typeorm_1.Column({ name: "shot_to_ml_formula" }),
        __metadata("design:type", Number)
    ], BaseSizeColorsCopy.prototype, "shot_to_ml_formula", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], BaseSizeColorsCopy.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "updated_by", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], BaseSizeColorsCopy.prototype, "updated_at", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], BaseSizeColorsCopy.prototype, "inserted_at", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_at" }),
        __metadata("design:type", Date)
    ], BaseSizeColorsCopy.prototype, "deleted_at", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", String)
    ], BaseSizeColorsCopy.prototype, "vid", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "color_code", referencedColumnName: "code" }),
        typeorm_1.ManyToOne(function (type) { return ColorMaster_1.ColorMaster; }, function (color) { return color.code; }),
        __metadata("design:type", ColorMaster_1.ColorMaster)
    ], BaseSizeColorsCopy.prototype, "color", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "base_code", referencedColumnName: "code" }),
        typeorm_1.ManyToOne(function (type) { return BasesMaster_1.BasesMaster; }, function (base) { return base.code; }),
        __metadata("design:type", BasesMaster_1.BasesMaster)
    ], BaseSizeColorsCopy.prototype, "base", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "system_code", referencedColumnName: "system_code" }),
        typeorm_1.ManyToOne(function (type) { return DatabaseMaster_1.DatabaseMaster; }, function (db) { return db.system_code; }),
        __metadata("design:type", DatabaseMaster_1.DatabaseMaster)
    ], BaseSizeColorsCopy.prototype, "dbMaster", void 0);
    BaseSizeColorsCopy = __decorate([
        typeorm_1.Entity("base_size_colors")
    ], BaseSizeColorsCopy);
    return BaseSizeColorsCopy;
}());
exports.BaseSizeColorsCopy = BaseSizeColorsCopy;
