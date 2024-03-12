import sql from "@/db/connector";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export default async function handler(req, res) {
  if (req.method == "POST") {
    // const { username, email, password: Cpass } = req.body;
    // const userArr = await sql({
    //   query: `SELECT password, id, username, email, ip, realname FROM authme WHERE ${
    //     username ? `username='${username}'` : `email='${email}'`
    //   };`,
    // });
    // console.log(userArr)
    // if (userArr[0]) {
    //   const { id, password, email, username, realname, ip } = userArr[0];
    //   const match = await bcrypt.compare(Cpass, password);
    //   if (match) {
    //     const token = jwt.sign(
    //       {
    //         id,
    //         email: email || null,
    //         username,
    //         realname,
    //         ip,
    //       },
    //       process.env.JWT_SECRET
    //     );
    //     return res.status(200).json({ next : true,msg: "Signed in", token });
    //   }
    //   else {
    //     return res.status(401).json({msg : "Incorrect Password"})
    //   }
    // } else {
    //   return res
    //     .status(400)
    //     .json({ msg: `${username ? "Username" : "Email"} not registered` });
    // }
  }
}
