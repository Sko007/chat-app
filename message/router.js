const express = require("express");

const Message = require("./model");

const { Router } = express;

const router = new Router();

router.get("/message", async (req, res, next) => {
    
    const messages = await Message.findAll()
            
    res.send(messages)
 
    .catch(next);
});

// normal fetch without async await

// router.get("/message", (req, res, next) => {
//     Message.findAll()
//       .then(message => {
//         res.send(message);
//       })
  
//       .catch(next);
//   });



router.post("/message", async (req, res, next) => {
  const message = 
  await Message.create(req.body)
    res.send(message)
  .catch(next);
});

module.exports = router;
