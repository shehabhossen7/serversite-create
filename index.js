const express = require("express");
const cors = require("cors");
const bodyPerser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyPerser());

app.get("/", (req, res) => {
  res.send("connect");
});

const users = [
  {
    id: 1,
    name: "Leadvnne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age: "45",
  },
  {
    id: 2,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age: "45",
  },
  {
    id: 3,
    name: "Learne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age: "45",
  },
  {
    id: 4,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age: "45",
  },
  {
    id: 5,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age: "45",
  },
  {
    id: 6,
    name: "Lean Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age: "45",
  },
  {
    id: 7,
    name: "Leane Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age: "45",
  },
  {
    id: 8,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age: "45",
  },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("porst active", port);
});
