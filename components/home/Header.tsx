"use client";
import { useState } from 'react';
import HeaderImage from "./HeaderImage";
import Input from "../input";
import Button from "../button";
import HeaderTabs from "./HeaderTabs";

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
                <p className="pb-6 pt-2 text-center text-2xl font-semibold border-b-[2px] border-b-tertiary">
                    Buy for $0.7 per coin
                </p>
                <div className="pt-4">
                    <Input 
                        placeholder={'Your CSGO Empire ID'}
                        onChange={console.log}
                        value={''}
                    />
                    <div className="pt-3 flex items-center gap-2">
                        <Input 
                            placeholder={'Coin amount'}
                            onChange={console.log}
                            value={''}
                        />
                        <span className="text-xl">
                            =
                        </span>
                        <Input 
                            placeholder={'Specify your amount'}
                            onChange={console.log}
                            value={''}
                        />
                    </div>
                    <Button
                        onClick={console.log}
                        className="w-full mt-3"
                        type={'default'}
                    >
                        Select an amount to buy
                    </Button>
                </div>
            </div>
        </div>
    )
}