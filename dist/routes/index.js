"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const api_1 = require("./api");
let router = express.Router();
router.use('/api/v1', api_1.default);
exports.default = router;
