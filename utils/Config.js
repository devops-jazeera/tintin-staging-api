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
exports.getSyncUrl = exports.setMailOptionsData = exports.DbEnvConfig = exports.baseAuth = exports.setSyncUrl = exports.syncConfig = exports.setEnvConfig = exports.kafkaOptions = exports.minioKeys = exports.awsKeys = exports.SMS_NOIFICATION = exports.jwtOtions = exports.mailOptions = exports.syncStageDbOptions = exports.stageDbOptions = exports.dbOptions = void 0;
require("reflect-metadata");
var RawQuery_1 = require("../app/common/RawQuery");
var Log_1 = require("./Log");
// setx/export ENV_JPOS={ "dbHost":"localhost","dbPort":"5432","dbUser":"test_user","dbPassword":"test1234","dbDatabase":"test_db"  }
exports.dbOptions = {
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "tinting_local",
    logging: false,
    synchronize: false,
    entities: [__dirname + "/../entities/**/*{.ts,.js}"],
    connectTimeoutMS: 0,
    extra: {
        max: 25,
        min: 5,
        idleTimeoutMillis: 0,
        connectionTimeoutMillis: 0,
    },
};
// =============== QA STAGING DATABASE ==================
exports.stageDbOptions = {
    name: "stage",
    type: "postgres",
    host: "xxxx",
    port: 5432,
    username: "xxxx",
    password: "xxxx",
    database: "xxxx",
    max: 25,
    idleTimeoutMillis: 0,
    slaves: "",
};
exports.syncStageDbOptions = {
    name: "syncstage",
    type: "postgres",
    host: "xxxx",
    port: 5432,
    username: "xxxx",
    password: "xxxx",
    database: "xxxx",
    max: 25,
    idleTimeoutMillis: 0,
    slaves: "",
};
exports.mailOptions = {
    host: "smtp.gmail.com",
    port: 465,
    from: "XXXX",
    user: "XXXX",
    pass: "XXXX",
};
exports.jwtOtions = {
    token: "xxxxx",
    expiresIn: "1h",
};
exports.SMS_NOIFICATION = {
    url: "xxxxxxx",
    auth: "xxxxxx",
};
exports.awsKeys = {
    accessKeyId: "XXXXX",
    secretAccessKey: "XXXXX",
    bucket: "XXXXX",
    key: "XXXXX",
};
exports.minioKeys = {
    host: "XXXXX",
    accessKeyId: "XXXXX",
    secretAccessKey: "XXXXX",
    bucket: "XXXX",
};
exports.kafkaOptions = {
    brokers: ['52.58.231.31:9092'],
    // brokers:['3.121.118.15:9092'],
    // brokers:['3.125.168.5:9092'],
    username: "",
    pass: "",
    clientId: process.env.TINTING_STORE_ID
};
var setEnvConfig = function () {
    var envData = process.env.ENV_TINTING;
    Log_1.log.info("setEnvConfig::" + JSON.stringify(envData));
    if (envData) {
        envData = JSON.parse(envData);
        if (envData.host) {
            exports.dbOptions.host = envData.host;
            exports.dbOptions.port = envData.port;
            exports.dbOptions.username = envData.username;
            exports.dbOptions.password = envData.password;
            exports.dbOptions.database = envData.database;
            exports.dbOptions.logging = false;
        }
    }
    // setSyncStagingConfig();
    // setStagingConfig();
    (0, exports.setSyncUrl)();
};
exports.setEnvConfig = setEnvConfig;
var CrpytoData_1 = require("./CrpytoData");
var fs_1 = require("fs");
var Props_1 = require("../constants/Props");
exports.syncConfig = {
    url: "",
    token: ""
};
var setSyncUrl = function () {
    try {
        var fileName = __dirname + "/../../id_rsa";
        if ((0, fs_1.existsSync)(fileName)) {
            var data = (0, fs_1.readFileSync)(fileName, "utf-8");
            if (data) {
                var decodeData = (0, CrpytoData_1.decrypt)(JSON.parse(data));
                data = JSON.parse(decodeData);
                if (data) {
                    exports.syncConfig.url = "https://" + data.url + "/api/";
                    exports.syncConfig.token = data.token;
                    Log_1.log.info(" \n\n SyncUrl set succesfully .... \n\n " + JSON.stringify(exports.syncConfig));
                }
            }
        }
        else {
            Log_1.log.error("id_rsa Is Not Exists");
        }
    }
    catch (error) {
        Log_1.log.error(error);
    }
};
exports.setSyncUrl = setSyncUrl;
exports.baseAuth = {
    user: "xxxx",
    password: "xxxxx",
};
var DbEnvConfig = function () { return __awaiter(void 0, void 0, void 0, function () {
    var syncApi, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, RawQuery_1.RawQuery.ConstData("SYNC_ADMIN_API")];
            case 1:
                syncApi = _a.sent();
                return [4 /*yield*/, RawQuery_1.RawQuery.ConstData("TOKEN")];
            case 2:
                token = _a.sent();
                return [4 /*yield*/, RawQuery_1.RawQuery.ConstData("BASE_AUTH")];
            case 3:
                exports.baseAuth = _a.sent();
                Props_1.Props._URL = syncApi.url;
                Props_1.Props._TOKEN = token.token;
                Props_1.Props.EXPIRE_TIME = token.expiresAt;
                return [4 /*yield*/, RawQuery_1.RawQuery.MailOptionsData("SMTP")];
            case 4:
                exports.mailOptions = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.DbEnvConfig = DbEnvConfig;
var setMailOptionsData = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, RawQuery_1.RawQuery.MailOptionsData("SMTP")];
            case 1:
                exports.mailOptions = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.setMailOptionsData = setMailOptionsData;
var getSyncUrl = function () {
    return exports.syncConfig;
};
exports.getSyncUrl = getSyncUrl;
