
import Realm from '../models/realm';

export class Views {

    public logger: any;

    constructor(app){
        this.logger = app.logger;
    }

    public getRealms(): any {

        return Realm.find({}, {
            _id: 0,
            __v: 0
        }).then(docs => {
            this.logger.debug(`Retrieved ${docs.length} realms from mongo`);
            return docs;

        }).catch(err => {
            this.logger.error(`Error getting realms from mongo ${err}`);
        });
    }

    public getRealmBySlug(slug: string): any {

        return Realm.findOne({
            slug: slug
        }, {
            _id: 0,
            __v: 0
        }).then(doc => {
            this.logger.debug(`Retrieved the realm ${doc} from mongo`);
            return doc;

        }).catch(err => {
            this.logger.error(`Error getting ${slug} realm from mongo ${err}`)
        });

    }

}
