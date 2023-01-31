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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlebarHelper = void 0;
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var Handlebars = __importStar(require("handlebars"));
var Log_1 = require("../utils/Log");
var HandlebarHelper = /** @class */ (function () {
    function HandlebarHelper() {
    }
    HandlebarHelper.HtmlRender = function (fileName, data) {
        var source = path.join(__dirname, "/../../assets/templates/" + fileName + ".html");
        Log_1.log.info("Html Source: " + source);
        source = fs.readFileSync(source, "utf8");
        var template = Handlebars.compile(source);
        data = JSON.parse(JSON.stringify(data));
        var result = template(data);
        Log_1.log.info(result);
        return result;
    };
    return HandlebarHelper;
}());
exports.HandlebarHelper = HandlebarHelper;
