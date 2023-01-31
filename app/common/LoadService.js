"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadService = void 0;
var typeorm_1 = require("typeorm");
var RawQuery_1 = require("./RawQuery");
var LoadService = /** @class */ (function () {
    function LoadService() {
        this.db = (0, typeorm_1.getManager)();
        this.rawQuery = new RawQuery_1.RawQuery();
        // this.menuGroupRepository = new MenuGroupDAO();
    }
    return LoadService;
}());
exports.LoadService = LoadService;
