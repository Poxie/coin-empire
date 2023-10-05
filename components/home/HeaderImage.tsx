import Image from "next/image";

export default function HeaderImage() {
    return(
        <div className="pointer-events-none absolute h-[380px] w-full flex items-start">
            <Image
                className="absolute top-0 left-0 min-w-full h-full object-cover opacity-40 blur-sm"
                src={'https://i.poxen.dev/xliBOw.png'}
                width={1920}
                height={1080}
                alt=""
            />
        </div>
    )
}