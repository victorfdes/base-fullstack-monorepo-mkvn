import IContact from './interface'
import Contact from './model'

export const createContact = async ctx => {
  const beer: IContact = ctx.request.body

  await Contact.create(beer)

  ctx.body = {
    message: 'created'
  }
}

export const findContacts = async ctx => {
  const contacts = await Contact.find()

  ctx.body = { contacts }
}

export const updateContact = async ctx => {
  await Contact.findByIdAndUpdate(ctx.params.id, ctx.request.body)

  ctx.body = {
    message: 'updated'
  }
}

export const removeContact = async ctx => {
  await Contact.findByIdAndRemove(ctx.params.id)

  ctx.body = {
    message: 'removed'
  }
}
