"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
;
exports.RealmSchema = new mongoose.Schema({
    name: { type: String, required: true },
});
const Realm = mongoose.model('Realm', exports.RealmSchema);
exports.default = Realm;
