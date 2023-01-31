"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncServiceHelper = void 0;
var pg_1 = require("pg");
var Config = __importStar(require("../utils/Config"));
var App_1 = require("../utils/App");
console.log("-------------------SyncServiceHelper staring-------------------------");
Config.setEnvConfig();
var format = require("pg-format");
var STORE_ID = process.env.TINTING_STORE_ID || "LOCAL";
var moment = require("moment");
pg_1.types.setTypeParser(1114, function (stringValue) {
    return stringValue.replace(" ", "T");
});
var axios = require("axios");
var SyncServiceHelper = /** @class */ (function () {
    // public static StagePool: Pool = new Pool(SyncServiceHelper.StageDBOptions());
    function SyncServiceHelper() {
    }
    SyncServiceHelper.BatchQuery = function (config, sqls, log) {
        var _a, sqls_1, sqls_1_1;
        var _b, e_1, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var db, res, sql, e_1_1, e_2, err_1, err_2;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        log.info("-------------- Batch Query Starts --------------");
                        log.debug("\tHost Query: " + config.host);
                        log.debug("\t\tBatch length: " + sqls.length);
                        db = new pg_1.Client(config);
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 20, 25, 29]);
                        return [4 /*yield*/, db.connect()];
                    case 2:
                        _e.sent();
                        res = null;
                        return [4 /*yield*/, db.query("BEGIN")];
                    case 3:
                        _e.sent();
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, 12, 13, 18]);
                        _a = true, sqls_1 = __asyncValues(sqls);
                        _e.label = 5;
                    case 5: return [4 /*yield*/, sqls_1.next()];
                    case 6:
                        if (!(sqls_1_1 = _e.sent(), _b = sqls_1_1.done, !_b)) return [3 /*break*/, 11];
                        _d = sqls_1_1.value;
                        _a = false;
                        _e.label = 7;
                    case 7:
                        _e.trys.push([7, , 9, 10]);
                        sql = _d;
                        return [4 /*yield*/, db.query(sql)];
                    case 8:
                        res = _e.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        _a = true;
                        return [7 /*endfinally*/];
                    case 10: return [3 /*break*/, 5];
                    case 11: return [3 /*break*/, 18];
                    case 12:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 18];
                    case 13:
                        _e.trys.push([13, , 16, 17]);
                        if (!(!_a && !_b && (_c = sqls_1.return))) return [3 /*break*/, 15];
                        return [4 /*yield*/, _c.call(sqls_1)];
                    case 14:
                        _e.sent();
                        _e.label = 15;
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 17: return [7 /*endfinally*/];
                    case 18:
                        log.info("END");
                        return [4 /*yield*/, db.query("COMMIT")];
                    case 19:
                        _e.sent();
                        return [3 /*break*/, 29];
                    case 20:
                        e_2 = _e.sent();
                        log.error(e_2);
                        _e.label = 21;
                    case 21:
                        _e.trys.push([21, 23, , 24]);
                        return [4 /*yield*/, db.query("ROLLBACK")];
                    case 22:
                        _e.sent();
                        return [3 /*break*/, 24];
                    case 23:
                        err_1 = _e.sent();
                        throw err_1;
                    case 24: throw e_2;
                    case 25:
                        _e.trys.push([25, 27, , 28]);
                        return [4 /*yield*/, db.end()];
                    case 26:
                        _e.sent();
                        return [3 /*break*/, 28];
                    case 27:
                        err_2 = _e.sent();
                        return [3 /*break*/, 28];
                    case 28: return [7 /*endfinally*/];
                    case 29:
                        log.info("-------------- Batch Query Ends --------------");
                        return [2 /*return*/];
                }
            });
        });
    };
    SyncServiceHelper.ExecuteQuery = function (config, sql, log) {
        return __awaiter(this, void 0, void 0, function () {
            var showLog, res, db, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        showLog = !(sql.includes("DISTINCT") || sql.includes("sync_table") || sql.includes("sync_source"));
                        //let showLog = true;
                        if (showLog)
                            log.info("----------------- Query Starts----------------------------");
                        //let db: PoolClient = null;
                        if (showLog)
                            log.info("\tHost Query: " + config.host + "\t database:" + config.database);
                        if (showLog)
                            log.debug(sql);
                        log.info(sql);
                        res = null;
                        db = new pg_1.Client(config);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, db.connect()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, db.query(sql)];
                    case 3:
                        // db.on("error", (err: any) => {
                        //   if (err) {
                        //     console.error("Unexpected error on idle client", err); // your callback here
                        //     // SyncServiceHelper.isDbError = true;
                        //     throw err;
                        //   }
                        // });
                        // db =
                        //   config.host.indexOf("localhost") != -1
                        //     ? await SyncServiceHelper.LocalPool.connect()
                        //     : await SyncServiceHelper.StagePool.connect();
                        res = _a.sent();
                        //log.info(JSON.stringify(res.rows));
                        return [2 /*return*/, { metaData: res.fields, rows: res.rows }];
                    case 4:
                        e_3 = _a.sent();
                        log.error(e_3);
                        throw e_3;
                    case 5:
                        //if (db) db.release();
                        try {
                            db.end();
                        }
                        catch (err) {
                            // throw err;
                        }
                        if (showLog)
                            log.info("----------------- Query Ends----------------------------");
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SyncServiceHelper.BatchQueryApi = function (url, token, sqls, log) {
        return __awaiter(this, void 0, void 0, function () {
            var location_1, reqData, data, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.info("-------------- Batch Query Starts --------------");
                        log.debug("\tHost url: " + url);
                        log.debug("\t\tBatch length: " + sqls.length);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        axios.defaults.headers["Authorization"] = token;
                        location_1 = process.env.TINTING_STORE_ID;
                        reqData = {
                            data: {
                                data: sqls,
                                storeid: location_1,
                            },
                        };
                        return [4 /*yield*/, axios.post(url, reqData)];
                    case 2:
                        data = _a.sent();
                        data = data.data;
                        if (data.error) {
                            log.error(data.error);
                            throw data.error.message;
                        }
                        else {
                            return [2 /*return*/, data.data];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        log.error(e_4);
                        log.info(sqls);
                        throw e_4;
                    case 4:
                        log.info("-------------- Batch Query Ends --------------");
                        return [2 /*return*/];
                }
            });
        });
    };
    SyncServiceHelper.ExecuteQueryApi = function (url, token, map_table, sql, log) {
        return __awaiter(this, void 0, void 0, function () {
            var showLog, res, location, reqData, data, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        showLog = !(sql.includes("DISTINCT") || sql.includes("sync_table") || sql.includes("sync_source"));
                        //let showLog = true;
                        if (showLog)
                            log.info("----------------- Query Starts----------------------------");
                        //let db: PoolClient = null;
                        if (showLog)
                            log.info("\tHost url: " + url, token);
                        if (showLog)
                            log.debug(sql);
                        res = null;
                        location = process.env.TINTING_STORE_ID;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        axios.defaults.headers["Authorization"] = token;
                        reqData = {
                            data: {
                                query: sql,
                                table: map_table,
                                storeid: location,
                            },
                        };
                        return [4 /*yield*/, axios.post(url, reqData)];
                    case 2:
                        data = _a.sent();
                        data = data.data;
                        if (data.error || (data.status == 0 && data.data.rows.length == 0)) {
                            log.error(data.error ? data.error.message : { message: "Status 0 Empty Records" });
                            throw data.error ? data.error.message : { message: "Status 0 Empty Records" };
                        }
                        else {
                            //log.info(JSON.stringify(data.data));
                            return [2 /*return*/, { rows: data.data.rows, status: data.status, metaData: data.fields }];
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        e_5 = _a.sent();
                        log.error(e_5);
                        return [3 /*break*/, 5];
                    case 4:
                        //if (db) db.release();
                        // throw err;
                        if (showLog)
                            log.info("----------------- Query Ends----------------------------");
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SyncServiceHelper.PrepareQuery = function (table, metaData, rows, filterIds, type, pk, log) {
        var _a, metaData_1, metaData_1_1;
        var _b, e_6, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var columns, sql, records_1, filterRows, sql_1, ele, e_6_1, records_2, filterRows;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        columns = metaData.map(function (ele) { return ele.name; });
                        console.log(columns);
                        if (!(type == "INSERT")) return [3 /*break*/, 1];
                        sql = "insert into " + table;
                        sql += " ( " + columns.join(",");
                        sql += " ) VALUES %L";
                        records_1 = [];
                        filterRows = rows.filter(function (ele) { return filterIds.indexOf(ele[pk]) > -1; });
                        filterRows.map(function (ele) {
                            for (var key in ele) {
                                if (Array.isArray(ele[key])) {
                                    ele[key] = JSON.stringify(ele[key]);
                                }
                            }
                            records_1.push(Object.values(ele));
                        });
                        sql = format(sql, records_1);
                        return [2 /*return*/, sql];
                    case 1:
                        if (!(type == "UPDATE")) return [3 /*break*/, 14];
                        console.log("Update start ....");
                        sql_1 = "update " + table + " as t set ";
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 7, 8, 13]);
                        _a = true, metaData_1 = __asyncValues(metaData);
                        _e.label = 3;
                    case 3: return [4 /*yield*/, metaData_1.next()];
                    case 4:
                        if (!(metaData_1_1 = _e.sent(), _b = metaData_1_1.done, !_b)) return [3 /*break*/, 6];
                        _d = metaData_1_1.value;
                        _a = false;
                        try {
                            ele = _d;
                            sql_1 +=
                                " " + ele.name + " = cast(c." + ele.name + " as " + SyncServiceHelper.TypeConvertion(ele.data_type) + " ), ";
                        }
                        finally {
                            _a = true;
                        }
                        _e.label = 5;
                    case 5: return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_6_1 = _e.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _e.trys.push([8, , 11, 12]);
                        if (!(!_a && !_b && (_c = metaData_1.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _c.call(metaData_1)];
                    case 9:
                        _e.sent();
                        _e.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_6) throw e_6.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13:
                        sql_1 = sql_1.substr(0, sql_1.length - 2) + " ";
                        sql_1 += " from ( values %L)";
                        sql_1 += " as c (" + columns.join(",") + ") where ";
                        sql_1 += "  cast(t." + pk + " as text ) =  cast(c." + pk + " as text )";
                        records_2 = [];
                        filterRows = rows.filter(function (ele) { return filterIds.indexOf(ele[pk]) > -1; });
                        filterRows.map(function (ele) {
                            for (var key in ele) {
                                if (Array.isArray(ele[key])) {
                                    ele[key] = JSON.stringify(ele[key]);
                                }
                            }
                            records_2.push(Object.values(ele));
                        });
                        sql_1 = format(sql_1, records_2);
                        //  sql = sql.replace(/'t'/g, "'TRUE'");
                        //  sql = sql.replace(/'f'/g, "'FALSE'");
                        //console.log(sql);
                        return [2 /*return*/, sql_1];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    SyncServiceHelper.TypeConvertion = function (type) {
        switch (type) {
            // case "int":
            //     return "integer";
            // case "int8":
            //     return "bigint";
            // case "int4":
            //     return "bigint";
            // case "bigint":
            //     return "bigint";
            case "bool":
                return "BOOLEAN";
            case "boolean":
                return "BOOLEAN";
            case "varchar":
                return "text";
            // case "date":
            //   return "timestamp";
            default:
                return type;
        }
    };
    SyncServiceHelper.ChackAvalibleQuery = function (table, metaData, primaryKeys, pk, log) {
        return __awaiter(this, void 0, void 0, function () {
            var sql;
            return __generator(this, function (_a) {
                sql = "select DISTINCT " + pk + " from " + table;
                sql += " where " + pk + " in  (%L)";
                sql = format(sql, primaryKeys);
                return [2 /*return*/, Promise.resolve(sql)];
            });
        });
    };
    SyncServiceHelper.TablesList = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var query, db, res, rows, e_7, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            SELECT\n                tablename\n            FROM\n                pg_catalog.pg_tables\n            WHERE\n                schemaname != 'pg_catalog'\n            AND schemaname != 'information_schema'\n        ";
                        db = new pg_1.Client(config);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 9]);
                        return [4 /*yield*/, db.connect()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, db.query(query)];
                    case 3:
                        res = _a.sent();
                        rows = res.rows;
                        // await db.end();
                        return [2 /*return*/, rows];
                    case 4:
                        e_7 = _a.sent();
                        throw e_7;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, db.end()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        err_3 = _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    SyncServiceHelper.MetadataTable = function (config, table) {
        return __awaiter(this, void 0, void 0, function () {
            var envData, query, db, res, rows, e_8, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (config == null) {
                            config = {};
                            envData = process.env.ENV_JPOS;
                            envData = envData ? JSON.parse(envData) : Config.dbOptions;
                            if (envData) {
                                if (envData.dbHost) {
                                    config.host = envData.dbHost;
                                    config.port = envData.dbPort;
                                    config.user = envData.dbUser;
                                    config.password = envData.dbPassword;
                                    config.database = envData.dbDatabase;
                                }
                                if (envData.host) {
                                    config.host = envData.host;
                                    config.port = envData.port;
                                    config.user = envData.username;
                                    config.password = envData.password;
                                    config.database = envData.database;
                                }
                            }
                        }
                        query = "\n                SELECT DISTINCT\n                C.ordinal_position AS POS,\n                  C.column_name              AS NAME,\n                      C.is_nullable              AS IS_NULLABLE,\n                      C.udt_name                 AS DATA_TYPE,\n                      C.character_maximum_length AS MAX_LENGTH,\n                      ( CASE\n                          WHEN TC.constraint_type = 'PRIMARY KEY' THEN 'ID'\n                          WHEN TC.constraint_type = 'UNIQUE' THEN NULL\n                          ELSE CCU.table_name\n                        END ) AS REF\n            FROM   information_schema.columns C\n              LEFT JOIN information_schema.key_column_usage AS KCU\n                    ON ( KCU.table_name = c.table_name\n                          AND KCU.column_name = c.column_name )\n              LEFT JOIN information_schema.table_constraints TC\n                    ON TC.table_name = C.table_name\n                        AND TC.table_catalog = C.table_catalog\n                        AND TC.constraint_name = kcu.constraint_name\n              LEFT JOIN information_schema.constraint_column_usage CCU\n                    ON CCU.constraint_name = TC.constraint_name\n                        AND C.table_catalog = CCU.table_catalog\n            WHERE  C.table_catalog = '".concat(config.database, "'\n              AND C.table_name = '").concat(table, "'\n            ORDER  BY C.ordinal_position;\n        ");
                        db = new pg_1.Client(config);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 9]);
                        return [4 /*yield*/, db.connect()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, db.query(query)];
                    case 3:
                        res = _a.sent();
                        rows = res.rows;
                        // await db.end();
                        return [2 /*return*/, rows];
                    case 4:
                        e_8 = _a.sent();
                        throw e_8;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, db.end()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        err_4 = _a.sent();
                        return [3 /*break*/, 8];
                    case 8: return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    // static async MetadataTableApi(url: string, token: string, map_table: any, log: any) {
    //   log.debug("MetadataTableApi  ::::::::::: " + url);
    //   axios.defaults.headers["Authorization"] = token;
    //   let reqData: any = {
    //     data: {
    //       table: map_table,
    //     },
    //   };
    //   let data = await axios.post(url, reqData);
    //   data = data.data;
    //   if (data.error) {
    //     console.log(data.error);
    //     throw data.error.message;
    //   } else {
    //     log.info( (data.data.rows));
    //     return data.data.rows;
    //   }
    // }
    SyncServiceHelper.ErrorMessage = function (type, err, log) {
        return __awaiter(this, void 0, void 0, function () {
            var sql;
            return __generator(this, function (_a) {
                sql = "\n    INSERT INTO sync_error \n    (id, store_id, \"type\", error_msg, error_desc) \n    VALUES(\n      '".concat(App_1.App.UniqueNumber(), "', '").concat(STORE_ID, "', '").concat(type, "', '").concat(JSON.stringify(err), "', '").concat(err.message ? err.message : "", "'\n    )\n  ");
                return [2 /*return*/];
            });
        });
    };
    // static async parallelQuery(query: string[]){
    //     let functionList: any[] = [];
    //
    //     asyncExec.parallel(functionList,  (err: any, results: any[]) =>{
    //
    //     })
    // }
    // public static StageDBOptions() {
    //   let stageDbOptions = Config.getStageDb();
    //   return {
    //     host: stageDbOptions.host,
    //     port: stageDbOptions.port,
    //     user: stageDbOptions.username,
    //     password: stageDbOptions.password,
    //     database: stageDbOptions.database,
    //     max: 25,
    //     idleTimeoutMillis: 0,
    //   };
    // }
    // public static LocalDBOptions() {
    //   return {
    //     host: "localhost",
    //     port: 5432,
    //     user: "postgres",
    //     password: "Test!234",
    //     database: "jps_prod"
    //   };
    // }
    SyncServiceHelper.LocalDBOptions = function () {
        return {
            host: Config.dbOptions.host,
            port: Config.dbOptions.port,
            user: Config.dbOptions.username,
            password: Config.dbOptions.password,
            database: Config.dbOptions.database,
            max: 25,
            idleTimeoutMillis: 0,
        };
    };
    // public static LayeredStageDBOptions() {
    //   let syncStageDbOptions = Config.syncStageDbOptions; //Config.getSyncDb();
    //   return {
    //     host: syncStageDbOptions.host,
    //     port: syncStageDbOptions.port,
    //     user: syncStageDbOptions.username,
    //     password: syncStageDbOptions.password,
    //     database: syncStageDbOptions.database,
    //     max: 25,
    //     idleTimeoutMillis: 0,
    //   };
    // }
    SyncServiceHelper.syncUrl = function () {
        return Config.syncConfig; //Config.getSyncDb();
    };
    SyncServiceHelper.UpdateCall = function (type, log, data) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, syncUrl, stagUrl, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = null;
                        return [4 /*yield*/, SyncServiceHelper.syncUrl()];
                    case 1:
                        syncUrl = _a.sent();
                        stagUrl = syncUrl.url + "syncdata/";
                        token = syncUrl.token;
                        if (type == "RESET") {
                            sql = "UPDATE sync_source SET  is_reset = false, updated_on = '".concat(moment().toISOString(), "'  WHERE id='").concat(STORE_ID, "' ");
                        }
                        else if (type == "CMD") {
                            sql = data;
                        }
                        else if (type == "JSON") {
                            sql = "UPDATE sync_source SET  sync_cmd = null, updated_on = '".concat(moment().toISOString(), "'  WHERE id='").concat(STORE_ID, "' ");
                        }
                        else if (type == "VERSION") {
                            sql = "UPDATE sync_source SET  type = 'v".concat(data, "', updated_on = '").concat(moment().toISOString(), "'  WHERE id='").concat(STORE_ID, "' ");
                        }
                        else if (type == "MAC") {
                            sql = "UPDATE sync_source SET  mac_address = '".concat(data, "', updated_on = '").concat(moment().toISOString(), "'  WHERE id='").concat(STORE_ID, "' ");
                        }
                        if (!sql) return [3 /*break*/, 3];
                        log.info(sql);
                        return [4 /*yield*/, SyncServiceHelper.BatchQueryApi(stagUrl + 'batchquery', token, [sql], log)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SyncServiceHelper.StoreSource = function (storeid, log) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, syncUrl, stagUrl, token, syncResults, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, SyncServiceHelper.syncUrl()];
                    case 1:
                        syncUrl = _a.sent();
                        stagUrl = syncUrl.url + "syncdata/";
                        token = syncUrl.token;
                        sql = "select * from sync_source where id='".concat(storeid, "' ");
                        log.info(sql);
                        return [4 /*yield*/, SyncServiceHelper.ExecuteQueryApi(stagUrl, token, 'sync_source', sql, log)];
                    case 2:
                        syncResults = _a.sent();
                        syncResults = syncResults.rows;
                        syncResults = syncResults.length > 0 ? syncResults[0] : null;
                        return [2 /*return*/, Promise.resolve(syncResults)];
                    case 3:
                        error_1 = _a.sent();
                        log.error(error_1);
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param type  "INSERT", "UPDATE", "SELECT"
     * @param entity
     */
    SyncServiceHelper.SyncReUpdateSQL = function (type, entity) {
        switch (type) {
            case "INSERT":
                return "insert into sync_reupdate (id, store_id, table_name, table_pk, table_pk_value, type, sync_date, add_on ) values ('".concat(entity.id, "','").concat(entity.store_id, "','").concat(entity.table_name, "','").concat(entity.table_pk, "','").concat(entity.table_pk_value, "','").concat(entity.type, "','").concat(entity.sync_date, "', '").concat(JSON.stringify(entity.add_on), "')");
            case "UPDATE":
                return "update sync_reupdate set is_update = true, updated_on = now() where is_update = false and store_id = '".concat(entity.store_id, "' and table_name='").concat(entity.table_name, "' and table_pk_value = '").concat(entity.table_pk_value, "'");
            case "SELECT":
                return "select distinct store_id, table_name, table_pk, table_pk_value, is_resync, type from sync_reupdate where store_id = '".concat(entity.store_id, "' and table_name in ('").concat(entity.table_name, "') and is_update = false ;");
            default:
                return null;
        }
    };
    SyncServiceHelper.BuildDMLSelectPkQuery = function (tableName, pk, value) {
        var sql = "select * from ".concat(tableName, " where ").concat(pk, "= '").concat(value, "' ");
        return sql;
    };
    SyncServiceHelper.BuildBatchQuery = function (soruceRes, sync, log, targetDb, batchSql) {
        return __awaiter(this, void 0, void 0, function () {
            var rowsAvalible, rowsNotAvalible, sql, rowsLength, primaryKeys, res, metaDataTable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rowsAvalible = null;
                        rowsNotAvalible = null;
                        sql = null;
                        if (!(soruceRes && soruceRes.rows.length != 0)) return [3 /*break*/, 7];
                        rowsLength = soruceRes.rows.length;
                        primaryKeys = soruceRes.rows.map(function (ele) { return ele[sync.map_pk]; });
                        return [4 /*yield*/, SyncServiceHelper.ChackAvalibleQuery(sync.map_table, soruceRes.metaData, primaryKeys, sync.map_pk, log)];
                    case 1:
                        sql = _a.sent();
                        return [4 /*yield*/, SyncServiceHelper.ExecuteQuery(targetDb, sql, log)];
                    case 2:
                        res = _a.sent();
                        rowsAvalible = res.rows.map(function (ele) { return ele[sync.map_pk]; });
                        rowsNotAvalible = primaryKeys.filter(function (ele) { return rowsAvalible.indexOf(ele) < 0; });
                        log.debug("\t\tUpdate Records: " + sync.map_table + " --> " + rowsAvalible.length);
                        log.debug("\t\tInsert Records: " + sync.map_table + " --> " + rowsNotAvalible.length);
                        return [4 /*yield*/, SyncServiceHelper.MetadataTable(targetDb, sync.map_table)];
                    case 3:
                        metaDataTable = _a.sent();
                        if (!(rowsAvalible && rowsAvalible.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, SyncServiceHelper.PrepareQuery(sync.map_table, metaDataTable, soruceRes.rows, rowsAvalible, "UPDATE", sync.map_pk, log)];
                    case 4:
                        sql = _a.sent();
                        batchSql.push(sql);
                        _a.label = 5;
                    case 5:
                        if (!(rowsNotAvalible && rowsNotAvalible.length > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, SyncServiceHelper.PrepareQuery(sync.map_table, metaDataTable, soruceRes.rows, rowsNotAvalible, "INSERT", sync.map_pk, log)];
                    case 6:
                        sql = _a.sent();
                        batchSql.push(sql);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SyncServiceHelper.isDbError = false;
    SyncServiceHelper.synTableColumns = "*";
    SyncServiceHelper.synTableName = "sync_table";
    SyncServiceHelper.syncSourceTableName = "sync_source";
    //public static syncTargetTableName: string = "";
    SyncServiceHelper.syncSourceDDLTableName = "sync_ddl";
    SyncServiceHelper.LocalPool = new pg_1.Pool(SyncServiceHelper.LocalDBOptions());
    return SyncServiceHelper;
}());
exports.SyncServiceHelper = SyncServiceHelper;
