"use client";
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // UI Visibility States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register } = useAuth();

  const calculateStrength = (pass: string) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length > 5) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return Math.min(4, score);
  };

  const strength = calculateStrength(password);

  const getIndicatorColor = (index: number) => {
    if (strength === 0 && password.length > 0 && index === 0) return 'bg-[#ff6b6b] shadow-[0_0_10px_#ff6b6b]'; // Weak (red)
    if (strength < index + 1) return 'bg-[#4f6494]';
    if (strength === 1) return 'bg-[#feca57] shadow-[0_0_10px_#feca57]'; // Fair
    if (strength === 2) return 'bg-[#48dbfb] shadow-[0_0_10px_#48dbfb]'; // Good
    if (strength >= 3) return 'bg-[#1dd1a1] shadow-[0_0_10px_#1dd1a1]'; // Strong
    return 'bg-[#4f6494]';
  };

  const getStrengthText = () => {
    if (!password) return "Weak";
    if (strength <= 0) return "Too Short";
    if (strength === 1) return "Fair";
    if (strength === 2) return "Good";
    if (strength >= 3) return "Strong";
    return "Weak";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (password !== confirmPassword) {
      return setErrorMsg("Passwords do not match!");
    }
    try {
      const fullName = `${firstName.trim()} ${lastName.trim()}`;
      await register(fullName, email, password);
    } catch (error: any) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-2" autoComplete="off">
        {errorMsg && <div className="text-red-400 text-sm font-semibold mb-1">{errorMsg}</div>}

        <div className="flex gap-4">
          <div className="space-y-0.5 text-left flex-1">
            <label className="text-[10px] font-bold text-[#8a99ba] uppercase tracking-wider">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Star"
              autoComplete="off"
              className="w-full bg-[#04113b] text-[#8a99ba] placeholder-[#384a75] px-4 py-2 rounded-xl border border-transparent focus:outline-none focus:border-[#4b70f5] transition-all"
            />
          </div>
          <div className="space-y-0.5 text-left flex-1">
            <label className="text-[10px] font-bold text-[#8a99ba] uppercase tracking-wider">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Gazer"
              autoComplete="off"
              className="w-full bg-[#04113b] text-[#8a99ba] placeholder-[#384a75] px-4 py-2 rounded-xl border border-transparent focus:outline-none focus:border-[#4b70f5] transition-all"
            />
          </div>
        </div>

        <div className="space-y-0.5 text-left">
          <label className="text-[10px] font-bold text-[#8a99ba] uppercase tracking-wider">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="stargazer@galaxy.com"
            autoComplete="off"
            className="w-full bg-[#04113b] text-[#8a99ba] placeholder-[#384a75] px-4 py-2 rounded-xl border border-transparent focus:outline-none focus:border-[#4b70f5] transition-all"
          />
        </div>

        <div className="space-y-0.5 text-left">
          <label className="text-[10px] font-bold text-[#8a99ba] uppercase tracking-wider">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="new-password"
              className="w-full bg-[#04113b] text-[#8a99ba] placeholder-[#384a75] pl-4 pr-12 py-2 rounded-xl border border-transparent focus:outline-none focus:border-[#4b70f5] tracking-widest transition-all"
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

          {/* Dynamic Strength Meter */}
          <div className="flex justify-between items-center mt-2 px-1 transition-all">
            <span className="text-[10px] uppercase font-bold text-[#8a99ba]">Strength</span>
            <div className="flex gap-1 border-t border-transparent">
              <div className={`h-1 w-8 rounded-full transition-all duration-300 ${getIndicatorColor(0)}`}></div>
              <div className={`h-1 w-8 rounded-full transition-all duration-300 ${getIndicatorColor(1)}`}></div>
              <div className={`h-1 w-8 rounded-full transition-all duration-300 ${getIndicatorColor(2)}`}></div>
              <div className={`h-1 w-8 rounded-full transition-all duration-300 ${getIndicatorColor(3)}`}></div>
            </div>
            <span className={`text-[10px] uppercase font-bold w-12 text-right transition-colors ${strength >= 3 ? 'text-[#1dd1a1]' : strength === 2 ? 'text-[#48dbfb]' : 'text-[#8a99ba]'}`}>
              {getStrengthText()}
            </span>
          </div>
        </div>

        <div className="space-y-0.5 text-left">
          <label className="text-[10px] font-bold text-[#8a99ba] uppercase tracking-wider">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="new-password"
              className="w-full bg-[#04113b] text-[#8a99ba] placeholder-[#384a75] pl-4 pr-12 py-2 rounded-xl border border-transparent focus:outline-none focus:border-[#4b70f5] tracking-widest transition-all"
            />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center group">
              {showConfirmPassword ? (
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
        </div>

        <div className="flex items-center mt-2 pt-1">
          <input type="checkbox" className="w-3.5 h-3.5 rounded border-[#243763] bg-[#04113b] text-[#4b70f5] focus:ring-[#4b70f5]" />
          <span className="ml-2 text-[10px] text-[#8a99ba]">I agree to the Terms of Service and Privacy Policy.</span>
        </div>

        <button className="w-full mt-2 font-manrope bg-gradient-to-r from-[#6b8af7] to-[#95baf7] hover:from-[#567bf2] hover:to-[#8eb5ff] text-white font-bold py-2.5 px-4 rounded-full shadow-[0_0_20px_rgba(107,138,247,0.3)] border border-dashed border-[#8eb5ff]/50 transition-all duration-500 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_0_35px_rgba(107,138,247,0.6)]">
          Sign Up
        </button>
      </form>
    </div>
  );
}
