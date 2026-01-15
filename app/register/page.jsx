"use client"
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  let userName = useRef(null)
    let email = useRef(null)
      let password = useRef(null)

      const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log("fun called")
        try {
          const res = await fetch("https://two026-e-commerce-jewellery-backend.onrender.com/user/signup",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({userName:userName.current.value, email:email.current.value, password:password.current.value})
          })
          const data = await res.json();
           console.log(data, "data fetched")
          if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }
          localStorage.setItem("token", data.token)
          router.push("/")

        } catch (error) {
          console.log(error)
        }
      }


  return (
    <main className="min-h-screen flex items-center justify-center  px-4">

      <div className="w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-sm p-8">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Register to a new account 
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}  className="space-y-5">

          <input
            type="text"
            placeholder="Full name"
            name="userName"
            ref={userName}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <input
            type="email"
            placeholder="Email address"
            name="email"
            ref={email}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <input
            type="password"
            ref={password}
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-black transition">
            Create Account
          </button>

        </form>

        {/* FOOTER */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-gray-600 font-medium underline"
          >
            Login
          </Link>
        </div>

      </div>

    </main>
  );
}
