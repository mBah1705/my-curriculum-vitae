import express from 'express'
import cors from 'cors'
import { skillsRouter } from './skills.data'

const app = express()
app.use(cors())
const port = 5200

app.use('/', skillsRouter)

app.listen(port, () => console.log(`Server is running at \x1b[34mhttp://localhost:${port}/`))