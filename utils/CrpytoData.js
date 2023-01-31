"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atob = exports.btoa = exports.decrypt = exports.encrypt = void 0;
var cryptoData = require("crypto");
var algorithm = "aes-256-ctr";
var secretKey = "9OVH6sdmpNWjRRIqCc7rdxs01lwH9999";
var iv = cryptoData.randomBytes(16);
var encrypt = function (text) {
    var cipher = cryptoData.createCipheriv(algorithm, secretKey, iv);
    var encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return {
        iv: iv.toString("hex"),
        content: encrypted.toString("hex"),
    };
};
exports.encrypt = encrypt;
var decrypt = function (hash) {
    var decipher = cryptoData.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, "hex"));
    var decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, "hex")), decipher.final()]);
    return decrpyted.toString();
};
exports.decrypt = decrypt;
var btoa = function (str) {
    return Buffer.from(str).toString("base64");
};
exports.btoa = btoa;
var atob = function (str) {
    return Buffer.from(str, "base64").toString();
};
exports.atob = atob;
