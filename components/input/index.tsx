import { twMerge } from 'tailwind-merge';

export default function Input({ value, onChange, placeholder, disabled, type, className }: {
    value: string | number;
    onChange: (text: string) => void;
    placeholder?: string;
    type?: HTMLInputElement['type'];
    disabled?: boolean;
    className?: string;
}) {
    return(
        <input 
            className={twMerge(
                "px-3 py-4 w-full text-xs bg-primary border-[1px] border-tertiary rounded",
                className,
            )}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            value={value}
            type={type}
            disabled={disabled}
        />
    )
}