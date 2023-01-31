"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBEvent = exports.WatcherInit = void 0;
var pg = require("pg");
var config = require("./Config");
var EventEmitter = require("events");
var pool;
pg.types.setTypeParser(1114, function (stringValue) {
    return stringValue.replace(" ", "T");
});
var event;
var WatcherInit = function () {
    event = new EventEmitter();
    pool = new pg.Pool({
        connectionString: "postgres://".concat(config.dbOptions.username, ":").concat(config.dbOptions.password, "@").concat(config.dbOptions.host, ":").concat(config.dbOptions.port, "/").concat(config.dbOptions.database),
    });
    pool.connect(function (err, client) {
        if (err) {
            console.log(err);
        }
        if (client != null) {
            client.on("notification", function (msg) {
                dbEmitter(msg.payload);
            });
            client.query("LISTEN notify_table");
        }
    });
};
exports.WatcherInit = WatcherInit;
var DBEvent = function () {
    return event;
};
exports.DBEvent = DBEvent;
var dbEmitter = function (payload) {
    console.log("WATCHER", payload);
    var data = JSON.parse(payload);
    (0, exports.DBEvent)().emit(data.name, data.record);
};
