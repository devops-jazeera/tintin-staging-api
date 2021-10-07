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
var SmtpConfig = /** @class */ (function () {
    function SmtpConfig() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], SmtpConfig.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "type" }),
        __metadata("design:type", String)
    ], SmtpConfig.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "email" }),
        __metadata("design:type", String)
    ], SmtpConfig.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ name: "data", type: "json" }),
        __metadata("design:type", Object)
    ], SmtpConfig.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column({ name: "compcode" }),
        __metadata("design:type", String)
    ], SmtpConfig.prototype, "compcode", void 0);
    __decorate([
        typeorm_1.Column({ name: "validated" }),
        __metadata("design:type", Number)
    ], SmtpConfig.prototype, "validated", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], SmtpConfig.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], SmtpConfig.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], SmtpConfig.prototype, "active", void 0);
    SmtpConfig = __decorate([
        typeorm_1.Entity("config")
    ], SmtpConfig);
    return SmtpConfig;
}());
exports.SmtpConfig = SmtpConfig;
