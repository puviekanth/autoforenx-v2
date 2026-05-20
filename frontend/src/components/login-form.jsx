import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userName || userName.length == 0) {
            setErrors('Please enter valid username');
        }
        else if (!password || password.length == 0) {
            setErrors('Please enter a valid password');
        }
        else {
            navigate('/home');
        }
    };

    const resetPassword = (e) => {
        alert('Link sent to email')
    }

    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 font-tech">

            <div className="w-full max-w-md bg-[#1e293b] rounded-2xl shadow-2xl p-8">

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src={Logo}
                        alt="AutoForenX Logo"
                        className="w-24 h-24 object-contain"
                    />
                </div>

                {/* Heading */}
                <div className="text-center mb-8">
                    <p className="text-gray-400">
                        Login to continue
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                >
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={userName}
                            onChange={(e) =>
                                setUsername(e.target.value)
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

                    {errors && (
                        <div className="p-3 w-auto bg-red-300 font-tech font-sm">
                            {errors}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-lg"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-500 text-sm mt-3">
                    Secure access to AutoForenX Dashboard
                </p>

                <p className="font-xs font-tech text-white mt-6">
                    Forgot Password ?{" "}
                    <a
                        href="#"
                        onClick={resetPassword}
                        className="text-blue-300 underline"
                    >
                        Reset Password
                    </a>
                </p>

                <p className="font-xs font-tech text-white mt-2">
                    Don't have an account ?{" "}
                    <a
                        href="/register"
                        className="text-blue-300 underline"
                    >
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}