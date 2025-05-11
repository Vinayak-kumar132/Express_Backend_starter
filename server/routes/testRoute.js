// routes/testRoute.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Backend working fine!' });
});

export default router; 
