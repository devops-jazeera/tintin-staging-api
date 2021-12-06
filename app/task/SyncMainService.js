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
var SyncMasterLogsServices_1 = require("./SyncMasterLogsServices");
var Config = __importStar(require("../../utils/Config"));
var SyncTransactionsServices_1 = require("./SyncTransactionsServices");
var axios = require("axios");
var dns = require("dns").promises;
var cron = require("node-cron");
var cmd = require("node-cmd");
var Log_1 = require("../../utils/Log");
var Log_2 = require("../../utils/Log");
var KafkaService_1 = require("../kafka/KafkaService");
var SyncMainService = /** @class */ (function () {
    function SyncMainService() {
        this.isSyncProceed = false;
        this.isTranscationProceed = false;
        Config.setSyncUrl();
        this.url = Config.getSyncUrl().url;
        this.checkProcessRunning();
        this.syncManagerLogs = new SyncMasterLogsServices_1.SyncMasterLogsServices();
        this.syncTransactionsServices = new SyncTransactionsServices_1.SyncTransactionsServices();
        this.kafkaService = new KafkaService_1.KafkaService();
        this.kafkaService.clientId = process.env.TINTING_STORE_ID;
        this.subscribe();
    }
    SyncMainService.prototype.checkProcessRunning = function () {
        var _this = this;
        cron.schedule("*/11 * * * * *", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                Log_2.transaction.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ cron is running::::::::isTranscationProceed = " + this.isSyncProceed + " $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                // if (!this.isSyncProceed) {
                //   this.isSyncProceed = !this.isSyncProceed;
                //   this.runSync();
                // }
                if (!this.isTranscationProceed) {
                    this.isTranscationProceed = !this.isTranscationProceed;
                    this.runTransSync();
                }
                return [2 /*return*/];
            });
        }); });
    };
    SyncMainService.prototype.runSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isSyncProceed) return [3 /*break*/, 8];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        Log_1.master.info("(((((((((( SYNC START ))))))))))");
                        return [4 /*yield*/, this.checkInternet()];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.syncManagerLogs.executeSync()];
                    case 3:
                        data = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        Log_1.master.info(">>>>>>>>>>>>>>>>> No Internet connection <<<<<<<<<<<<<<<<<<<<");
                        _a.label = 5;
                    case 5:
                        Log_1.master.info("(((((((((( SYNC CLOSED ))))))))))");
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        // count = 1
                        this.isSyncProceed = false;
                        Log_1.master.error("--------- MASTER ERROR ---------");
                        Log_1.master.debug(error_1);
                        Log_1.master.error("--------- MASTER ERROR ---------");
                        return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 0];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SyncMainService.prototype.runTransSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var transactionalData, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isTranscationProceed) return [3 /*break*/, 12];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 10, , 11]);
                        Log_2.transaction.debug("(((((((((( SYNC START ))))))))))");
                        return [4 /*yield*/, this.checkInternet()];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.syncTransactionsServices.getTransData('dispense_log')];
                    case 3:
                        transactionalData = _a.sent();
                        if (!(transactionalData.length > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.kafkaService.publisher({
                                topic: 'dispense_log',
                                acks: 1,
                                messages: [{ value: transactionalData }]
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.updateLastSynced()];
                    case 5:
                        _a.sent();
                        transactionalData.map(function (v) {
                            v.syncstatus = 1;
                        });
                        return [4 /*yield*/, this.syncTransactionsServices.saveData('dispense_log', { savedIds: transactionalData })];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        Log_2.transaction.info(">>>>>>>>>>>>>>>>> No Internet connection <<<<<<<<<<<<<<<<<<<<");
                        _a.label = 9;
                    case 9:
                        Log_2.transaction.debug("(((((((((( SYNC CLOSED ))))))))))");
                        return [3 /*break*/, 11];
                    case 10:
                        error_2 = _a.sent();
                        // count = 1
                        this.isTranscationProceed = false;
                        Log_2.transaction.error("--------- TRANSACTION ERROR ---------");
                        Log_2.transaction.debug(error_2);
                        Log_2.transaction.error("--------- TRANSACTION ERROR ---------");
                        return [3 /*break*/, 11];
                    case 11: return [3 /*break*/, 0];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    // async subscribe(){
    //   try{
    //     let topic = process.env.TINTING_STORE_ID
    //     const consumer = await this.kafkaService.subscriber(topic)
    //     consumer.run({
    //       eachMessage: async (message:any ) => {
    //         log.info("$$$$$$$$$$$$$$$$$$$$$$$$ MASTER DATA $$$$$$$$$$$$$$$$$$$$$$$$")
    //         log.info(message.message.value)
    //         log.info("$$$$$$$$$$$$$$$$$$$$$$$$ MASTER DATA $$$$$$$$$$$$$$$$$$$$$$$$")
    //         let data:any = JSON.parse(message.message.value)
    //         console.log(data)
    //          await this.syncManagerLogs.saveData(data, [], log)
    //         //  await this.updateLastSynced({})
    //          log.info("$$$$$$$$$$$$$$$$$$$$$$$$  DATA SAVED $$$$$$$$$$$$$$$$$$$$$$$$")
    //          let reqData = {
    //               id:data.id,
    //               parkTableId: data.parkedId,
    //               storeId: process.env.TINTING_STORE_ID
    //           }
    //           log.info(reqData)
    //           await this.kafkaService.publisher({
    //             topic: 'synced_data',
    //             acks: 1,
    //             messages:[{
    //               value: reqData
    //             }]
    //           })
    //       },
    //   })
    //   }catch(err) {
    //     setTimeout(()=> {this.subscribe()} , 3000);
    //     log.info("$$$$$$$$$$$$$$$$$$$$$$$$ MASTER DATA  ERROR $$$$$$$$$$$$$$$$$$$$$$$$")
    //     log.info(err)
    //     log.info("$$$$$$$$$$$$$$$$$$$$$$$$ MASTER DATA  ERROR $$$$$$$$$$$$$$$$$$$$$$$$")
    //     log.error(err)
    //   }
    // }
    SyncMainService.prototype.subscribe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var topic, consumer, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        topic = process.env.TINTING_STORE_ID;
                        return [4 /*yield*/, this.kafkaService.subscriber(topic)];
                    case 1:
                        consumer = _a.sent();
                        consumer.run({
                            eachBatchAutoResolve: false,
                            eachBatch: function (_a) {
                                var batch = _a.batch, resolveOffset = _a.resolveOffset;
                                return __awaiter(_this, void 0, void 0, function () {
                                    var messages, _i, _b, message, data, groupData, _c, groupData_1, table_data, reqData, messageData, err_2;
                                    return __generator(this, function (_d) {
                                        switch (_d.label) {
                                            case 0:
                                                messages = [];
                                                _i = 0, _b = batch.messages;
                                                _d.label = 1;
                                            case 1:
                                                if (!(_i < _b.length)) return [3 /*break*/, 10];
                                                message = _b[_i];
                                                Log_1.master.info("$$$$$$$$$$$$$$$$$$$$$$$$ MASTER DATA $$$$$$$$$$$$$$$$$$$$$$$$");
                                                data = JSON.parse(message.value);
                                                Log_1.master.info(data.length);
                                                Log_1.master.info("$$$$$$$$$$$$$$$$$$$$$$$$ MASTER DATA $$$$$$$$$$$$$$$$$$$$$$$$");
                                                return [4 /*yield*/, this.groupBy(data, function (item) {
                                                        return [item.tableName];
                                                    })];
                                            case 2:
                                                groupData = _d.sent();
                                                Log_1.master.info(JSON.stringify(groupData[0][0].tableName));
                                                _c = 0, groupData_1 = groupData;
                                                _d.label = 3;
                                            case 3:
                                                if (!(_c < groupData_1.length)) return [3 /*break*/, 8];
                                                table_data = groupData_1[_c];
                                                reqData = {
                                                    tableName: table_data[0].tableName,
                                                    operation: table_data[0].operation,
                                                    data: table_data.map(function (v) { return v.data; })
                                                };
                                                messageData = table_data.map(function (v) {
                                                    return {
                                                        id: v.id,
                                                        parkTableId: v.parkedId,
                                                        storeId: process.env.TINTING_STORE_ID
                                                    };
                                                });
                                                // log.info(JSON.stringify(messageData))
                                                messages.push.apply(messages, messageData);
                                                _d.label = 4;
                                            case 4:
                                                _d.trys.push([4, 6, , 7]);
                                                return [4 /*yield*/, this.syncManagerLogs.saveData(reqData, [], Log_1.master)];
                                            case 5:
                                                _d.sent();
                                                return [3 /*break*/, 7];
                                            case 6:
                                                err_2 = _d.sent();
                                                throw err_2;
                                            case 7:
                                                _c++;
                                                return [3 /*break*/, 3];
                                            case 8:
                                                //  await this.updateLastSynced({})
                                                Log_1.master.info("$$$$$$$$$$$$$$$$$$$$$$$$  DATA SAVED $$$$$$$$$$$$$$$$$$$$$$$$");
                                                resolveOffset(message.offset);
                                                _d.label = 9;
                                            case 9:
                                                _i++;
                                                return [3 /*break*/, 1];
                                            case 10:
                                                Log_1.master.info("$$$$$$$$$$$$$$$$$$$$$$$$  PUBLISHING SAVED DATA $$$$$$$$$$$$$$$$$$$$$$$$");
                                                return [4 /*yield*/, this.kafkaService.publisher({
                                                        topic: 'synced_data',
                                                        acks: 1,
                                                        messages: [{
                                                                value: JSON.stringify(messages)
                                                            }]
                                                    })];
                                            case 11:
                                                _d.sent();
                                                return [4 /*yield*/, this.updateLastSynced()];
                                            case 12:
                                                _d.sent();
                                                Log_1.master.info("$$$$$$$$$$$$$$$$$$$$$$$$  PUBLISHED SAVED DATA $$$$$$$$$$$$$$$$$$$$$$$$");
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.subscribe()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        }); }); }, 3000);
                        Log_1.master.info("$$$$$$$$$$$$$$$$$$$$$$$$ MASTER DATA  ERROR $$$$$$$$$$$$$$$$$$$$$$$$");
                        Log_1.master.info(err_1);
                        Log_1.master.info("$$$$$$$$$$$$$$$$$$$$$$$$ MASTER DATA  ERROR $$$$$$$$$$$$$$$$$$$$$$$$");
                        Log_1.master.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SyncMainService.prototype.checkInternet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, dns
                        .lookup("google.com")
                        .then(function () { return true; })
                        .catch(function () { return false; })];
            });
        });
    };
    SyncMainService.prototype.updateLastSynced = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.kafkaService.publisher({
                                topic: 'last_sync_update',
                                acks: 1,
                                messages: [{
                                        value: JSON.stringify({
                                            id: process.env.TINTING_STORE_ID
                                        })
                                    }]
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        Log_1.master.error(error_3);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SyncMainService.prototype.callApi = function (url, token, reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_4;
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
                        if (data.error) {
                            throw data.error.message;
                        }
                        else {
                            return [2 /*return*/, data.data];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        Log_1.master.log(error_4);
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SyncMainService.prototype.groupBy = function (array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    };
    return SyncMainService;
}());
exports.SyncMainService = SyncMainService;
