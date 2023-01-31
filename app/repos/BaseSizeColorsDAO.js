"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSizeColorsDAO = void 0;
var typeorm_1 = require("typeorm");
var BaseSizeColors_1 = require("../../entities/BaseSizeColors");
var BaseSizeColorsCopy_1 = require("../../entities/BaseSizeColorsCopy");
var BasesMaster_1 = require("../../entities/BasesMaster");
var ColorMaster_1 = require("../../entities/ColorMaster");
var DatabaseMaster_1 = require("../../entities/DatabaseMaster");
var BaseSizeColorsDAO = /** @class */ (function () {
    function BaseSizeColorsDAO() {
        this.dao = (0, typeorm_1.getRepository)(BaseSizeColors_1.BaseSizeColors);
        this.daoCopy = (0, typeorm_1.getRepository)(BaseSizeColorsCopy_1.BaseSizeColorsCopy);
        this.dbMaster = (0, typeorm_1.getRepository)(DatabaseMaster_1.DatabaseMaster);
        this.colordao = (0, typeorm_1.getRepository)(ColorMaster_1.ColorMaster);
        this.basedao = (0, typeorm_1.getRepository)(BasesMaster_1.BasesMaster);
    }
    BaseSizeColorsDAO.prototype.search = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao
                            .createQueryBuilder("baseSizeColors")
                            .where(data)
                            .orderBy("baseSizeColors.id", "ASC")
                            .getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // async save(data: any) {
    //   return await this.dao.save(data);
    // }
    // async save(data: any) {
    //   try{
    //     if(data.color && data.color.id){
    //      await this.colordao.save(data.color)
    //     }else{
    //       delete data.color
    //     }
    //     if(data.base && data.base.id){
    //      await this.basedao.save(data.base)
    //     }else{
    //       delete data.base
    //     }
    //     if(data.dbMaster && data.dbMaster.id){
    //      await this.dbMaster.save(data.dbMaster)
    //     }else{
    //       delete data.dbMaster
    //     }
    //     await this.dao.save(data);
    //   }catch(err){
    //     console.log(err);
    //   }
    // }
    BaseSizeColorsDAO.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var keys, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(data.length > 0)) return [3 /*break*/, 4];
                        keys = Object.keys(data[0]);
                        if (!keys.includes('colorId')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dao.save(data)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.daoCopy.save(data)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BaseSizeColorsDAO.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne(id, {
                            join: {
                                alias: "baseSizeColors",
                                innerJoinAndSelect: {},
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseSizeColorsDAO.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("DELETE");
                        return [4 /*yield*/, data.map(function (v) { return v.id; })];
                    case 1:
                        ids = _a.sent();
                        return [4 /*yield*/, this.dao.delete({ id: (0, typeorm_1.In)(ids) })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseSizeColorsDAO.prototype.findOne = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne(data, {
                            join: {
                                alias: "baseSizeColors",
                                innerJoinAndSelect: {},
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return BaseSizeColorsDAO;
}());
exports.BaseSizeColorsDAO = BaseSizeColorsDAO;
Object.seal(BaseSizeColors_1.BaseSizeColors);
