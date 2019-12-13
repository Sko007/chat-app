const express = require("express")

const app = express()
const bodyparser = require("body-parser")
const messageRouter = require("./message/router")
const port = 4000
const bodyparserMiddleware = bodyparser.json()
// const Message = require("./message/model")



app.get("/", (req,res,next)=>{
    res.send("hallo")

})


app.use(bodyparserMiddleware)

app.use(messageRouter)



app.listen(port, () => {console.log(`server listen on port ${port}`)})


