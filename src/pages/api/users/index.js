import users from "data/users";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const newUser = req.body;
    newUser.id = Date.now();
    const userIndex = users.findIndex(user => user.email == newUser.email)
    if (userIndex == -1) {
      users.push(newUser);
      res.status(201).json(newUser);
    } else {
      res.status(201).json("found user")
    }
  }
}
