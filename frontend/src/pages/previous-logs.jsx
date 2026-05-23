import React from "react";
import Navbar from "../components/navabr";
import PreviousScans from "../components/previous";

export default function PreviousLogs(){
    return(
        <>
        <section className="min-h-screen h-[100vh">
            <Navbar/>
            <PreviousScans/>
        </section>
        </>
    );
}