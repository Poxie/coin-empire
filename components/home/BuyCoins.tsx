import { MONEY_PER_COIN } from "@/utils/constants";
import { useState } from 'react';
import Button from "../button";
import Input from "../input";
import HeaderContent from "./HeaderContent";

export default function BuyCoins() {
    const [id, setId] = useState('');
    const [amount, setAmount] = useState<null | number>(0);

    const disabled = !amount || !id;
    return(
        <HeaderContent
            header={`Buy for $${MONEY_PER_COIN} per coin`}
        >
            <Input 
                placeholder={'Your CSGO Empire ID'}
                onChange={setId}
                value={id}
            />
            <div className="pt-3 flex items-center gap-2">
                <Input 
                    placeholder={'Coin amount'}
                    onChange={amount => setAmount(amount ? Number(amount) : null)}
                    value={amount || ''}
                    type={'number'}
                />
                <span className="text-xl">
                    =
                </span>
                <Input
                    placeholder={'Specify your amount'}
                    onChange={console.log}
                    value={amount ? `$${(amount * MONEY_PER_COIN).toLocaleString()}` : ''}
                    disabled
                />
            </div>
            <Button
                disabled={disabled}
                onClick={console.log}
                className="w-full mt-3"
                type={disabled ? 'default' : 'primary'}
            >
                {!amount ? (
                    'Select an amount to buy'
                ) : (
                    `Buy ${amount.toLocaleString()} coins`
                )}
            </Button>
        </HeaderContent>
    )
}