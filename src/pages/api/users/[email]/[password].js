import users from "data/users";

export default function handler(req, res) {
  if (req.method === "GET") {
    const email = req.query.email;
    const password = req.query.password;
    const user = users.find(
      (user) => user.email == email && user.password == password
    );
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(200).json("not found");
    }
  }
}
