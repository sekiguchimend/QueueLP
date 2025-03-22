
import { User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

interface EmailInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

const EmailInput = ({ name, label, placeholder = "your-email@company.com" }: EmailInputProps) => {
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
                placeholder={placeholder}
                className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                {...field}
              />
            </FormControl>
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default EmailInput;
