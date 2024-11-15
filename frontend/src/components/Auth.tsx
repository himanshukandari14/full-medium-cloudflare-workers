import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@himanshu14/medium-common";
import { BACKEND_URL } from "../config";
import axios from "axios";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    username: "",
    email:"",
    password: ""
  });

async function sendRequest(){
  try {
    const response = await axios.post(`${BACKEND_URL}api/v1/user/${type==="signup"?"signup":"signin"}`, postInputs)
    const jwt = response.data;
    console.log(jwt)
    localStorage.setItem("token", jwt);
    navigate("/blogs")
    
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className="h-screen flex flex-col justify-center items-center">
     
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl font-bold">Create an account</div>
      </div>
      <div className="text-slate-400 flex justify-center items-center">
        {type === "signin"? "Don't have and account?":"Already have an account"}
        
    
        <Link className="underline" to={type==="signin"?"/signup":"/signin"}>
         {type === "signin"? "Sign up" :"Sign in"}
        </Link>
      </div>
      <LabelledInput
        label="username"
        placeholder="hymanshu"
        onChange={(e) => {
          setPostInputs({ ...postInputs, username: e.target.value });
        }}
      />
      {type === "signup"?( <LabelledInput
        label="email"
        placeholder="xyz@gmail.com"
        onChange={(e) => {
          setPostInputs({ ...postInputs, email: e.target.value });
        }}
      />):(null)}
      
      <LabelledInput
        label="Password"
        placeholder="hymanshu"
        type="password"
        onChange={(e) => {
          setPostInputs({ ...postInputs, password: e.target.value }); 
        }}
      />
      
<button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-28 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup"?"Sign up":"Sign in"}</button>
    </div>
  );
};

export default Auth;

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInput = ({ label, placeholder, onChange, type }: LabelledInputType) => {
  return (
    <div className="flex flex-col justify-center  min-h-[100px] ">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
        {label}
      </label>
      <input
    
        onChange={onChange} 
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg=white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />



    </div>
  );
};
