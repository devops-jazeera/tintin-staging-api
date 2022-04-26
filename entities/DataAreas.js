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
var DataAreas = /** @class */ (function () {
    function DataAreas() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], DataAreas.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_code" }),
        __metadata("design:type", String)
    ], DataAreas.prototype, "country_code", void 0);
    __decorate([
        typeorm_1.Column({ name: "route_en" }),
        __metadata("design:type", String)
    ], DataAreas.prototype, "route_en", void 0);
    __decorate([
        typeorm_1.Column({ name: "route_ar" }),
        __metadata("design:type", String)
    ], DataAreas.prototype, "route_ar", void 0);
    __decorate([
        typeorm_1.Column({ name: "currency_en" }),
        __metadata("design:type", String)
    ], DataAreas.prototype, "currency_en", void 0);
    __decorate([
        typeorm_1.Column({ name: "currency_ar" }),
        __metadata("design:type", String)
    ], DataAreas.prototype, "currency_ar", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_id" }),
        __metadata("design:type", String)
    ], DataAreas.prototype, "country_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], DataAreas.prototype, "inserted_at", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], DataAreas.prototype, "updated_at", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_en" }),
        __metadata("design:type", String)
    ], DataAreas.prototype, "name_en", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], DataAreas.prototype, "name_ar", void 0);
    DataAreas = __decorate([
        typeorm_1.Entity("data_areas")
    ], DataAreas);
    return DataAreas;
}());
exports.DataAreas = DataAreas;
