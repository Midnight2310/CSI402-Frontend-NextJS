"use client";
import TextInput from "../app/component/TextInput";
import React from "react";
import Link from "next/link";



export default function Home() {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const registeredUsers = [
    { username: "admin", password: "admin" },
    { username: "user1", password: "password1" },
  ];

  
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const user = registeredUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // หากเข้าสู่ระบบสำเร็จ
      alert("เข้าสู่ระบบสำเร็จ!"); 
    } else {
      // หากไม่มีสิทธิ์
      alert("ไม่มีสิทธิ์เข้าใช้งาน! กรุณาลงทะเบียน");
    }
  };

  return (
    <div className="bg-blue-500 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TextInput
        labelText="Username"
        inputId="txtUsername"
        onChange={handleUserNameChange}
      />
      <TextInput
        labelText="Password"
        inputId="txtPassword"
        onChange={handlePassWordChange}
      />
      <button
        id="btnSend"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
      <Link href={"/about/register"}>Register</Link>
              
    </div>
  );
}
