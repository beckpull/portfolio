import express from 'express';
import { 
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
} from '../controllers/blogController.mjs';

const router = express.Router();

router.route('/').get(getAllBlogPosts).post(createBlogPost);
router.route('/:postId').get(getBlogPostById).put(updateBlogPost).delete(deleteBlogPost);

router.use((req, res) => {
    return res.send('Wrong route!');
});

export default router;