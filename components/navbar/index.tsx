import { Logo } from "@/assets/icons/Logo";

export default function Navbar() {
    return(
        <div className="py-6 w-primary max-w-primary mx-auto flex items-center justify-between">
            <Logo className="w-36" />
            <span className="text-xs text-secondary">
                Fast and easy CSGO Empire coins to buy and sell.
            </span>
        </div>
    )
}