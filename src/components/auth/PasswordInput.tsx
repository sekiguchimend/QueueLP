
import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

interface PasswordInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

const PasswordInput = ({ name, label, placeholder = "********" }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gray-700">{label}</FormLabel>
          <div className="relative">
            <FormControl>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                className="pl-10 pr-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                {...field}
              />
            </FormControl>
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
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PasswordInput;
