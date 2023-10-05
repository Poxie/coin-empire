import { twMerge } from "tailwind-merge";

export default function HeaderTab({ children, active, onClick, reverse }: {
    children: React.ReactNode;
    active: boolean;
    onClick: () => void;
    reverse?: boolean;
}) {
    return(
        <li className="relative">
            {active && (
                <div className={twMerge(
                    "w-4 aspect-square pointer-events-none z-10 absolute -bottom-[1px] rounded-bl-xl before:absolute before:bg-c-primary before:w-full before:aspect-square before:-z-[1] after:absolute after:bg-primary after:w-full after:aspect-square after:rounded-bl-xl after:left-[1px] after:bottom-[1px]",
                    !reverse ? 'left-[calc(100%-1px)]' : 'right-[calc(100%-1px)] -rotate-90'
                )} />
            )}
            <button
                className={`py-3 px-8 ${active ? 'bg-c-primary ' + (reverse ? 'rounded-tl-xl' : 'rounded-tr-xl') : ''}`}
                onClick={onClick}
            >
                {children}
            </button>
        </li>
    )
}