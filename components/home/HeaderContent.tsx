export default function HeaderContent({ children, header }: {
    children: React.ReactNode;
    header: string;
}) {
    return(
        <>
            <p className="pb-6 pt-2 text-center text-2xl font-semibold border-b-[2px] border-b-tertiary">
                {header}
            </p>
            <div className="pt-4">
                {children}
            </div>
        </>
    )
}