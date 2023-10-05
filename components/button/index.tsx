export default function Button({ children, onClick, disabled, className='', type='primary' }: {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    type?: 'default' | 'primary';
    className?: string;
}) {
    className += type === 'default' ? ' bg-tertiary' : ' bg-c-primary';
    return(
        <button
            className={`p-4 text-xs rounded-lg hover:bg-opacity-75 ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}