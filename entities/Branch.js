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
var Address_1 = require("./Address");
var Branch = /** @class */ (function () {
    function Branch() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Branch.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Branch.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_code" }),
        __metadata("design:type", String)
    ], Branch.prototype, "countryCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "phone" }),
        __metadata("design:type", String)
    ], Branch.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column({ name: "mobile" }),
        __metadata("design:type", String)
    ], Branch.prototype, "mobile", void 0);
    __decorate([
        typeorm_1.Column({ name: "email" }),
        __metadata("design:type", String)
    ], Branch.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ name: "pan" }),
        __metadata("design:type", String)
    ], Branch.prototype, "pan", void 0);
    __decorate([
        typeorm_1.Column({ name: "tan" }),
        __metadata("design:type", String)
    ], Branch.prototype, "tan", void 0);
    __decorate([
        typeorm_1.Column({ name: "gstin" }),
        __metadata("design:type", String)
    ], Branch.prototype, "gstin", void 0);
    __decorate([
        typeorm_1.Column({ name: "lat" }),
        __metadata("design:type", String)
    ], Branch.prototype, "lat", void 0);
    __decorate([
        typeorm_1.Column({ name: "lng" }),
        __metadata("design:type", String)
    ], Branch.prototype, "lng", void 0);
    __decorate([
        typeorm_1.Column({ name: "is_main" }),
        __metadata("design:type", Boolean)
    ], Branch.prototype, "isMain", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], Branch.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", String)
    ], Branch.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], Branch.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], Branch.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "address_id" }),
        typeorm_1.ManyToOne(function (type) { return Address_1.Address; }),
        __metadata("design:type", Address_1.Address)
    ], Branch.prototype, "address", void 0);
    Branch = __decorate([
        typeorm_1.Entity("branch")
    ], Branch);
    return Branch;
}());
exports.Branch = Branch;
