import { Router } from 'express'
import *  as  expenseCtrl from  '../controllers/expense.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


/*----------- Protected Routes -----------*/

router.use(decodeUserFromToken)
router.get('/', checkAuth, expenseCtrl.index)
router.post('/', checkAuth, expenseCtrl.create)
router.put('/:id', checkAuth, expenseCtrl.update)
router.delete('/:id', checkAuth, expenseCtrl.delete)

export { router }

