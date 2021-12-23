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
var SyncServiceHelper_1 = require("./sync/SyncServiceHelper");
var syslogstr = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
var cmd = require("node-cmd");
var cron = require("node-cron");
var execSync = require("child_process").execSync;
var shell = require('shelljs');
var SysService = /** @class */ (function () {
    function SysService() {
    }
    SysService.ResetService = function (log) {
        return __awaiter(this, void 0, void 0, function () {
            var cmdData, status;
            var _this = this;
            return __generator(this, function (_a) {
                cmdData = null;
                try {
                    // shell.exec('pm2 jlist tinting',async  (code, output) =>{
                    //   console.log('Exit code:', code);
                    //   var result = await JSON.parse(output)
                    //   status =await  result.find(v => v.name =='tinting')?.pm2_env?.status
                    //   console.log('Program output:', status);
                    // });
                    // cmdData = await SysService.CmdService("sc query  tinting-offline", log);
                }
                catch (err) {
                    log.error(err);
                }
                // if (cmdData && cmdData.includes("STOPPED")) {
                //   await SysService.CmdService("net start tinting-offline", log);
                //   await SysService.CmdService("net stop tinting-alt", log);
                // } else {
                //   await SysService.CmdService("net start tinting-alt", log);
                //   await SysService.CmdService("net stop tinting-offline", log);
                // }
                shell.exec('pm2 restart tinting', function (code, output) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('Exit code:', code);
                                return [4 /*yield*/, JSON.parse(output)];
                            case 1:
                                result = _a.sent();
                                // status =await  result.find(v => v.name =='tinting')?.pm2_env?.status;
                                console.log('Program output:', code, result);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SysService.CmdService = function (cmdCall, log) {
        return __awaiter(this, void 0, void 0, function () {
            var retValue, code;
            return __generator(this, function (_a) {
                retValue = null;
                log.warn(syslogstr);
                try {
                    log.warn(cmdCall);
                    code = execSync(cmdCall);
                    if (code) {
                        retValue = code.toString();
                        log.warn(retValue);
                        console.log(retValue);
                    }
                    else {
                        throw "!!!!!  cmd not execute  !!!!!";
                    }
                }
                catch (err) {
                    retValue = null;
                    log.warn(err);
                    throw err;
                }
                finally {
                    log.warn(syslogstr);
                }
                return [2 /*return*/, Promise.resolve(retValue)];
            });
        });
    };
    SysService.SelectedMacAddress = function (storeid, log) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.info(syslogstr);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.StoreSource(storeid, log)];
                    case 2:
                        data = _a.sent();
                        if (data) {
                            if (data.mac_address == "own") {
                                //data.mac_address = await App.getMacAddress();
                                //await SyncServiceHelper.UpdateCall("MAC", log, data.mac_address);
                            }
                            return [2 /*return*/, Promise.resolve(data.mac_address)];
                        }
                        else {
                            return [2 /*return*/, Promise.resolve(null)];
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        log.warn(err_1);
                        return [2 /*return*/, Promise.resolve(null)];
                    case 4:
                        log.info(syslogstr);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SysService.UpdateVersion = function (log) {
        return __awaiter(this, void 0, void 0, function () {
            var fs, data;
            return __generator(this, function (_a) {
                try {
                    fs = require("fs");
                    data = fs.readFileSync("./package.json", "utf8");
                    data = JSON.parse(data);
                    log.info("Version: " + data.version);
                    // await SyncServiceHelper.UpdateCall("VERSION", log, data.version);
                }
                catch (err) {
                    log.error("Error on updating version");
                    log.error(err);
                }
                return [2 /*return*/];
            });
        });
    };
    return SysService;
}());
exports.SysService = SysService;
