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
var AreaMaster_1 = require("./AreaMaster");
var CountryMaster = /** @class */ (function () {
    function CountryMaster() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], CountryMaster.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_code" }),
        __metadata("design:type", String)
    ], CountryMaster.prototype, "countryCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_en" }),
        __metadata("design:type", String)
    ], CountryMaster.prototype, "nameEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], CountryMaster.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], CountryMaster.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], CountryMaster.prototype, "insertedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], CountryMaster.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return AreaMaster_1.AreaMaster; }, function (area) { return area.countryMaster; }),
        __metadata("design:type", AreaMaster_1.AreaMaster)
    ], CountryMaster.prototype, "areaCountryMaster", void 0);
    CountryMaster = __decorate([
        typeorm_1.Entity("country_master")
    ], CountryMaster);
    return CountryMaster;
}());
exports.CountryMaster = CountryMaster;
