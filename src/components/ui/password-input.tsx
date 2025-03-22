
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
}

export const PasswordInput = ({
  value,
  onChange,
  name,
  placeholder = "********",
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="pl-10 pr-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        {...props}
      />
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        tabIndex={-1}
      >
        {showPassword ? (
          <EyeOff className="h-5 w-5" />
        ) : (
          <Eye className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};
