'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import styled from 'styled-components';

export default function SplashScreen({logos}) {

    const mainLogo = logos[0].acf.logo.url;
    
    return (
        <motion.div
        initial={{ opacity: 1 }}
        animate={{
            opacity: 0,
            scale: 1.2,
            pointerEvents: "none",
            transition: { duration: 1 },
        }}
        whileFocus={{ display: "none" }}
        className="splash-screen"
        >
            <div className="splash-screen-wrapper">
                <Image className="splash-screen-logo" src={mainLogo} width={500} height={300} />
            </div>
        </motion.div>
    );
}