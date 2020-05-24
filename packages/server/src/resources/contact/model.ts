import {
  Schema,
  model
} from 'mongoose'

const ContactSchema = new Schema(
  {
    fName: {
      type: String,
      required: true
    },
    lName: {
      type: String,
      required: false
    },
    company: {
      type: String,
      required: false
    },
    jobTitle: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
    collection: 'contact'
  }
)

const Contact = model('Contact', ContactSchema)

export default Contact
