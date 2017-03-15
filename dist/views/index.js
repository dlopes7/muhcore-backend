"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
const realm_1 = require("../models/realm");
class Views {
    getRealms() {
        return realm_1.default.find({}, { _id: 0, __v: 0 }).then(docs => {
            logger_1.default.debug(`Retrieved ${docs.length} realms from mongo`);
            return docs;
        }).catch(err => {
            logger_1.default.error(`Error getting realms from mongo ${err}`);
        });
    }
    getRealmBySlug(slug) {
        return realm_1.default.findOne({ slug: slug }, { _id: 0, __v: 0 }).then(doc => {
            logger_1.default.debug(`Retrieved the realm ${doc} from mongo`);
            return doc;
        }).catch(err => {
            logger_1.default.error(`Error getting ${slug} realm from mongo ${err}`);
        });
    }
}
exports.default = new Views();
