import express from 'express'
const router = express.Router()

import { getPosts,createPost } from '../controllers/post.js';


router.get('/', getPosts )

router.post('/', createPost )


export default router;