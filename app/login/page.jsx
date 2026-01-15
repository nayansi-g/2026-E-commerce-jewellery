"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Login() {
  const router = useRouter()
  let email = useRef(null)
  let password = useRef(null)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:8000/user/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email:email.current.value,password:password.current.value})
      })
      const data = await res.json();
      localStorage.setItem("token", data.token)
      if(!res.ok){
        alert("this is not the right response")
        return;
      }
      router.push("/")
      // let email =""
      // let password =""

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <main className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-sm p-8">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Login to access the your account
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            name="email"
            ref={email}
            placeholder="Email address"
            className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <input
            type="password"
            name="password"
            ref={password}
            placeholder="Password"
            className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-black transition">
            Login
          </button>

        </form>

        {/* FOOTER */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-gray-800 underline font-medium hover:underline"
          >
            Sign up
          </Link>
        </div>

      </div>

    </main>
  );
}
