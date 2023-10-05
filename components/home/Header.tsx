"use client";
import { useState } from 'react';
import HeaderImage from "./HeaderImage";
import Input from "../input";
import Button from "../button";
import HeaderTabs from "./HeaderTabs";
import HeaderContent from './HeaderContent';
import BuyCoins from './BuyCoins';
import SellCoins from './SellCoins';

export type Tab = 'buy' | 'sell';
export default function Header() {
    const [type, setType] = useState<Tab>('buy');

    return(
        <div className="relative">
            <HeaderImage />
            <div className="mx-auto w-[550px] translate-y-24 p-4 relative z-[1] rounded-xl border-[3px] border-c-primary bg-primary">
                <HeaderTabs 
                    type={type}
                    setType={setType}
                />
                {type === 'buy' ? (
                    <BuyCoins />
                ) : (
                    <SellCoins />
                )}
            </div>
        </div>
    )
}