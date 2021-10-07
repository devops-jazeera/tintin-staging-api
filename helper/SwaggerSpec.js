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
var fs_1 = require("fs");
exports.default = (function () {
    var swaggerJSDoc = require("swagger-jsdoc");
    var host;
    var apiList = getAllRoutes(path.join(__dirname, "../../apispec"), []);
    return swaggerJSDoc({
        swaggerDefinition: {
            info: {
                title: "Spec",
                version: "1.0.0"
            },
            host: host,
            basePath: "/api/",
            produces: ["application/json"],
            consumes: ["application/json", "application/x-www-form-urlencoded"],
            securityDefinitions: {
                jwt: {
                    type: "apiKey",
                    name: "Authorization",
                    in: "header"
                }
            },
            security: [{ jwt: [] }]
        },
        apis: apiList
    });
    function getAllRoutes(dir, filelist) {
        var _files = fs_1.readdirSync(dir);
        filelist = filelist || [];
        _files.map(function (file) {
            // filter out .map and hidden files
            if (file.search(".map") < 0 && file.search(/^\./) < 0) {
                if (fs_1.statSync(path.join(dir, file)).isDirectory()) {
                    filelist = getAllRoutes(path.join(dir, file), filelist);
                }
                else {
                    if (file.search(".yaml") > 0) {
                        filelist.push(path.join(dir, file));
                    }
                }
            }
        });
        return filelist;
    }
});
