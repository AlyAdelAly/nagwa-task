import express from 'express';
import { findRank } from '../controllers/rankController.js';
const router = express.Router();

router.post('/', findRank);

export default router;