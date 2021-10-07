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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var minio_1 = require("minio");
var Config = __importStar(require("../utils/Config"));
var MineType_1 = __importDefault(require("../utils/MineType"));
var config = {
    accessKey: Config.minioKeys.accessKeyId,
    secretKey: Config.minioKeys.secretAccessKey,
    useSSL: false,
    endPoint: Config.minioKeys.host
};
var PUBLIC_BUCKET = "public";
setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
    var client, promise;
    return __generator(this, function (_a) {
        client = new minio_1.Client(config);
        client.bucketExists(Config.minioKeys.bucket, function (err, exists) {
            if (err)
                console.log(err);
            if (!exists) {
                client.makeBucket(Config.minioKeys.bucket, "us-east-1", function (err) {
                    if (err)
                        console.log(err);
                });
            }
        });
        promise = new Promise(function (resolve, reject) {
            client.bucketExists(Config.minioKeys.bucket + PUBLIC_BUCKET, function (err, exists) {
                if (err)
                    reject(err);
                if (!exists) {
                    client.makeBucket(Config.minioKeys.bucket + PUBLIC_BUCKET, "us-east-1", function (err) {
                        if (err)
                            reject(err);
                        resolve("new bucket created");
                    });
                }
                else {
                    resolve("Bucket exists");
                }
            });
        });
        promise
            .then(function () {
            var bucket = Config.minioKeys.bucket + PUBLIC_BUCKET;
            var access = "{\n            \"Version\":\"2012-10-17\",\n            \"Statement\":[\n              {\n                \"Sid\":\"AddPerm\",\n                \"Effect\":\"Allow\",\n                \"Principal\": \"*\",\n                \"Action\":[\"s3:GetObject\"],\n                \"Resource\":[\"arn:aws:s3:::" + bucket + "/*\"]\n              }\n            ]\n          }";
            access = access.toString();
            // console.log(access);
            client.setBucketPolicy(bucket, access, function (err) {
                if (err)
                    console.log(err);
                else
                    console.log("************* Permission Set to " + bucket + " ************* ");
            });
        })
            .catch(function (err) {
            console.error(err);
        });
        return [2 /*return*/];
    });
}); }, 5000);
var MinioHelper = /** @class */ (function () {
    function MinioHelper() {
        this.client = new minio_1.Client(config);
    }
    MinioHelper.prototype.uploadFile = function (filename, mineType, stream, isSecure) {
        if (isSecure === void 0) { isSecure = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filename = filename + MineType_1.default(mineType);
                        console.log("Store Upload: " + filename);
                        return [4 /*yield*/, new Promise(function (resolve, rejects) {
                                var bucket = Config.minioKeys.bucket + (isSecure ? "" : PUBLIC_BUCKET);
                                _this.client.putObject(bucket, filename, stream, function (err, result) { return __awaiter(_this, void 0, void 0, function () {
                                    var url;
                                    return __generator(this, function (_a) {
                                        if (err)
                                            console.error(err);
                                        url = MinioHelper.FileUrl(filename, null);
                                        resolve(url);
                                        return [2 /*return*/];
                                    });
                                }); });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MinioHelper.prototype.downloadFile = function (filename, mineType) {
        // console.log(Config.awsKeys.key + "/" + filename + App.MineType(mineType));
        // const params = {
        //   Bucket: Config.awsKeys.bucket,
        //   Key: Config.awsKeys.key + "/" + filename + App.MineType(mineType)
        // };
        // return new Promise((resolve: any, reject: any) => {
        // });
    };
    MinioHelper.prototype.deleteFile = function (filename, mineType, isSecure) {
        if (isSecure === void 0) { isSecure = true; }
        filename = filename + MineType_1.default(mineType);
        // console.log("Store Delete: " + filename);
        var bucket = Config.minioKeys.bucket + (isSecure ? "" : PUBLIC_BUCKET);
        this.client.removeObject(bucket, filename, function (err) {
            if (err)
                console.error(err);
        });
    };
    MinioHelper.prototype.streamDownloadFile = function (filename, mineType, response) {
        filename = filename + MineType_1.default(mineType);
        // console.log("Download File: " + filename);
        this.client.getObject(Config.minioKeys.bucket, filename, function (error, stream) {
            if (error) {
                return response.status(500).send(error);
            }
            stream.pipe(response);
        });
    };
    MinioHelper.FileUrl = function (filename, mineType, isSecure) {
        if (isSecure === void 0) { isSecure = false; }
        var bucket = Config.minioKeys.bucket + (isSecure ? "" : PUBLIC_BUCKET);
        filename = filename.indexOf(".") > 0 ? filename : filename + MineType_1.default(mineType);
        var returnData = "https://" + Config.minioKeys.host + "/";
        returnData += bucket + "/";
        returnData += filename;
        return returnData;
    };
    return MinioHelper;
}());
exports.MinioHelper = MinioHelper;
