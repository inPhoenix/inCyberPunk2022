const express = require("express")
const chalk = require("chalk")
const morgan = require("morgan")
const log = console.log
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const expressValidator = require("express-validator")
const cors = require("cors")
const fs = require('fs')

dotenv.config()

/*
  Database
*/

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  log(chalk.yellow("DB connected"))
})

mongoose.connection.on("error", err => {
  log(chalk.red(`connection error ${err.message}`))
})

const app = express()

/*
  Routes
*/

const postRoute = require("./routes/post")
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")

/*
  Api Docs
 */


app.get('/docs', (req,res) => {
  fs.readFile('docs/apiDocs.json', (err, data) => {
    if(err) {
      res.status(400).json({
        error: err
      })
    }
    const docs = JSON.parse(data)
    res.json(docs)
  })
})


console.log('process.env.NODE_ENV::::::::::::', process.env.NODE_ENV)

const origin = process.env.NODE_ENV === 'production' ?
  'https://cybersocial.herokuapp.com' :
  'http://localhost:3000';

/*
  middleware
*/

if (['production'].includes(process.env.NODE_ENV)) {
  app.use(express.static('../client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    console.log('im HEEERE')
    res.sendFile(path.resolve('../client', 'build', 'index.html'));
  });
}

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
//app.use(cors())
app.use(cors({ origin, credentials: true }));
app.use("/", postRoute)
app.use("/", authRoutes)
app.use("/", userRoutes)

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({error: 'Unauthorized'});
  }
});

// // react stuff
//
// const test = true;
//
// if (test) {
//   app.use(express.static('client/build'));
//
//   const path = require('path');
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve('client', 'build', 'index.html'));
//   });
// }




const port = process.env.PORT || 8080

app.listen(port, () => {
  log(chalk.blue(`Welcome.... The App is listening to  ${port}`))
})
