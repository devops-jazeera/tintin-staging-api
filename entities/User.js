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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: "id" }),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "name" }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "email" }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "country_code" }),
        __metadata("design:type", String)
    ], User.prototype, "country_code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "mobile" }),
        __metadata("design:type", String)
    ], User.prototype, "mobile", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "password" }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "role" }),
        __metadata("design:type", String)
    ], User.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "active" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "active", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "token" }),
        __metadata("design:type", String)
    ], User.prototype, "token", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "status" }),
        __metadata("design:type", String)
    ], User.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "vid" }),
        __metadata("design:type", String)
    ], User.prototype, "vid", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "created_by" }),
        __metadata("design:type", String)
    ], User.prototype, "created_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "created_on" }),
        __metadata("design:type", Date)
    ], User.prototype, "created_on", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_by" }),
        __metadata("design:type", String)
    ], User.prototype, "updated_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], User.prototype, "updated_on", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)("profile")
    ], User);
    return User;
}());
exports.User = User;
