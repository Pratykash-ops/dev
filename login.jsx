import { useRouter } from "next/router";
import React, { useState } from "react";

export default function login() {
  const router = useRouter()
  const [Credentials, setCredentials] = useState({
    emailOrUsername: "",
    password: "",
    showPass : false,
    errMsg: ""
  });
  const submit = async (e)=>{
    e.preventDefault()
    let isEmail = Credentials.emailOrUsername.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    let body = {
        username : Credentials.emailOrUsername.trim().toLowerCase(),
        password : Credentials.password.trim()
    }
    if(isEmail){
        delete body.username;
        body.email = Credentials.emailOrUsername;
    }
    fetch("/api/user/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(body)
    }).then(async(raw)=>{
        const res = await raw.json();
      if(raw.ok){
        if(res.next){
          localStorage.setItem("hyosan_player_token", res.token)
          router.push("/account")
        }
      }
      else{
        setCredentials((prev)=>({...prev, errMsg : res.msg}))
      }
    })
  }
  const handleChange = (e) =>{
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full bg-gradient-to-r from-gray-900 to-base-200 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8">
        <h2 className="text-center text-4xl font-extrabold text-white">
          Welcome
        </h2>
        <p sclassName="text-center text-gray-200">
          Credentials are same as You used in-game.
        </p>
        <form onSubmit={submit} className="space-y-6">
          <div className="relative">
            <input
              placeholder="email or username"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-primary"
              required=""
              id="email"
              name="emailOrUsername"
              value={Credentials.emailOrUsername}
              onChange={handleChange}
              type="text"
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
              for="email"
            >
              Email or Username
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-primary"
              required="true"
              id="password"
              name="password"
              value={Credentials.password}
              onChange={handleChange}
              type={Credentials.showPass?'text':"password"}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
              for="password"
            >
              Password
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input
                className="form-checkbox h-4 w-4 text-primary bg-gray-800 border-gray-300 rounded"
                type="checkbox"
                name="showPass"
                onChange={(e)=>{
                    setCredentials((prev) => ({ ...prev, showPass: e.target.checked }));
                }}
              />
              <span className="ml-2">Show password</span>
            </label>
            <a className="text-sm text-primary hover:underline" href="#">
              Forgot your password?
            </a>
          </div>
          <span className="text-red-500">{Credentials.errMsg}</span>
          <button
            className="w-full py-2 px-4 bg-primary hover:bg-secondary rounded-md shadow-lg text-white font-semibold transition duration-200"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="text-center text-primary">
          Don't have an account? Create in-game
        </div>
      </div>
    </div>
  );
}
