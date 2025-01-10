import express from 'express'
import cors from 'cors'
import config from './config'

import { skillsRouter } from './skills.data'

const app = express()
app.use(cors())


app.use('/', skillsRouter)

app.listen(config.server.port, () => console.log(`Server is running at \x1b[34mhttp://${config.server.host}:${config.server.port}/`))