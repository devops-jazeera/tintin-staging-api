"use strict";
// import { createLogger, format, transports } from "winston";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleslog = exports.hlog = exports.ulog = exports.sflog = exports.transaction = exports.master = exports.log = void 0;
// import { logOptions, logSyncOptions, logUpdateOptions } from "./Config";
// export const log = createLogger({
//   exitOnError: false,
//   format: format.combine(
//     format.timestamp({
//       format: "YYYY-MM-DDTHH:mm:ss"
//     }),
//     format.simple()
//   ),
//   transports: [new transports.File(logOptions.file), new transports.Console(logOptions.console)]
// });
// export const slog = createLogger({
//   exitOnError: false,
//   format: format.combine(
//     format.timestamp({
//       format: "YYYY-MM-DDTHH:mm:ss"
//     }),
//     format.simple()
//   ),
//   transports: [new transports.File(logSyncOptions.file), new transports.Console(logSyncOptions.console)]
// });
// export const ulog = createLogger({
//   exitOnError: false,
//   format: format.combine(
//     format.timestamp({
//       format: "YYYY-MM-DDTHH:mm:ss"
//     }),
//     format.simple()
//   ),
//   transports: [new transports.File(logUpdateOptions.file), new transports.Console(logUpdateOptions.console)]
// });
// export const log = require("log4js");
// export const slog = require("log4js");
// export const ulog = require("log4js");
// log.configure({
//   appenders: [{ type: "file", filename: __dirname + "/../../logs/jpos.log", maxLogSize: 20480, backups: 10 }]
// });
// slog.configure({
//   appenders: [{ type: "file", filename: __dirname + "/../../logs/jpos.log", maxLogSize: 20480, backups: 10 }]
// });
// ulog.configure({
//   appenders: [{ type: "file", filename: __dirname + "/../../logs/jpos.log", maxLogSize: 20480, backups: 10 }]
// });
// import* as log4js from "log4js";
// log4js.loadAppender("file");
// log4js.addAppender(log4js.appenders.file(__dirname + "/../../logs/jpos.log"), "log");
// log4js.addAppender(log4js.appenders.file(__dirname + "/../../logs/sync.log"), "slog");
// log4js.addAppender(log4js.appenders.file(__dirname + "/../../logs/update.log"), "ulog");
// export const log = log4js.getLogger("log");
// export const slog = log4js.getLogger("slog");
// export const ulog = log4js.getLogger("ulog");
var log4js_1 = require("log4js");
(0, log4js_1.configure)({
    appenders: {
        app: {
            type: "multiFile",
            base: __dirname + "/../../logs/tinting/",
            property: "type",
            extension: ".log",
            maxLogSize: 10485760,
            backups: 4,
        },
        out: { type: "stdout", layout: { type: "dummy" } },
        emergencies: {
            type: "file",
            filename: __dirname + "/../../logs/tinting/error.log",
            maxLogSize: 10485760,
            backups: 10,
        },
        error: {
            type: "logLevelFilter",
            appender: "emergencies",
            level: "error",
        },
    },
    categories: {
        default: { appenders: ["app", "error"], level: "debug" },
        out: { appenders: ["out"], level: "error" },
    },
});
exports.log = (0, log4js_1.getLogger)("app");
exports.log.addContext("type", "app");
exports.master = (0, log4js_1.getLogger)("master");
exports.master.addContext("type", "master");
exports.transaction = (0, log4js_1.getLogger)("transaction");
exports.transaction.addContext("type", "transaction");
exports.sflog = (0, log4js_1.getLogger)("sync");
exports.sflog.addContext("type", "syncf");
exports.ulog = (0, log4js_1.getLogger)("update");
exports.ulog.addContext("type", "update");
exports.hlog = (0, log4js_1.getLogger)("health");
exports.hlog.addContext("type", "health");
exports.saleslog = (0, log4js_1.getLogger)("sales");
exports.saleslog.addContext("type", "sales");
// export const log = getLogger();
// export const slog = getLogger();
// export const ulog = getLogger();
