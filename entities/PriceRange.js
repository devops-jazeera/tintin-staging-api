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
var PriceRange = /** @class */ (function () {
    function PriceRange() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", String)
    ], PriceRange.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "from" }),
        __metadata("design:type", Number)
    ], PriceRange.prototype, "from", void 0);
    __decorate([
        typeorm_1.Column({ name: "to" }),
        __metadata("design:type", Number)
    ], PriceRange.prototype, "to", void 0);
    __decorate([
        typeorm_1.Column({ name: "amount" }),
        __metadata("design:type", Number)
    ], PriceRange.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", Number)
    ], PriceRange.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], PriceRange.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_by" }),
        __metadata("design:type", String)
    ], PriceRange.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "modified_by" }),
        __metadata("design:type", String)
    ], PriceRange.prototype, "modifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_on" }),
        __metadata("design:type", String)
    ], PriceRange.prototype, "createdOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "modified_on" }),
        __metadata("design:type", String)
    ], PriceRange.prototype, "modifiedOn", void 0);
    PriceRange = __decorate([
        typeorm_1.Entity("price_range")
    ], PriceRange);
    return PriceRange;
}());
exports.PriceRange = PriceRange;
