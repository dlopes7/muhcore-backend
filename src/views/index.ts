import Logger from '../utils/logger';
import Realm from '../models/realm';

class Views {

    public getRealms(): any {

        return Realm.find({}, {_id: 0 , __v: 0}).then(docs => {
            Logger.debug(`Retrieved ${docs.length} realms from mongo`);
            return docs;

        }).catch(err => {

            Logger.error(`Error getting realms from mongo ${err}`);
           
        });
    }

    public getRealmBySlug(slug: string): any {

         return Realm.findOne({slug: slug}, {_id: 0 , __v: 0}).then(doc => {
            Logger.debug(`Retrieved the realm ${doc} from mongo`);
            return doc;

        }).catch(err => {
            Logger.error(`Error getting ${slug} realm from mongo ${err}`)
        });

    }

}

export default new Views();