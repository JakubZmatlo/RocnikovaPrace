var createError = require('http-errors');
var express = require('express');
const port = 4000;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require("multer");
const mongoose = require('mongoose');
mongoose
  .connect(`mongodb+srv://admin:adminadmin@cluster0.kstps.mongodb.net/eshop?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

var app = express();
const Product = require('./models/products');
const Users = require('./models/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', (req, res, next) => {
  console.log(`[DEBUG] Přijat požadavek: ${req.method} ${req.originalUrl}`);
  next();
});
app.use('/products', productsRouter);

app.get("/", (req, res) => {
  res.send("App is running")
})

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({ storage: storage })

app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  })
})

app.post('/signup', async (req, res) => {

  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success: false, errors: "User with this email address already exists" })
  }

  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  })

  await user.save();

  const data = {
    user: {
      id: user.id
    }
  }

  const token = jwt.sign(data, 'secret_ecom');
  res.json({ success: true, token })

})

app.post('/login', async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passwordCompare = req.body.password === user.password;
    if (passwordCompare) {
      const data = {
        user: {
          id: user.id
        }
      }
      const token = jwt.sign(data, 'secret_ecom')
      res.json({ success: true, token });
    }
    else {
      res.json({ success: false, errors: "Wrong password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong email address" })
  }
})

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port " + port)
  }
  else {
    console.log("Error: " + error)
  }
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
