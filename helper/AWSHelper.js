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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var Config = __importStar(require("../utils/Config"));
var MineType_1 = __importDefault(require("../utils/MineType"));
aws_sdk_1.default.config.update({
    accessKeyId: Config.awsKeys.accessKeyId,
    secretAccessKey: Config.awsKeys.secretAccessKey
});
var AWSHelper = /** @class */ (function () {
    function AWSHelper() {
        this.s3 = new aws_sdk_1.default.S3();
    }
    AWSHelper.prototype.uploadFile = function (filename, mineType, stream) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filename = filename + MineType_1.default(mineType);
                        params = {
                            Bucket: Config.awsKeys.bucket,
                            Key: Config.awsKeys.key + "/" + filename,
                            Body: stream,
                            ACL: "public-read"
                        };
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.s3
                                    .upload(params)
                                    .on("httpUploadProgress", function (evt) {
                                    // console.log(evt);
                                })
                                    .send(function (err, data) {
                                    // console.log("Uploaded Content to S3 bucket: " + JSON.stringify(data));
                                    resolve(data);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AWSHelper.prototype.downloadFile = function (filename, mineType) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            Bucket: Config.awsKeys.bucket,
                            Key: Config.awsKeys.key + "/" + filename + MineType_1.default(mineType)
                        };
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.s3.getObject(params, function (err, data) {
                                    if (err) {
                                        console.error(err);
                                        reject(err);
                                    }
                                    resolve(data.Body);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AWSHelper.prototype.fileUrl = function (filename, mineType) {
        var returnData = "https://";
        returnData += Config.awsKeys.bucket;
        returnData += ".s3.amazonaws.com/";
        returnData += Config.awsKeys.key + "/" + filename;
        returnData += MineType_1.default(mineType);
        return returnData;
    };
    AWSHelper.prototype.deleteFile = function (filename, mineType, isSecure) {
        if (isSecure === void 0) { isSecure = true; }
        return __awaiter(this, void 0, void 0, function () {
            var params, bucket;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            Bucket: Config.awsKeys.bucket,
                            Key: Config.awsKeys.key + "/" + filename + MineType_1.default(mineType)
                        };
                        bucket = Config.awsKeys.bucket;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.s3.deleteObject(params, function (err, data) {
                                    if (err) {
                                        console.error(err);
                                        reject(err);
                                    }
                                    // console.log("delete aws file", data);
                                    resolve(data);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return AWSHelper;
}());
exports.AWSHelper = AWSHelper;
