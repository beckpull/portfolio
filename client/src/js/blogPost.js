import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  // Fetch all blog posts
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('/blog');
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    fetchBlogPosts();
  }, []);

  // Function to delete a blog post
  const deleteBlogPost = async (postId) => {
    try {
      await axios.delete(`/blog/${postId}`);
      setBlogPosts(blogPosts.filter(post => post._id !== postId));
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => deleteBlogPost(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
