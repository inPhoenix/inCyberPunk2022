exports.createPostValidator = (req, res, next) => {
  //title
  req.check("title", "Write a title").notEmpty()
  req
    .check("title", "Title must be between 4 to 150 chars")
    .isLength({ min: 4, max: 150 })

  //body
  req.check("body", "Write a body").notEmpty()
  req
    .check("body", "body must be between 4 to 2000 chars")
    .isLength({ min: 4, max: 150 })

  // check for errors
  const errors = req.validationErrors()
  // if error show the first one as they happen
  if (errors) {
    const firstError = errors.map(error => error.msg)[0]
    return res.status(400).json({ error: firstError })
  }
  // proceed to next middle
  next()
}

exports.userSignupValidator = (req, res, next) => {
  req.check("name", "name is required").notEmpty()
  req
    .check("email", "email must be valid").notEmpty()
    .matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4})*$/)
    .withMessage("email must be valid")
    .isLength({
      min: 4,
      max: 2000
    })

  req.check("password", "password is required").notEmpty()
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 chars")
    .matches(/\d/)
    .withMessage("Password must contain a number")

  //check for errors
  const errors = req.validationErrors()
  // if error show the first one as they happen
  if (errors) {
    const firstError = errors.map(error => error.msg)[0]
    return res.status(400).json({ error: firstError })
  }
  // proceed to next middle
  next()
}
