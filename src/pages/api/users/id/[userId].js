import users from "data/users";

export default function handler(req, res) {
  const userId = req.query.userId;
  if (req.method === "GET") {
    const user = users.find((user) => user.id == userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(200).json("not found")
    }
  } else if (req.method === "PATCH") {
    const userIndex = users.findIndex((user) => user.id == userId);
    users[userIndex] = req.body;
    res.status(200).json(req.body);
  }
}
