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
var Address = /** @class */ (function () {
    function Address() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Address.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "lane" }),
        __metadata("design:type", String)
    ], Address.prototype, "lane", void 0);
    __decorate([
        typeorm_1.Column({ name: "land_mark" }),
        __metadata("design:type", String)
    ], Address.prototype, "landMark", void 0);
    __decorate([
        typeorm_1.Column({ name: "city" }),
        __metadata("design:type", String)
    ], Address.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column({ name: "state" }),
        __metadata("design:type", String)
    ], Address.prototype, "state", void 0);
    __decorate([
        typeorm_1.Column({ name: "country" }),
        __metadata("design:type", String)
    ], Address.prototype, "country", void 0);
    __decorate([
        typeorm_1.Column({ name: "zip_code" }),
        __metadata("design:type", Number)
    ], Address.prototype, "zipCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "lng" }),
        __metadata("design:type", String)
    ], Address.prototype, "lng", void 0);
    __decorate([
        typeorm_1.Column({ name: "lat" }),
        __metadata("design:type", String)
    ], Address.prototype, "lat", void 0);
    __decorate([
        typeorm_1.Column({ name: "isd" }),
        __metadata("design:type", String)
    ], Address.prototype, "countryCode", void 0);
    Address = __decorate([
        typeorm_1.Entity("address")
    ], Address);
    return Address;
}());
exports.Address = Address;
