"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setItem = exports.getItem = exports.readFile = exports.writeFile = exports.StoreInIt = void 0;
var fs_1 = require("fs");
var file = __dirname + "/../assets/store.json";
var StoreInIt = function () {
    console.log("StoreInIt: " + file);
    var isExist = (0, fs_1.existsSync)(file) && (0, exports.readFile)() != "{}";
    if (!isExist) {
        (0, fs_1.closeSync)((0, fs_1.openSync)(file, "w"));
        (0, exports.writeFile)(JSON.stringify({ syncdate: "1900-01-01T01:01:01" }));
    }
};
exports.StoreInIt = StoreInIt;
//main();
var writeFile = function (data) {
    if (data) {
        (0, fs_1.writeFileSync)(file, data, "utf8");
    }
};
exports.writeFile = writeFile;
var readFile = function () {
    var data = (0, fs_1.readFileSync)(file, "utf8");
    if (data && data.trim() != "" && data.includes("T")) {
        return data;
    }
    else {
        return "{}";
    }
};
exports.readFile = readFile;
var getItem = function (key, source) {
    console.log("store.getItem", key, source);
    if (key) {
        var data = (0, exports.readFile)();
        return JSON.parse(data)[key];
    }
    else {
        return { syncdate: "1900-01-01T01:01:01" };
    }
};
exports.getItem = getItem;
var setItem = function (key, value, source) {
    if (key) {
        console.log("store.setItem", key, value, source);
        var data = (0, exports.readFile)();
        if (data)
            data = JSON.parse(data);
        if (value && value.trim() != "") {
            data[key] = value;
            data = JSON.stringify(data);
            (0, exports.writeFile)(data);
        }
    }
};
exports.setItem = setItem;
