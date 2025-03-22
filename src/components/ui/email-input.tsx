
import { User } from "lucide-react";
import { Input } from "@/components/ui/input";

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
}

export const EmailInput = ({
  value,
  onChange,
  name,
  placeholder = "your-email@company.com",
  ...props
}: EmailInputProps) => {
  return (
    <div className="relative">
      <Input
        type="email"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        {...props}
      />
      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
  );
};
