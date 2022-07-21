import express from 'express';
import Create from './Create';
import Delete from './Delete';
import Get from './Get';
import List from './List';
import Update from './Update';

const router = express.Router();

router.post('/category', Create);
router.delete('/category/:id', Delete);
router.get('/:id', Get);
router.get('/:id', List);
router.put('/category/:id', Update);

export default router;
