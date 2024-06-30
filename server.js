import express from 'express'
const app = express()
import morgan from 'morgan'
import * as dotenv from 'dotenv'
dotenv.config()

// routers

// import router from './routers/jobRouters';
import mongoose from 'mongoose'
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


app.use(express.json())

// app.use('/api/v1/jobs', router);


app.get('/', (req, res) => {
    res.status(200).json({message: 'hello'})
})

// app.use('api/v1/jobs', router)

// Not found middleware

app.use('*', (req,res) => {
    res.status(404).json({ msg: 'not found' })
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({msg: 'Something went wrong'})
})

const port = process.env.PORT

try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () =>{
        console.log(`server running on port ${port}`)
    })
} catch (error) {
    console.log(error)
    process.exit(1)
}