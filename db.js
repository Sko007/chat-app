const Sequelize = require("sequelize")

const databaseUrl = process.env.DATABASE || 'postgres://postgres:secret@localhost:5432/postgres'


const db = new Sequelize(databaseUrl)

db.sync({force: false})

    .then(()=>{ console.log("db connect")})


module.exports = db