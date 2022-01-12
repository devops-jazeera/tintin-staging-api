"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { ulog as log } from "../../utils/Log";
var Store_1 = require("../../utils/Store");
var SysService_1 = require("../../SysService");
var AutoUpdater = require("auto-updater");
var AdmZip = require("adm-zip");
var fs = require("fs");
var UpdateService = /** @class */ (function () {
    function UpdateService(log) {
        var _this = this;
        this.extratFolder = function () {
            var fileName = null;
            fs.readdirSync("./").forEach(function (file) {
                if (file.endsWith(".zip")) {
                    fileName = file;
                }
            });
            var zip = new AdmZip(__dirname + "/" + fileName);
            zip.extractAllTo("../", true);
            fs.unlinkSync(__dirname + "/" + fileName);
            try {
                SysService_1.SysService.ResetService(_this.ulog);
            }
            catch (e) {
                _this.ulog(JSON.stringify(e));
            }
        };
        this.ulog = log;
    }
    UpdateService.prototype.initializeUpdater = function () {
        var _this = this;
        try {
            if (!this.autoupdater) {
                this.autoupdater = new AutoUpdater({
                    pathToJson: "",
                    autoupdate: false,
                    checkgit: false,
                    jsonhost: "raw.githubusercontent.com",
                    contenthost: "codeload.github.com",
                    progressDebounce: 1,
                    devmode: false,
                });
                // State the events
                this.autoupdater.on("git-clone", function () {
                    var _this = this;
                    this.ulog.log("warn", "You have a clone of the repository. Use 'git pull' to be up-to-date");
                    var spawn = require("child_process").spawn;
                    var ls = spawn("git", ["pull"]);
                    ls.stdout.on("data", function (data) {
                        _this.ulog.warn("stdout: " + data);
                    });
                    ls.stderr.on("data", function (data) {
                        _this.ulog.error("stderr: " + data);
                    });
                    ls.on("close", function (data) {
                        _this.ulog.warn("child process exited with code " + data);
                    });
                });
                this.autoupdater.on("check.up-to-date", function (data) {
                    _this.ulog.warn("You have the latest version: " + data);
                });
                this.autoupdater.on("check.out-dated", function (v_old, v) {
                    _this.ulog.warn("Your version is outdated. " + v_old + " of " + v);
                    _this.autoupdater.fire("download-update");
                });
                this.autoupdater.on("update.downloaded", function () {
                    _this.ulog.warn("Update downloaded and ready for install");
                    _this.extratFolder();
                });
                this.autoupdater.on("update.not-installed", function () {
                    this.ulog.warn("The Update was already in your folder! It's read for install");
                    this.extratFolder();
                });
                this.autoupdater.on("update.extracted", function () {
                    this.ulog.warn("Update extracted successfully!");
                    this.ulog.warn("RESTART THE APP!");
                });
                this.autoupdater.on("download.start", function (data) {
                    _this.ulog.warn("Starting downloading: " + data);
                });
                this.autoupdater.on("download.progress", function (name, perc) {
                    process.stdout.write("Downloading " + perc + "%\r\n");
                });
                this.autoupdater.on("download.end", function (data) {
                    _this.ulog.warn("Downloaded " + data);
                });
                this.autoupdater.on("download.error", function (err) {
                    _this.ulog.error("Error when downloading: " + err);
                    setTimeout(function () {
                        SysService_1.SysService.ResetService(_this.ulog);
                    }, 60000);
                });
                this.autoupdater.on("end", function () {
                    this.ulog.warn("The app is ready to function");
                });
                this.autoupdater.on("error", function (data, e) {
                    _this.ulog.error(data, e);
                });
            }
        }
        catch (err) {
            this.ulog.error(" autoupdater error: ");
            this.ulog.error(err);
        }
    };
    UpdateService.prototype.UpdateSyncService = function () {
        try {
            Store_1.setItem("syncdate", new Date().toISOString(), "sync -> cron");
            this.autoupdater.fire("check");
        }
        catch (error) {
            this.ulog.error(error);
            this.ulog.error("******* Error on Downlooad **********");
        }
    };
    UpdateService.prototype.initUpdate = function () {
        this.ulog.info("Update Started ... ");
        SysService_1.SysService.UpdateVersion(this.ulog);
        Store_1.setItem("syncdate", new Date().toISOString(), "sync -> main");
        try {
            this.UpdateSyncService();
        }
        catch (err) {
            this.ulog.error("Update Sync Service error ");
        }
    };
    return UpdateService;
}());
exports.UpdateService = UpdateService;
