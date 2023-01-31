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
        var _files = (0, fs_1.readdirSync)(dir);
        filelist = filelist || [];
        _files.map(function (file) {
            // filter out .map and hidden files
            if (file.search(".map") < 0 && file.search(/^\./) < 0) {
                if ((0, fs_1.statSync)(path.join(dir, file)).isDirectory()) {
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
