export default function Explanation({ header, items }: {
    header: string;
    items: { title: string, content: string }[];
}) {
    return(
        <div>
            <h2 className="text-2xl mb-2">
                {header}
            </h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                {items.map(item => (
                    <li 
                        className="p-3 grid gap-1 text-xs rounded bg-secondary border-[1px] border-tertiary"
                        key={item.title}
                    >
                        <span>
                            {item.title}
                        </span>
                        <span className="text-secondary">
                            {item.content}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}