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
var express_1 = require("express");
var ffi = __importStar(require("ffi-napi"));
var path = __importStar(require("path"));
var DispenseController = /** @class */ (function () {
    function DispenseController() {
        this.componentName = "Dispense";
        this.router = express_1.Router();
        //   public async connect_to_dll(data:any, platform:string){
        //     var colorant;
        //     var colorantqty;
        //     var can;
        //     new Uint16Array([1,2,3]).buffer;
        //     var dllPath 
        //     if(platform === "win32"){
        //       dllPath =await path.resolve("C:/tinting-dll-files/x64/JazeeraFM.dll");
        //     }else{
        //       dllPath = await path.resolve("C:/tinting-dll-files/x86/JazeeraFM.dll");
        //     }
        //     const fmDispenser = await new ffi.Library(dllPath, {
        //     'Init': ["int32", []],
        //     'Shutdown': ["int32", []],
        //     'DTD': ["String", ['float', 'string', 'string']]
        //     });
        //     // colorant='"PV","RU"';
        //     // colorantqty='"9.0","1.4"';
        //     colorant = data.colorant;
        //     colorantqty = data.colorantqty;
        //     can = data.can;
        //     await fmDispenser.Init();
        //     let result = await fmDispenser.DTD(900.00,colorant,colorantqty);
        //     await fmDispenser.Shutdown();
        //     return result;
        // }
    }
    DispenseController.prototype.moduleName = function () {
        return this.constructor.name;
    };
    DispenseController.prototype.getRouter = function () {
        var _this = this;
        this.router.post("/initialize", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var result, platform, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        result = void 0;
                        platform = process.platform;
                        if (!(platform === "win32" || platform === "win64")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initializeDispenser(platform)];
                    case 1:
                        result = _a.sent();
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 3];
                    case 2: throw "platform is not windows";
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        response.send({ status: 0, error: error_1 });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        this.router.post("/shutdown", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.shutDownDispenser()];
                    case 1:
                        result = _a.sent();
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        response.send({ status: 0, error: error_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.router.post("/", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var reqData, result, platform, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        reqData = void 0;
                        result = null;
                        reqData = request.body ? request.body.data : {};
                        platform = process.platform;
                        if (!(platform === "win32" || platform === "win64")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connect_to_dll(reqData, platform)];
                    case 1:
                        result = _a.sent();
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 3];
                    case 2: throw "platform is not windows";
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        console.log(error_3);
                        response.send({ status: 0, error: error_3 });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        return this.router;
    };
    DispenseController.prototype.initializeDispenser = function (platform) {
        return __awaiter(this, void 0, void 0, function () {
            var dllPath, _a, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 8, , 9]);
                        if (!!this.dispenser) return [3 /*break*/, 7];
                        dllPath = void 0;
                        new Uint16Array([1, 2, 3]).buffer;
                        if (!(platform === "win32")) return [3 /*break*/, 2];
                        return [4 /*yield*/, path.resolve("C:/tinting-dll-files/x64/JazeeraFM.dll")];
                    case 1:
                        dllPath = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, path.resolve("C:/tinting-dll-files/x86/JazeeraFM.dll")];
                    case 3:
                        dllPath = _b.sent();
                        _b.label = 4;
                    case 4:
                        _a = this;
                        return [4 /*yield*/, new ffi.Library(dllPath, {
                                'Init': ["int32", []],
                                'smW': ["int32", []],
                                'Shutdown': ["int32", []],
                                'DTD': ["String", ['float', 'string', 'string']]
                            })];
                    case 5:
                        _a.dispenser = _b.sent();
                        // colorant='"PV","RU"';
                        // colorantqty='"9.0","1.4"';
                        return [4 /*yield*/, this.dispenser.Init()];
                    case 6:
                        // colorant='"PV","RU"';
                        // colorantqty='"9.0","1.4"';
                        _b.sent();
                        // await this.dispenser.smW();
                        return [2 /*return*/, { message: "Dispenser Initialized" }];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_4 = _b.sent();
                        throw error_4;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    DispenseController.prototype.shutDownDispenser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!this.dispenser) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dispenser.Shutdown()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { message: "Dispenser stopped" }];
                    case 2: return [2 /*return*/, { message: "Dispenser already stopped" }];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_5 = _a.sent();
                        throw error_5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DispenseController.prototype.connect_to_dll = function (data, platform) {
        return __awaiter(this, void 0, void 0, function () {
            var colorant, colorantqty, can, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!this.dispenser) return [3 /*break*/, 2];
                        // new Uint16Array([1,2,3]).buffer;
                        colorant = data.colorant;
                        colorantqty = data.colorantqty;
                        can = data.can;
                        return [4 /*yield*/, this.dispenser.DTD(900.00, colorant, colorantqty)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2: return [2 /*return*/, { message: "Dispenser not initalized" }];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_6 = _a.sent();
                        throw error_6;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return DispenseController;
}());
exports.DispenseController = DispenseController;
