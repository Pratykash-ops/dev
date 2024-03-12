// import jwt from "jsonwebtoken"
// import sql from "@/db/connector";
export default async function handler(req, res) {
    if(req.method=="GET"){
        // const token = req.query.token;
        // if(!token){
        //     return res.status(400).json({msg : "Wrong authentication performed"})
        // }
        // try {
        //     const user = jwt.verify(token, process.env.JWT_SECRET);
        //     if(user.id){
        //         const userData = await sql({query :`SELECT authme.id, authme.username, authme.realname, authme.ip, authme.lastlogin, authme.regdate, authme.email, xconomy.balance FROM authme, xconomy WHERE authme.username='${user.username}' AND xconomy.player='${user.realname}';`});
        //         // const bankDetails = await sql({query : `SELECT balance FROM xconomy WHERE player='${user.realname}';`})
        //         console.log(userData)
        //         return res.status(200).json({data : userData[0]})
        //     }
        // } catch (error) {
        //     return res.status(400).json({msg : "Invalid token"})
        // }

    }
  }
  