import { Tab } from "./Header";
import HeaderTab from "./HeaderTab";

export default function HeaderTabs({ type, setType }: {
    type: Tab;
    setType: (tab: Tab) => void;
}) {
    return(
        <div className="absolute left-2/4 -translate-x-2/4 -translate-y-[calc(100%+19px)]">
            <ul className="flex text-xs font-bold bg-primary border-b-[3] border-b-c-primary rounded-t-xl overflow-hidden">
                <HeaderTab 
                    active={type === 'buy'}
                    onClick={() => setType('buy')}
                >
                    Buy coins
                </HeaderTab>
                <HeaderTab
                    active={type === 'sell'}
                    onClick={() => setType('sell')}
                    reverse
                >
                    Sell coins
                </HeaderTab>
            </ul>
        </div>
    )
}