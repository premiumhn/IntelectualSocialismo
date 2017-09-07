import * as mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  cont: String
});
const Post = mongoose.model('Post', postSchema);

export default Post;
