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
var Stores = /** @class */ (function () {
    function Stores() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Stores.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Stores.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], Stores.prototype, "name_ar", void 0);
    __decorate([
        typeorm_1.Column({ name: "lng" }),
        __metadata("design:type", String)
    ], Stores.prototype, "lng", void 0);
    __decorate([
        typeorm_1.Column({ name: "lat" }),
        __metadata("design:type", String)
    ], Stores.prototype, "lat", void 0);
    __decorate([
        typeorm_1.Column({ name: "code" }),
        __metadata("design:type", String)
    ], Stores.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({ name: "email" }),
        __metadata("design:type", String)
    ], Stores.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_code" }),
        __metadata("design:type", String)
    ], Stores.prototype, "country_code", void 0);
    __decorate([
        typeorm_1.Column({ name: "phone" }),
        __metadata("design:type", String)
    ], Stores.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], Stores.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_by" }),
        __metadata("design:type", String)
    ], Stores.prototype, "created_by", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_on" }),
        __metadata("design:type", Date)
    ], Stores.prototype, "created_on", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], Stores.prototype, "updated_by", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], Stores.prototype, "updated_on", void 0);
    __decorate([
        typeorm_1.Column({ name: "dealer_id" }),
        __metadata("design:type", String)
    ], Stores.prototype, "dealer_id", void 0);
    __decorate([
        typeorm_1.Column({ name: "address_id" }),
        __metadata("design:type", String)
    ], Stores.prototype, "address_id", void 0);
    Stores = __decorate([
        typeorm_1.Entity("stores")
    ], Stores);
    return Stores;
}());
exports.Stores = Stores;
