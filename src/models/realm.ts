import * as mongoose from 'mongoose'


export interface Realm extends mongoose.Document {
  name: string; 
  type: string;
  slug: string;
  battlegroup: string;
  timezone: string;
  

};

export const RealmSchema = new mongoose.Schema({
  name: {type:String, required: true, index: {unique: true}},
  type: {type:String, required: true},
  slug: {type:String, required: true},
  battlegroup: {type:String, required: true},
  timezone: {type:String, required: true},
});

const Realm = mongoose.model<Realm>('Realm', RealmSchema);
export default Realm;