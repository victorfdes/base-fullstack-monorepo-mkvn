import * as Router from 'koa-router'
import {
  createContact,
  findContacts,
  updateContact,
  removeContact
} from './resolver'

const router = new Router({
  prefix: '/api'
})

router.post('/contact', createContact)
router.get('/contact', findContacts)
router.put('/contact/:id', updateContact)
router.delete('/contact/:id', removeContact)

export default router
