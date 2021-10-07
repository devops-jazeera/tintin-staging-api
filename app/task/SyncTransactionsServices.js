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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Log_1 = require("./../../utils/Log");
var Config = __importStar(require("../../utils/Config"));
// import { SalesTable } from "../../entities/SalesTable";
// import { SalesLine } from "../../entities/SalesLine";
// import { Workflow } from "../../entities/Workflow";
var axios = require("axios");
var SyncTransactionsServices = /** @class */ (function () {
    function SyncTransactionsServices() {
        Config.setSyncUrl();
        this.url = Config.getSyncUrl().url;
        // this.syncUrl = "http://localhost:5100/api/";
        this.token = Config.getSyncUrl().token;
    }
    SyncTransactionsServices.prototype.executeSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tableData, transData, _i, tableData_1, table, daoObj, data, reqData, url, responseData, _loop_1, this_1, _a, tableData_2, table, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 11, , 12]);
                        tableData = [
                            'dispense_log'
                        ];
                        transData = {};
                        _i = 0, tableData_1 = tableData;
                        _b.label = 1;
                    case 1:
                        if (!(_i < tableData_1.length)) return [3 /*break*/, 5];
                        table = tableData_1[_i];
                        Log_1.transaction.info("*************************************((((((((((Fetch Data for " + table + " )))))))))))))))*********************************************");
                        return [4 /*yield*/, this.getDAOService(table)];
                    case 2:
                        daoObj = _b.sent();
                        Log_1.transaction.info("*****************************DAO " + (daoObj ? "PRESENT" : undefined) + "*****************************");
                        if (!daoObj) return [3 /*break*/, 4];
                        return [4 /*yield*/, daoObj
                                .search({})
                                .then(function (res) {
                                Log_1.transaction.info(res);
                                return res;
                            })
                                .catch(function (rej) {
                                Log_1.transaction.error(rej);
                                return null;
                            })];
                    case 3:
                        data = _b.sent();
                        if (data && data.length > 0) {
                            Log_1.transaction.debug("__________________________GOT DATA for table " + table + " of " + data.length + " records__________________________");
                            transData[table] = data;
                        }
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5:
                        reqData = {
                            data: transData,
                        };
                        if (!(Object.keys(transData).length > 0)) return [3 /*break*/, 10];
                        url = this.url + "transactionaldata" + "/save";
                        return [4 /*yield*/, this.callApi(url, this.token, reqData)];
                    case 6:
                        responseData = _b.sent();
                        Log_1.transaction.debug("^^^^^^^^^^^^^^^^^^^^^^^^^^^^AFTER API CALL transactionaldata/save ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                        // log.debug(JSON.stringify(responseData));
                        console.log(responseData);
                        _loop_1 = function (table) {
                            var resultData, daoObj;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        resultData = responseData[table];
                                        if (!resultData) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this_1.getDAOService(table)];
                                    case 1:
                                        daoObj = _a.sent();
                                        Log_1.transaction.info("Actual data came ::: " + table + " ===> " + resultData.length + " ");
                                        return [4 /*yield*/, daoObj
                                                .save(resultData.savedIds)
                                                .then(function (res) {
                                                Log_1.transaction.info("$$$$$$$$$$$$$$$$$$$$$$$$ synced records " + table + " records " + resultData.savedIds.length + " $$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                                                return res;
                                            })
                                                .catch(function (rej) {
                                                Log_1.transaction.error(rej);
                                                Log_1.transaction.info("$$$$$$$$$$$$$$$$$$$$$$$$ skiped records " + table + " records " + resultData.length + " $$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                                                return null;
                                            })];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a = 0, tableData_2 = tableData;
                        _b.label = 7;
                    case 7:
                        if (!(_a < tableData_2.length)) return [3 /*break*/, 10];
                        table = tableData_2[_a];
                        return [5 /*yield**/, _loop_1(table)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        _a++;
                        return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        e_1 = _b.sent();
                        Log_1.transaction.error(e_1);
                        throw e_1;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    SyncTransactionsServices.prototype.getDAOService = function (tablename) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, e_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        _a = this;
                        if (!this.daoList) return [3 /*break*/, 1];
                        _b = this.daoList;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.importDaos()];
                    case 2:
                        _b = _c.sent();
                        _c.label = 3;
                    case 3:
                        _a.daoList = _b;
                        Log_1.transaction.info("*******************getting dao for " + tablename + "*************************");
                        // console.log(this.daoList[tablename]);
                        return [2 /*return*/, this.daoList[tablename]];
                    case 4:
                        e_2 = _c.sent();
                        Log_1.transaction.error(e_2);
                        throw e_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SyncTransactionsServices.prototype.importDaos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("../../utils/LoadDAO")); })];
                    case 1: return [2 /*return*/, (_a.sent()).DAOList];
                }
            });
        });
    };
    SyncTransactionsServices.prototype.callApi = function (url, token, reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        axios.defaults.headers["Authorization"] = token;
                        axios.defaults.headers["Connection"] = "keep-alive";
                        return [4 /*yield*/, axios.post(url, reqData)];
                    case 1:
                        data = _a.sent();
                        data = data.data;
                        // console.log(data)
                        if (data.error) {
                            throw data.error.message;
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return SyncTransactionsServices;
}());
exports.SyncTransactionsServices = SyncTransactionsServices;
