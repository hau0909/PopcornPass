"use client";
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');
        try {
            await login(email, password);
        } catch (error: any) {
            setErrorMsg(error.message);
        }
    };


    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-2" autoComplete="off">
                {errorMsg && <div className="text-red-400 text-sm font-semibold mb-1">{errorMsg}</div>}
                <div className="space-y-0.5 text-left">
                    <label className="text-[10px] font-bold text-[#8a99ba] uppercase tracking-wider">Email address</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-[#4f6494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="stargazer@galaxy.com"
                            autoComplete="off"
                            className="w-full bg-[#04113b] text-[#8a99ba] placeholder-[#384a75] pl-12 pr-4 py-2 rounded-xl border border-transparent focus:outline-none focus:border-[#4b70f5] transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-0.5 text-left mt-2">
                    <label className="text-[10px] font-bold text-[#8a99ba] uppercase tracking-wider">Password</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-[#4f6494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" />
                            </svg>
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            autoComplete="new-password"
                            className="w-full bg-[#04113b] text-[#8a99ba] placeholder-[#384a75] pl-12 pr-12 py-2 rounded-xl border border-transparent focus:outline-none focus:border-[#4b70f5] tracking-widest transition-all"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center group">
                            {showPassword ? (
                                <svg className="h-5 w-5 text-[#8a99ba] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5 text-[#8a99ba] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex justify-end mt-1">
                        <a href="#" className="text-[10px] text-[#8a99ba] hover:text-[#4b70f5] transition-colors hover:underline">Forgot Password?</a>
                    </div>
                </div>

                <button className="w-full mt-2 font-manrope bg-[#3c5cd8] hover:bg-[#4b70f5] text-white font-bold py-2.5 px-4 rounded-full shadow-[0_0_20px_rgba(75,112,245,0.3)] border border-dashed border-[#8eb5ff]/50 transition-all duration-500 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_0_35px_rgba(75,112,245,0.6)]">
                    Sign In
                </button>

                <div className="py-2 relative flex items-center">
                    <div className="flex-grow border-t border-[#1a2b5e]"></div>
                    <span className="flex-shrink-0 mx-4 text-[10px] font-bold text-[#384a75] bg-[#0b1a43] px-3 py-1 rounded-full uppercase tracking-wider">OR CONTINUE WITH</span>
                    <div className="flex-grow border-t border-[#1a2b5e]"></div>
                </div>

                <div className="flex justify-between gap-4">
                    <button type="button" className="flex-1 bg-[#04113b] flex justify-center items-center py-2 rounded-xl text-sm text-white font-medium hover:bg-[#0a194f] shadow-md border border-[#1a2b5e] transition-all hover:scale-[1.02]">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-2" alt="Google" />
                        Google
                    </button>
                    <button type="button" className="flex-1 bg-[#04113b] flex justify-center items-center py-2 rounded-xl text-sm text-white font-medium hover:bg-[#0a194f] shadow-md border border-[#1a2b5e] transition-all hover:scale-[1.02]">
                        <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        Facebook
                    </button>
                </div>
            </form>
        </div>
    );
}
