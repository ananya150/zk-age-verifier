import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  address: string;
  proof: string,
}

const UserSchema: Schema = new Schema({
  _id:mongoose.Schema.Types.ObjectId,
  address: {type: String , required: true , unique: true},
  proof: {type: String , required: false },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);