import Explanation from "./Explanation";

export default function FrequentlyAsked() {
    return(
        <div className="mt-56 w-primary max-w-primary mx-auto grid gap-8">
            <Explanation 
                header={'How buying coins work'}
                items={[
                    { title: 'Step one', content: 'You enter your CSGO Empire ID and the amount of coins you want to purchase.' },
                    { title: 'Step two', content: 'Click buy coins and confirm your purchase.' },
                    { title: 'Step three', content: 'Watch your coins appear in your CSGO Empire account within seconds.' },
                ]}
            />
            <Explanation 
                header={'How selling coins work'}
                items={[
                    { title: 'Step one', content: 'Enter your CSGO empire ID and PayPal address, along with the amount of coins you want to sell.' },
                    { title: 'Step two', content: 'Click sell coins and wait while we verify your CSGO Empire account and coin count.' },
                    { title: 'Step three', content: 'Watch your money appear in your PayPal account.' },
                ]}
            />
        </div>
    )
}