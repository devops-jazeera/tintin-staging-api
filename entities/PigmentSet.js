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
var Pigment_1 = require("./Pigment");
var PigmentSet = /** @class */ (function () {
    function PigmentSet() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], PigmentSet.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], PigmentSet.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], PigmentSet.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "code" }),
        __metadata("design:type", String)
    ], PigmentSet.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], PigmentSet.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", String)
    ], PigmentSet.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], PigmentSet.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], PigmentSet.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Pigment_1.Pigment; }, function (pigment) { return pigment.pigmentSet; }),
        __metadata("design:type", Array)
    ], PigmentSet.prototype, "pigments", void 0);
    PigmentSet = __decorate([
        typeorm_1.Entity("pigment_set")
    ], PigmentSet);
    return PigmentSet;
}());
exports.PigmentSet = PigmentSet;
