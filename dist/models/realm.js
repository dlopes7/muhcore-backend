"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const BPromise = require("bluebird");
require('mongoose').Promise = BPromise;
mongoose.connect('mongodb://localhost/muh_core');
;
exports.RealmSchema = new mongoose.Schema({
    name: { type: String, required: true, index: { unique: true } },
    type: { type: String, required: true },
    slug: { type: String, required: true },
    battlegroup: { type: String, required: true },
    timezone: { type: String, required: true },
});
const Realm = mongoose.model('Realm', exports.RealmSchema);
exports.default = Realm;
