import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";


export default function RegisterForm() {
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassowrd,setConfirmPassword] = useState('');
    const [contact,setContact] = useState('');
    const [errors,setErrors] = useState('');
    const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState(false);
    const [showconfirmPassword,setShowConfirmPassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(!fullName || fullName.length==0){
            setErrors('Please enter valid username');
        }
        else if(!password || password.length==0){
            setErrors('Please enter a valid password');
        }
        else if (!password.match(confirmPassowrd)){
            setErrors('Check your Passwords');
        }
        else if (password.length<4){
            setErrors('Password should be greater than 4 characters')
        }
        else if(!confirmPassowrd || confirmPassowrd.length==0){
            setErrors('Please enter valid confirm password');
        }
        else if(!contact || contact.length!=10){
            setErrors('Please enter a valid contact');
        }
        else{
            navigate('/login');
        }
    };

    return (
        <div className="min-h-screen h-[100vh] bg-[#0f172a] flex items-center justify-center px-4 font-tech">
            
            <div className="w-full max-w-md h-[95vh] bg-[#1e293b] rounded-2xl shadow-2xl p-8 mt-5">
                
                <div className="flex justify-center mb-3">
                    <img
                        src={Logo}
                        alt="AutoForenX Logo"
                        className="w-24 h-24 object-contain"
                    />
                </div>

                <div className="text-center mb-8">
                    

                    <p className="text-gray-400">
                        Welcome To AutoForenX
                    </p>
                    <p className="text-center text-gray-500 text-sm mt-3">
                    Create your Account here
                    </p>
                </div>

                
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                >
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) =>
                                setFullName(e.target.value)
                            }
                            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                className="w-full p-3 pr-12 rounded-lg bg-[#0f172a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 spacing-2"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
                            >
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Confirm Password
                        </label>
                    
                        <div className="relative">
                            <input
                                type={showconfirmPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={confirmPassowrd}
                                onChange={(e) =>
                                setConfirmPassword(e.target.value)}
                                className="w-full p-3 pr-12 rounded-lg bg-[#0f172a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 spacing-2"
                                />                     
                    
                                <button
                                    type="button"
                                    onClick={() =>
                                    setShowConfirmPassword(!showconfirmPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
                                    >
                                    {showconfirmPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Contact
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your contact"
                            value={contact}
                            onChange={(e) =>
                                setContact(e.target.value)
                            }
                            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                    {errors && <div className="p-3 w-auto bg-red-300 font-tech font-sm">
                        {errors}
                    </div>
                    }

                    <button
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-lg"
                    >
                        Register
                    </button>
                </form>
                

                {/* Footer */}
                {/* <p className="text-center text-gray-500 text-sm mt-3">
                    Secure access to AutoForenX Dashboard
                </p> */}
                <p className="font-xs font-tech text-white mt-2">Already have an account ? <a href='/' className="text-blue-300 underline">Login</a></p>
            </div>
        </div>
    );
}