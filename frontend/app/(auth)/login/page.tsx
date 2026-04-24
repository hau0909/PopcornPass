import LoginForm from "@/src/features/auth/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div
            className="h-screen w-full relative flex flex-col items-center justify-center p-4 selection:bg-[#4b70f5] selection:text-white overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-[#000f3d]/70 backdrop-blur-sm pointer-events-none"></div>

            <div className="absolute inset-0 bg-stars pointer-events-none mix-blend-screen opacity-30"></div>

            {/* Chú ý: Dùng -translate-y-[X] để dịch chuyển form lên cao. Đổi số 12 thành số to hơn (ví dụ 16, 20) nễu muốn dịch lên nhiều hơn. */}
            <div className="w-full max-w-[420px] bg-[#0b1a43]/50 -translate-y-5 backdrop-blur-2xl rounded-[32px] px-6 py-8 sm:px-10 sm:py-8 text-center relative pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.6)] animate-slide-up border border-[#4b70f5]/30">
                <h2 className="font-playfair text-[24px] sm:text-[28px] font-bold text-white tracking-wide mb-1">Welcome Back</h2>
                <p className="text-[12px] sm:text-[13px] text-[#8a99ba] mb-5 drop-shadow-md">Enter the cosmic dimension of cinema</p>

                <LoginForm />

                <p className="mt-4 text-[11px] sm:text-[12px] text-[#8a99ba] flex items-center justify-center">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-white hover:text-[#8eb5ff] font-bold border border-dashed border-[#4b70f5] px-2 py-0.5 ml-1 transition-colors">
                        Join the Galaxy
                    </Link>
                </p>
            </div>

            <div className="absolute bottom-4 w-full flex justify-center gap-8 sm:gap-8 text-[#2b4279] text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase z-10">
                <Link href="#" className="hover:text-[#4b70f5] transition-colors">Privacy Nebula</Link>
                <Link href="#" className="hover:text-[#4b70f5] transition-colors">Terms of Void</Link>
                <Link href="#" className="hover:text-[#4b70f5] transition-colors">Support Center</Link>
            </div>
        </div>
    );
}
