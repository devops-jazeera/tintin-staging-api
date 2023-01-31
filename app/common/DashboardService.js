"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
var typeorm_1 = require("typeorm");
var DashboardService = /** @class */ (function () {
    function DashboardService() {
        this.db = (0, typeorm_1.getManager)();
    }
    return DashboardService;
}());
exports.DashboardService = DashboardService;
