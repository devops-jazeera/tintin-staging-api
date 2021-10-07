"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
