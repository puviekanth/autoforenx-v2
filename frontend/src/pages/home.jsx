import React from "react";
import Navbar from "../components/navabr";

import AttackPath from "../components/graph";
import Overall from '../components/overall';
export default function Home(){
    return(
        <>
        <section className="bg-[#0f172a] w-[100vw]">
            < Navbar/>
            {/* <div className="w-full flex items-start justify-center gap-20">
                <Logo />
                <Recent />
                <SummaryPreview />
            </div> */}
            <Overall />
            <AttackPath />
            
            
        </section>
        
        </>
    );
}