import fs from 'fs';
import mongoose from 'mongoose';
import Grid from 'gridfs-stream';
import BlogPost from '../models/BlogPost.mjs';

// Initialize GridFS stream
let gfs;
const conn = mongoose.connection;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Function to upload a file to GridFS
function uploadFile(filename) {
  const writestream = gfs.createWriteStream({
    filename: filename
  });
  fs.createReadStream(filename).pipe(writestream);
  return new Promise((resolve, reject) => {
    writestream.on('close', (file) => {
      resolve(file._id);
    });
    writestream.on('error', (error) => {
      reject(error);
    });
  });
}

// Controller function to create a blog post
export const createBlogPost = async (req, res) => {
  try {
    const { title, content, files } = req.body;
    const fileIds = await Promise.all(files.map(uploadFile));
    const blogPost = new BlogPost({ title, content, files: fileIds });
    await blogPost.save();
    res.status(201).json({ message: 'Blog post created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to fetch all blog posts
export const getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to fetch a single blog post by ID
export const getBlogPostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const blogPost = await BlogPost.findById(postId);
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a blog post
export const updateBlogPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, content, files } = req.body;
    const fileIds = await Promise.all(files.map(uploadFile));
    const updatedPost = await BlogPost.findByIdAndUpdate(postId, { title, content, files: fileIds }, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post updated successfully', updatedPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to delete a blog post
export const deleteBlogPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const deletedPost = await BlogPost.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
