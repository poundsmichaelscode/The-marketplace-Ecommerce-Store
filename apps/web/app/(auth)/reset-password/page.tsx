import { AuthShell } from "@/components/auth/auth-shell";
import { PasswordInput } from "@/components/auth/password-input";
export default function ResetPasswordPage(){ return <AuthShell title="Choose a new password" subtitle="Create a strong password to secure your marketplace account."><form className="grid gap-4"><PasswordInput placeholder="New password"/><PasswordInput placeholder="Confirm password"/><button className="rounded-full bg-marketGreen px-6 py-4 font-black text-white shadow-glow">Update password</button></form></AuthShell> }
