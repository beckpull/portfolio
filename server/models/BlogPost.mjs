import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Upload' }]
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;