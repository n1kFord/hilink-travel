import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
    return (
        <footer className="flexCenter mb-24">
            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link href="/" className="mt-10">
                        <Image
                            src="/hilink-logo.svg"
                            alt="logo"
                            width={74}
                            height={29}
                        />
                    </Link>

                    <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 mt-5 md:mt-0">
                        {FOOTER_LINKS.map((columns, i) => (
                            <FooterColumn
                                title={columns.title}
                                key={`f2column_${i}`}
                            >
                                <ul
                                    className="regular-14 flex flex-col gap-4 text-gray-30"
                                    key={`fcolumn_${i}`}
                                >
                                    {columns.links.map((link) => (
                                        <Link href="/" key={link}>
                                            {link}
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link) => (
                                    <Link
                                        href="/"
                                        key={link.label}
                                        className="flex gap-4 md:flex-col lg:flex-row"
                                    >
                                        <p className="whitespace-nowrap">
                                            {link.label}:
                                        </p>
                                        <p className="medium-14 whitespace-nowrap text-blue-70">
                                            {link.value}
                                        </p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div>

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={SOCIALS.title}>
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {SOCIALS.links.map((link) => (
                                        <Link href="/" key={link}>
                                            <Image
                                                src={link}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                            />
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>

                <div className="border bg-gray-20" />
                <p className="regular-14 w-full text-center text-gray-30">
                    2024 Hilink | All right reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;

interface FooterColumnProps {
    title: string;
    children: React.ReactNode;
}

const FooterColumn: FC<FooterColumnProps> = ({ title, children }) => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    );
};
