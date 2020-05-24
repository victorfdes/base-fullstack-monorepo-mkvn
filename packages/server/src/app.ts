import * as Koa from 'koa'
import * as bodyParser from 'koa-body'
import * as cors from '@koa/cors'
import error from './error'
import rootRoutes from './routes'

// Custom Routes
import contactRoutes from './resources/contact/routes'

// Middlewares
const app = new Koa()
app.use(bodyParser())
app.use(cors())
app.use(error)

// Routes
const routes = [rootRoutes, contactRoutes]

routes.forEach(route => {
  app.use(route.routes())
  app.use(route.allowedMethods())
})

export default app
