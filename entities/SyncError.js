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
var SyncError = /** @class */ (function () {
    function SyncError() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], SyncError.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "store_id" }),
        __metadata("design:type", String)
    ], SyncError.prototype, "storeId", void 0);
    __decorate([
        typeorm_1.Column({ name: "type" }),
        __metadata("design:type", String)
    ], SyncError.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({ name: "error_msg" }),
        __metadata("design:type", String)
    ], SyncError.prototype, "errorMsg", void 0);
    __decorate([
        typeorm_1.Column({ name: "error_desc" }),
        __metadata("design:type", String)
    ], SyncError.prototype, "errorDesc", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], SyncError.prototype, "updatedOn", void 0);
    SyncError = __decorate([
        typeorm_1.Entity("sync_error")
    ], SyncError);
    return SyncError;
}());
exports.SyncError = SyncError;
