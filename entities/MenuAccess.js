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
var MenuRole_1 = require("./MenuRole");
var MenuLink_1 = require("./MenuLink");
var MenuAccess = /** @class */ (function () {
    function MenuAccess() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], MenuAccess.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "read_access" }),
        __metadata("design:type", Boolean)
    ], MenuAccess.prototype, "readAccess", void 0);
    __decorate([
        typeorm_1.Column({ name: "write_access" }),
        __metadata("design:type", Boolean)
    ], MenuAccess.prototype, "writeAccess", void 0);
    __decorate([
        typeorm_1.Column({ name: "delete_access" }),
        __metadata("design:type", Boolean)
    ], MenuAccess.prototype, "deleteAccess", void 0);
    __decorate([
        typeorm_1.Column({ name: "vid" }),
        __metadata("design:type", String)
    ], MenuAccess.prototype, "vid", void 0);
    __decorate([
        typeorm_1.Column({ name: "priority" }),
        __metadata("design:type", Number)
    ], MenuAccess.prototype, "priority", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], MenuAccess.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], MenuAccess.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "role_id" }),
        typeorm_1.ManyToOne(function (type) { return MenuRole_1.MenuRole; }),
        __metadata("design:type", MenuRole_1.MenuRole)
    ], MenuAccess.prototype, "role", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "link_id" }),
        typeorm_1.ManyToOne(function (type) { return MenuLink_1.MenuLink; }),
        __metadata("design:type", MenuLink_1.MenuLink)
    ], MenuAccess.prototype, "link", void 0);
    MenuAccess = __decorate([
        typeorm_1.Entity("menu_access")
    ], MenuAccess);
    return MenuAccess;
}());
exports.MenuAccess = MenuAccess;
