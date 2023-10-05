export default function Input({ value, onChange, placeholder }: {
    value: string;
    onChange: (text: string) => void;
    placeholder?: string;
}) {
    return(
        <input 
            className="px-3 py-4 w-full text-xs bg-primary border-[1px] border-tertiary rounded"
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            value={value}
        />
    )
}