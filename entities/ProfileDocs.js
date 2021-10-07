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
var Profile_1 = require("./Profile");
var FileData_1 = require("./FileData");
var Address_1 = require("./Address");
var Branch_1 = require("./Branch");
var ProfileDocs = /** @class */ (function () {
    function ProfileDocs() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], ProfileDocs.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "title" }),
        __metadata("design:type", String)
    ], ProfileDocs.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({ name: "first_name" }),
        __metadata("design:type", String)
    ], ProfileDocs.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column({ name: "last_name" }),
        __metadata("design:type", String)
    ], ProfileDocs.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column({ name: "doc_type" }),
        __metadata("design:type", String)
    ], ProfileDocs.prototype, "docType", void 0);
    __decorate([
        typeorm_1.Column({ name: "doc_number" }),
        __metadata("design:type", String)
    ], ProfileDocs.prototype, "docNumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "exp_date" }),
        __metadata("design:type", Date)
    ], ProfileDocs.prototype, "expDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "dob" }),
        __metadata("design:type", Date)
    ], ProfileDocs.prototype, "dob", void 0);
    __decorate([
        typeorm_1.Column({ name: "gender" }),
        __metadata("design:type", String)
    ], ProfileDocs.prototype, "gender", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], ProfileDocs.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], ProfileDocs.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "profile_id" }),
        typeorm_1.ManyToOne(function (type) { return Profile_1.Profile; }),
        __metadata("design:type", Profile_1.Profile)
    ], ProfileDocs.prototype, "profile", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "doc_file_id" }),
        typeorm_1.ManyToOne(function (type) { return FileData_1.FileData; }),
        __metadata("design:type", FileData_1.FileData)
    ], ProfileDocs.prototype, "docFile", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "address_id" }),
        typeorm_1.ManyToOne(function (type) { return Address_1.Address; }),
        __metadata("design:type", Address_1.Address)
    ], ProfileDocs.prototype, "address", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "img_file_id" }),
        typeorm_1.ManyToOne(function (type) { return FileData_1.FileData; }),
        __metadata("design:type", FileData_1.FileData)
    ], ProfileDocs.prototype, "imgFile", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "branch_id" }),
        typeorm_1.ManyToOne(function (type) { return Branch_1.Branch; }),
        __metadata("design:type", Branch_1.Branch)
    ], ProfileDocs.prototype, "branch", void 0);
    ProfileDocs = __decorate([
        typeorm_1.Entity("profile_docs")
    ], ProfileDocs);
    return ProfileDocs;
}());
exports.ProfileDocs = ProfileDocs;
