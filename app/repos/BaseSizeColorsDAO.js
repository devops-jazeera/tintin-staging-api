"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var typeorm_1 = require("typeorm");
var BaseSizeColors_1 = require("../../entities/BaseSizeColors");
var BasesMaster_1 = require("../../entities/BasesMaster");
var ColorMaster_1 = require("../../entities/ColorMaster");
var DatabaseMaster_1 = require("../../entities/DatabaseMaster");
var BaseSizeColorsDAO = /** @class */ (function () {
    function BaseSizeColorsDAO() {
        this.dao = typeorm_1.getRepository(BaseSizeColors_1.BaseSizeColors);
        this.dbMaster = typeorm_1.getRepository(DatabaseMaster_1.DatabaseMaster);
        this.colordao = typeorm_1.getRepository(ColorMaster_1.ColorMaster);
        this.basedao = typeorm_1.getRepository(BasesMaster_1.BasesMaster);
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
    BaseSizeColorsDAO.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 11, , 12]);
                        if (!(data.color && data.color.id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.colordao.save(data.color)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        delete data.color;
                        _a.label = 3;
                    case 3:
                        if (!(data.base && data.base.id)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.basedao.save(data.base)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        delete data.base;
                        _a.label = 6;
                    case 6:
                        if (!(data.dbMaster && data.dbMaster.id)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.dbMaster.save(data.dbMaster)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        delete data.dbMaster;
                        _a.label = 9;
                    case 9: return [4 /*yield*/, this.dao.save(data)];
                    case 10:
                        _a.sent();
                        return [3 /*break*/, 12];
                    case 11:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
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
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.delete(data)];
                    case 1: return [2 /*return*/, _a.sent()];
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
