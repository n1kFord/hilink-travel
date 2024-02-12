"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const openMobileMenu = () => setIsMobileMenuOpen(true);
    const closeMobileMenu = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("mobile-menu")) {
            setIsMobileMenuOpen(false);
        }
    };
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image
                    src="/hilink-logo.svg"
                    alt="logo"
                    width={74}
                    height={29}
                />
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        key={link.key}
                        className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="hidden lg:flexCenter">
                <Button
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>

            <button
                type="button"
                className="inline-block cursor-pointer lg:hidden"
                onClick={openMobileMenu}
            >
                <Image src="/menu.svg" alt="menu" width={32} height={32} />
            </button>
            {isMobileMenuOpen && (
                <motion.div
                    className="mobile-menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={closeMobileMenu}
                >
                    <div className="mobile-menu_container">
                        <ul className="mt-24 flex flex-col">
                            {NAV_LINKS.map((link, i) => (
                                <Link
                                    href={link.href}
                                    key={link.key}
                                    className="regular-20 text-gray-50 flexCenter cursor-pointer pb-5 last:pb-0 transition-all hover:text-gray-30"
                                >
                                    <motion.label
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.05 * i,
                                        }}
                                    >
                                        {link.label}
                                    </motion.label>
                                </Link>
                            ))}
                        </ul>

                        <div className="my-10" />
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <Image
                                src="/hilink-logo.svg"
                                alt="logo"
                                width={74}
                                height={29}
                                layout="responsive"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default NavBar;
