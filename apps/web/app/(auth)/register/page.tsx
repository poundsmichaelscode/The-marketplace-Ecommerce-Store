import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { PasswordInput } from "@/components/auth/password-input";
import { SocialLoginButtons } from "@/components/auth/social-login-buttons";
export default function RegisterPage(){ return <AuthShell title="Create your account" subtitle="Join as a buyer, vendor, or marketplace operator."><form className="grid gap-4"><SocialLoginButtons/><input className="premium-input" placeholder="Full name"/><input className="premium-input" placeholder="Email address"/><select className="premium-input"><option>Buyer account</option><option>Vendor account</option></select><PasswordInput/><button className="rounded-full bg-marketGreen px-6 py-4 font-black text-white shadow-glow">Create account</button><p className="text-center text-sm text-marketDark/60">Already have an account? <Link href="/login" className="font-bold text-marketGreen">Login</Link></p></form></AuthShell> }
