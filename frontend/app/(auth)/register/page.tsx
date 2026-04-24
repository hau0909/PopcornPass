import RegisterForm from "@/src/features/auth/components/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div
      className="h-screen w-full relative flex flex-col items-center justify-center p-2 sm:p-4 selection:bg-[#4b70f5] selection:text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop')" }}
    >

      <div className="absolute inset-0 bg-[#000f3d]/70 backdrop-blur-sm pointer-events-none"></div>

      <div className="absolute inset-0 bg-stars pointer-events-none mix-blend-screen opacity-30"></div>

      <div className="w-full max-w-[420px] bg-[#0b1a43]/50 backdrop-blur-2xl rounded-[32px] px-6 py-4 sm:px-8 sm:py-5 text-center relative pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.6)] animate-slide-up border border-[#4b70f5]/30">
        <h2 className="font-playfair text-[22px] sm:text-[24px] font-bold text-white tracking-wide mb-1">Create Account</h2>
        <p className="text-[11px] sm:text-[12px] text-[#8a99ba] mb-3 drop-shadow-md">Enter your details to begin.</p>

        <RegisterForm />

        <p className="mt-3 text-[11px] sm:text-[12px] text-[#8a99ba] flex items-center justify-center">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:text-[#8eb5ff] font-bold border border-dashed border-[#4b70f5] px-2 py-0.5 ml-1 transition-colors">
            Log In
          </Link>
        </p>
      </div>

    </div>
  );
}
