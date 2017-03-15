"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger_1 = require("../../utils/logger");
const views_1 = require("../../views");
let router = express.Router();
logger_1.default.debug('Setting up routes');
router.get('/realms', (req, res, next) => {
    views_1.default.getRealms().then(viewResponse => {
        res.json(viewResponse);
    });
});
router.get('/realms/:realm_slug', (req, res, next) => {
    views_1.default.getRealmBySlug(req.params.realm_slug).then(viewResponse => {
        if (viewResponse == null) {
            res.status(404).json({ 'error': true, 'error_message': `Realm ${req.params.realm_slug} does not exist` });
        }
        else {
            res.json(viewResponse);
        }
    });
});
exports.default = router;
