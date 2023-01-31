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
exports.Pigment = void 0;
var typeorm_1 = require("typeorm");
var PigmentSet_1 = require("./PigmentSet");
var Pigment = /** @class */ (function () {
    function Pigment() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], Pigment.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name" }),
        __metadata("design:type", String)
    ], Pigment.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name_ar" }),
        __metadata("design:type", String)
    ], Pigment.prototype, "name_ar", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "code" }),
        __metadata("design:type", String)
    ], Pigment.prototype, "code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "hex" }),
        __metadata("design:type", String)
    ], Pigment.prototype, "hex", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "vid" }),
        __metadata("design:type", String)
    ], Pigment.prototype, "vid", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "cpr" }),
        __metadata("design:type", Number)
    ], Pigment.prototype, "cpr", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "active" }),
        __metadata("design:type", Boolean)
    ], Pigment.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_by" }),
        __metadata("design:type", String)
    ], Pigment.prototype, "updated_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], Pigment.prototype, "updated_on", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "pigment_set_id" }),
        __metadata("design:type", String)
    ], Pigment.prototype, "pigment_set_id", void 0);
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: "pigment_set_id" }),
        (0, typeorm_1.ManyToOne)(function (type) { return PigmentSet_1.PigmentSet; }),
        __metadata("design:type", PigmentSet_1.PigmentSet)
    ], Pigment.prototype, "pigmentSet", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "specific_gravity" }),
        __metadata("design:type", Number)
    ], Pigment.prototype, "specific_gravity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "circuit" }),
        __metadata("design:type", String)
    ], Pigment.prototype, "circuit", void 0);
    Pigment = __decorate([
        (0, typeorm_1.Entity)("pigment")
    ], Pigment);
    return Pigment;
}());
exports.Pigment = Pigment;
