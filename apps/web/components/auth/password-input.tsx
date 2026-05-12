"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function PasswordInput({ placeholder = "Password" }: { placeholder?: string }) {
  const [show, setShow] = useState(false);
  return <div className="relative"><input type={show ? "text" : "password"} className="premium-input pr-12" placeholder={placeholder} /><button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-marketDark/45">{show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button></div>;
}
