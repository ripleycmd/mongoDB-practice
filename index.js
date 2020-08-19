const mongoose = require('mongoose');
const express = require('express');
const UserSchema = require('./models/userModel'); //** it a model tat has a reference in the database */
require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.db_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('connected to mongoDB'))
  .catch((e) => console.log(e));

app.use(express.json());
app.use(express.urlencoded());

app.get('/users', async(req, res)=>{
  let users = await UserSchema.find({});
res.send(users)
})

app.post('/createUser', (req, res) => {
  const { name, email, phoneNumber } = req.body;
  const user = new UserSchema({
    name,
    email,
    phoneNumber,
  });
  user.save;
  res.send('user was created ');
});

app.get('./NewReq', (req,res) => {
  let users = await UserSchema.find({});

})

app.listen(3000);

// const user1 = new UserSchema({
//   name: 'ann',
//   email: 'ann@email.com',
//   phoneNumber: 98763547,
// });

// user1.save();
// log

// const getAllUsers = async () => {
//   // let users = await UserSchema.find({});
//   let users = await UserSchema.findOne({ name: 'ann' });
//   console.log(users);
// };

// getAllUsers();
