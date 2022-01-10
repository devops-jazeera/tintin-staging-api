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
var Config_1 = require("../../utils/Config");
var SyncMasterLogsServices_1 = require("../task/SyncMasterLogsServices");
var _a = require("kafkajs"), Kafka = _a.Kafka, logLevel = _a.logLevel;
var KafkaService = /** @class */ (function () {
    function KafkaService() {
        this.syncMasterLogsServices = new SyncMasterLogsServices_1.SyncMasterLogsServices();
        this.kafka = new Kafka({
            logLevel: logLevel.ERROR,
            brokers: Config_1.kafkaOptions.brokers,
            clientId: this.clientId,
        });
        this.producer = this.kafka.producer({
            maxWaitTimeInMs: 3000,
        });
        this.admin = this.kafka.admin();
    }
    KafkaService.prototype.get_topics_list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var topics, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.admin.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.admin.listTopics()];
                    case 2:
                        topics = _a.sent();
                        return [2 /*return*/, topics];
                    case 3:
                        err_1 = _a.sent();
                        throw err_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KafkaService.prototype.publisher = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        reqData.messages.map(function (v) {
                            v.value = JSON.stringify(v.value);
                        });
                        return [4 /*yield*/, this.producer.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.producer.send({
                                topic: reqData.topic,
                                acks: 1,
                                messages: reqData.messages
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { status: 1, message: "Message Sent", data: reqData }];
                    case 3:
                        err_2 = _a.sent();
                        throw err_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KafkaService.prototype.batchPublisher = function (topicMessages) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.producer.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.producer.sendBatch({
                                topicMessages: topicMessages,
                                acks: 1,
                                timeout: 3000
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { status: 1, message: "Message Sent", data: topicMessages }];
                    case 3:
                        err_3 = _a.sent();
                        console.log(err_3);
                        throw err_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KafkaService.prototype.subscriber = function (topics) {
        return __awaiter(this, void 0, void 0, function () {
            var consumer, _i, topics_1, topic;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.kafka.consumer({
                            groupId: Config_1.kafkaOptions.clientId,
                            minBytes: 5,
                            maxBytes: 1e6,
                            maxWaitTimeInMs: 3000,
                        })];
                    case 1:
                        consumer = _a.sent();
                        return [4 /*yield*/, consumer.connect()];
                    case 2:
                        _a.sent();
                        _i = 0, topics_1 = topics;
                        _a.label = 3;
                    case 3:
                        if (!(_i < topics_1.length)) return [3 /*break*/, 6];
                        topic = topics_1[_i];
                        return [4 /*yield*/, consumer.subscribe({ topic: topic, fromBeginning: true })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, consumer];
                }
            });
        });
    };
    return KafkaService;
}());
exports.KafkaService = KafkaService;
