import * as mongoose from 'mongoose';

export interface Realm extends mongoose.Document {
  name: string; 
};

export const RealmSchema = new mongoose.Schema({
  name: {type:String, required: true},
});

const Realm = mongoose.model<Realm>('Realm', RealmSchema);
export default Realm;