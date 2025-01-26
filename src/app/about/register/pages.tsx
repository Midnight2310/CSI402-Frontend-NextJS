import TextInput from "@/app/component/TextInput";
import React from "react";
import { useRouter } from "next/navigation"; // ใช้สำหรับเปลี่ยนเส้นทาง

const Register = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const router = useRouter();

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    if (username && password) {
      alert("ลงทะเบียนสำเร็จ!");
      router.push("/"); // กลับไปหน้า Login (หน้า Home)
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
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
        id="btnRegister"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
