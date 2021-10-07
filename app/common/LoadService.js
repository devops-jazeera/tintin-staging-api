"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var RawQuery_1 = require("./RawQuery");
var LoadService = /** @class */ (function () {
    function LoadService() {
        this.db = typeorm_1.getManager();
        this.rawQuery = new RawQuery_1.RawQuery();
        // this.menuGroupRepository = new MenuGroupDAO();
    }
    return LoadService;
}());
exports.LoadService = LoadService;
